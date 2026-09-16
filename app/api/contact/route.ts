import { NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import { connectDB } from '@/lib/db';
import { ContactRequest } from '@/models';

const schema = z.object({ name: z.string().min(2).max(100), email: z.string().email(), phone: z.string().max(30), address: z.string().max(500).optional(), subject: z.string().min(2).max(200), type: z.string().max(50), message: z.string().min(5).max(5000) });
const missingSmtpConfiguration = () => ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASSWORD', 'FROM_EMAIL', 'ADMIN_EMAIL'].filter((key) => !process.env[key]);

export async function POST(request: Request) {
  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  try {
    const body = schema.parse(input);
    await connectDB();
    const item = await ContactRequest.create(body);
    let notificationStatus = 'not_configured';
    if (!missingSmtpConfiguration().length) {
      try {
        const transporter = nodemailer.createTransport({ host: process.env.SMTP_HOST!, port: Number(process.env.SMTP_PORT || 587), secure: process.env.SMTP_SECURE === 'true', auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASSWORD! } });
        await transporter.sendMail({ from: process.env.FROM_EMAIL!, to: process.env.ADMIN_EMAIL!, subject: `New contact request: ${body.subject}`, text: `${body.name} (${body.email})\n${body.message}` });
        notificationStatus = 'sent';
      } catch {
        console.error('Contact notification email failed.');
        notificationStatus = 'failed';
      }
    }
    return NextResponse.json({ id: item._id, notificationStatus }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ error: 'Invalid form details' }, { status: 400 });
    console.error('Contact request could not be saved.', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json({ error: 'Unable to save enquiry' }, { status: 500 });
  }
}
