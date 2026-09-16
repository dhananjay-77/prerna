import jwt, { type JwtPayload } from 'jsonwebtoken';
import { cookies } from 'next/headers';

export const SESSION_COOKIE = 'prerna_session';
const ADMIN_ROLES = new Set(['super_admin', 'content_admin']);

export type AdminSession = {
  id: string;
  email: string;
  role: 'super_admin' | 'content_admin';
};

export class AuthError extends Error {
  constructor(public readonly status: 401 | 403) {
    super(status === 403 ? 'FORBIDDEN' : 'UNAUTHORIZED');
  }
}

function getSecret() {
  const secret = process.env.JWT_SECRET;
  if (secret) return secret;

  if (process.env.NODE_ENV === 'production') {
    throw new Error('JWT_SECRET is not configured');
  }

  return 'development-only-change-me';
}

function normalizePayload(payload: JwtPayload): AdminSession | null {
  const { id, email, role } = payload;
  if (typeof id !== 'string' || typeof email !== 'string' || typeof role !== 'string') return null;
  if (!ADMIN_ROLES.has(role)) return null;

  return { id, email: email.toLowerCase(), role: role as AdminSession['role'] };
}

export function signSession(session: AdminSession): string {
  return jwt.sign(
    {
      id: String(session.id),
      email: String(session.email).toLowerCase(),
      role: session.role,
    },
    getSecret(),
    {
      expiresIn: '8h',
    }
  );
}

export async function session(): Promise<AdminSession | null> {
  try {
    const token = (await cookies()).get(SESSION_COOKIE)?.value;

    if (!token) {
      return null;
    }

    const decoded = jwt.verify(token, getSecret());

    if (typeof decoded === 'string') return null;
    return normalizePayload(decoded);
  } catch {
    // Invalid and expired cookies are normal logged-out states.
    return null;
  }
}

export async function requireAdmin(financial = false): Promise<AdminSession> {
  const currentSession = await session();

  if (!currentSession) {
    throw new AuthError(401);
  }

  if (
    financial &&
    currentSession.role !== 'super_admin'
  ) {
    throw new AuthError(403);
  }

  return currentSession;
}

export async function logoutSession(): Promise<void> {
  (await cookies()).set(SESSION_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
  });
}
