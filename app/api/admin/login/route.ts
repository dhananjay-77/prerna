import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { signSession } from '@/lib/auth';
import { connectDB } from '@/lib/db';
import { User } from '@/models';

export async function POST(request: Request) {
  let body: { email?: unknown; password?: unknown };
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid request body' }, { status: 400 }); }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const password = typeof body.password === 'string' ? body.password : '';
  if (!email || !password) return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });

  try {
    await connectDB();
    const user = await User.findOne({ email });
    if (!user || typeof user.password !== 'string' || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    const response = NextResponse.json({ ok: true });
    response.cookies.set('prerna_session', signSession({ id: String(user._id), email: user.email, role: user.role }), {
      httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', maxAge: 28_800, path: '/',
    });
    return response;
  } catch (error) {
    console.error('Admin login failed.', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json({ error: 'Unable to sign in' }, { status: 500 });
  }
}
