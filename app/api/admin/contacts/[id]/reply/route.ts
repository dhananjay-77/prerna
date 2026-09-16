import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { ContactRequest } from '@/models';
import { AuthError, requireAdmin } from '@/lib/auth';
import nodemailer from 'nodemailer';

const smtpIsConfigured = () => Boolean(
  process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD && process.env.FROM_EMAIL
);

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await requireAdmin();

    let body: { message?: unknown };
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }
    const message = String(body.message || '').trim();

    if (!message || message.length > 5000) {
      return NextResponse.json(
        { error: 'Reply message is required' },
        { status: 400 }
      );
    }

    const { id } = await params;

    await connectDB();

    if (!/^[a-f\d]{24}$/i.test(id)) {
      return NextResponse.json({ error: 'Invalid contact request ID' }, { status: 400 });
    }

    const contact = await ContactRequest.findById(id);

    if (!contact) {
      return NextResponse.json(
        { error: 'Contact request not found' },
        { status: 404 }
      );
    }

    let emailStatus = 'not_configured';

    if (smtpIsConfigured() && contact.email) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      try {
        await transporter.sendMail({
          from: process.env.FROM_EMAIL,
          to: contact.email,
          subject: `Re: ${contact.subject || 'Contact Request'}`,
          text: message,
        });
        emailStatus = 'sent';
      } catch {
        console.error('Reply email delivery failed.');
        emailStatus = 'failed';
      }
    }

    if (!contact.replies) {
      contact.replies = [];
    }

    contact.replies.push({
      message,
      admin: admin.email,
      emailStatus,
    });

    contact.status = 'replied';

    await contact.save();

    return NextResponse.json({
      ok: true,
      emailStatus,
    });
  } catch (error) {
    if (error instanceof AuthError) return NextResponse.json({ error: error.status === 403 ? 'Forbidden' : 'Unauthorized' }, { status: error.status });
    console.error('Reply API error.', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json({ error: 'Unable to send reply' }, { status: 500 });
  }
}
