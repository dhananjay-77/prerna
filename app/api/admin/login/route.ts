import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/db';
import { User } from '@/models';
import { signSession } from '@/lib/auth';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    // -----------------------------------------
    // Read request body
    // -----------------------------------------
    let body: {
      email?: unknown;
      password?: unknown;
    };

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          error: 'Invalid request',
        },
        {
          status: 400,
        }
      );
    }

    // -----------------------------------------
    // Normalize credentials
    // -----------------------------------------
    const email = String(body?.email ?? '')
      .trim()
      .toLowerCase();

    const password = String(body?.password ?? '');

    if (!email || !password) {
      return NextResponse.json(
        {
          error: 'Email and password are required',
        },
        {
          status: 400,
        }
      );
    }

    // -----------------------------------------
    // Connect to MongoDB Atlas
    // -----------------------------------------
    await connectDB();

    // -----------------------------------------
    // Find admin user
    // -----------------------------------------
    const user = await User.findOne({
      email,
    }).select('+password');

    // Never reveal whether email exists
    // -----------------------------------------
    if (!user) {
      return NextResponse.json(
        {
          error: 'Invalid email or password',
        },
        {
          status: 401,
        }
      );
    }

    // -----------------------------------------
    // Validate stored password
    // -----------------------------------------
    if (
      typeof user.password !== 'string' ||
      !user.password.trim()
    ) {
      console.error(
        '[ADMIN LOGIN] User password is missing'
      );

      return NextResponse.json(
        {
          error: 'Unable to sign in',
        },
        {
          status: 500,
        }
      );
    }

    // -----------------------------------------
    // Compare bcrypt password
    // -----------------------------------------
    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return NextResponse.json(
        {
          error: 'Invalid email or password',
        },
        {
          status: 401,
        }
      );
    }

    // -----------------------------------------
    // Validate role
    // -----------------------------------------
    const role = String(user.role || '').trim();

    if (
      role !== 'super_admin' &&
      role !== 'content_admin'
    ) {
      console.error(
        '[ADMIN LOGIN] Invalid or missing user role'
      );

      return NextResponse.json(
        {
          error: 'Unable to sign in',
        },
        {
          status: 500,
        }
      );
    }

    // -----------------------------------------
    // Create JWT session
    // -----------------------------------------
    const token = signSession({
      id: String(user._id),
      email: email,
      role: role,
    });

    // -----------------------------------------
    // Create response
    // -----------------------------------------
    const response = NextResponse.json(
      {
        ok: true,
      },
      {
        status: 200,
      }
    );

    // -----------------------------------------
    // Set secure admin session cookie
    // -----------------------------------------
    response.cookies.set(
      'prerna_session',
      token,
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 8,
        path: '/',
      }
    );

    return response;
  } catch (error) {
    // Safe server-side logging
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
      {
        error: 'Unable to sign in',
      },
      {
        status: 500,
      }
    );
  }
}