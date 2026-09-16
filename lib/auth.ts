import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const SESSION_COOKIE = 'prerna_session';

function getSecret() {
  const secret = process.env.JWT_SECRET;

  if (secret) {
    return secret;
  }

  if (process.env.NODE_ENV === 'production') {
    throw new Error('JWT_SECRET is not configured');
  }

  return 'development-only-change-me';
}

export function signSession(session) {
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

export async function session() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE)?.value;

    if (!token) {
      return null;
    }

    const decoded = jwt.verify(token, getSecret());

    if (!decoded || typeof decoded !== 'object') {
      return null;
    }

    return {
      id: String(decoded.id),
      email: String(decoded.email).toLowerCase(),
      role: decoded.role,
    };
  } catch {
    return null;
  }
}

export async function requireAdmin(financial = false) {
  const currentSession = await session();

  if (!currentSession) {
    throw new Error('UNAUTHORIZED');
  }

  if (
    financial &&
    currentSession.role !== 'super_admin'
  ) {
    throw new Error('UNAUTHORIZED');
  }

  return currentSession;
}

export async function logoutSession() {
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
  });
}