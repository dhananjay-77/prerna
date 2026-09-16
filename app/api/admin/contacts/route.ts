import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { ContactRequest } from '@/models';
import { AuthError, requireAdmin } from '@/lib/auth';

export async function GET() {
  try {
    await requireAdmin();
    await connectDB();

    const contacts = await ContactRequest
      .find()
      .sort('-createdAt')
      .lean();

    return NextResponse.json(contacts);
  } catch (error) {
    if (!(error instanceof AuthError)) {
      console.error('Unable to load contacts.', error instanceof Error ? error.message : 'Unknown error');
      return NextResponse.json({ error: 'Unable to load contacts' }, { status: 500 });
    }
    return NextResponse.json(
      { error: error.status === 403 ? 'Forbidden' : 'Unauthorized' },
      { status: error.status }
    );
  }
}
