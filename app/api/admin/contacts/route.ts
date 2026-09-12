import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { ContactRequest } from '@/models';
import { requireAdmin } from '@/lib/auth';

export async function GET() {
  try {
    await requireAdmin();
    await connectDB();

    const contacts = await ContactRequest
      .find()
      .sort('-createdAt')
      .lean();

    return NextResponse.json(contacts);
  } catch {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
}