import { NextResponse } from 'next/server';
import { AuthError, requireAdmin } from '@/lib/auth';
import { connectDB } from '@/lib/db';
import { Donation } from '@/models';

export async function GET() {
  try {
    await requireAdmin(true);
    await connectDB();
    return NextResponse.json(await Donation.find().sort('-createdAt').lean());
  } catch (error) {
    if (error instanceof AuthError) return NextResponse.json({ error: error.status === 403 ? 'Forbidden' : 'Unauthorized' }, { status: error.status });
    console.error('Unable to load donations.', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json({ error: 'Unable to load donations' }, { status: 500 });
  }
}
