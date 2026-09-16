import { NextResponse } from 'next/server';
import { signSession } from '@/lib/auth';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email = String(body?.email ?? '')
      .trim()
      .toLowerCase();

    const password = String(body?.password ?? '');

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const adminEmail = String(
      process.env.ADMIN_EMAIL ?? ''
    )
      .trim()
      .toLowerCase();

    const adminPassword = String(
      process.env.ADMIN_PASSWORD ?? ''
    );

    if (!adminEmail || !adminPassword) {
      console.error(
        '[ADMIN LOGIN] ADMIN_EMAIL or ADMIN_PASSWORD is missing'
      );

      return NextResponse.json(
        { error: 'Admin login is not configured' },
        { status: 500 }
      );
    }

    if (
      email !== adminEmail ||
      password !== adminPassword
    ) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    const token = signSession({
      id: 'static-admin',
      email: adminEmail,
      role: 'super_admin',
    });

    const response = NextResponse.json({
      ok: true,
    });

    response.cookies.set('prerna_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 8,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('[ADMIN LOGIN] Error:', {
      name:
        error instanceof Error
          ? error.name
          : 'UnknownError',
      message:
        error instanceof Error
          ? error.message
          : 'Unknown server error',
    });

    return NextResponse.json(
      { error: 'Unable to sign in' },
      { status: 500 }
    );
  }
}