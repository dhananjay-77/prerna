import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/db';
import { User } from '@/models';
import { signSession } from '@/lib/auth';

export async function POST(request) {
  try {
    const body = await request.json();

    const email = String(body?.email || '').trim().toLowerCase();
    const password = String(body?.password || '');

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    await connectDB();

    console.log('[ADMIN LOGIN] email:', email);

    const user = await User.findOne({
      email: email,
    });

    console.log('[ADMIN LOGIN] user found:', !!user);
    console.log(
      '[ADMIN LOGIN] password field exists:',
      !!user?.password
    );
    console.log(
      '[ADMIN LOGIN] role:',
      user?.role || null
    );

    if (!user) {
      return NextResponse.json(
        {
          error: 'USER_NOT_FOUND',
          message: 'Admin user was not found in the database.',
        },
        { status: 401 }
      );
    }

    if (!user.password) {
      return NextResponse.json(
        {
          error: 'PASSWORD_FIELD_MISSING',
          message: 'User password field is missing.',
        },
        { status: 500 }
      );
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    console.log(
      '[ADMIN LOGIN] password match:',
      passwordMatch
    );

    if (!passwordMatch) {
      return NextResponse.json(
        {
          error: 'PASSWORD_MISMATCH',
          message: 'Password does not match the stored password.',
        },
        { status: 401 }
      );
    }

    if (!user.role) {
      return NextResponse.json(
        {
          error: 'ROLE_MISSING',
          message: 'Admin user role is missing.',
        },
        { status: 500 }
      );
    }

    const token = signSession({
      id: String(user._id),
      email: String(user.email).toLowerCase(),
      role: user.role,
    });

    const response = NextResponse.json({
      ok: true,
    });

    response.cookies.set('prerna_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 28800,
      path: '/',
    });

    console.log('[ADMIN LOGIN] login successful');

    return response;
  } catch (error) {
    console.error('[ADMIN LOGIN] SERVER ERROR:', {
      name: error?.name,
      message: error?.message,
    });

    return NextResponse.json(
      {
        error: 'SERVER_ERROR',
        message: 'Unable to sign in.',
      },
      { status: 500 }
    );
  }
}