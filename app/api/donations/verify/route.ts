import crypto from 'crypto';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Donation } from '@/models';

const isObjectId = (value: string) => /^[a-f\d]{24}$/i.test(value);

export async function POST(request: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, donationId } = await request.json();
    if (!process.env.RAZORPAY_KEY_SECRET || ![razorpay_order_id, razorpay_payment_id, razorpay_signature, donationId].every((value) => typeof value === 'string') || !isObjectId(donationId)) {
      return NextResponse.json({ error: 'Invalid payment verification data' }, { status: 400 });
    }

    const expected = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET).update(`${razorpay_order_id}|${razorpay_payment_id}`).digest('hex');
    const supplied = Buffer.from(razorpay_signature, 'utf8');
    const calculated = Buffer.from(expected, 'utf8');
    if (supplied.length !== calculated.length || !crypto.timingSafeEqual(calculated, supplied)) return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });

    await connectDB();
    const existing = await Donation.findById(donationId);
    if (!existing || existing.orderId !== razorpay_order_id) return NextResponse.json({ error: 'Donation not found' }, { status: 404 });
    if (existing.status === 'successful') return NextResponse.json({ receiptNumber: existing.receiptNumber, emailStatus: existing.emailStatus || 'not_configured' });

    const receipt = `PF-${new Date().getFullYear()}-${String(Date.now()).slice(-7)}`;
    const donation = await Donation.findOneAndUpdate({ _id: donationId, orderId: razorpay_order_id, status: { $ne: 'successful' } }, { status: 'successful', paymentId: razorpay_payment_id, receiptNumber: receipt }, { new: true });
    if (!donation) return NextResponse.json({ error: 'Donation has already been processed' }, { status: 409 });

    let emailStatus = 'not_configured';
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD && process.env.FROM_EMAIL) {
      try {
        const transporter = nodemailer.createTransport({ host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT || 587), secure: process.env.SMTP_SECURE === 'true', auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD } });
        await transporter.sendMail({ from: process.env.FROM_EMAIL, to: donation.email, subject: 'Thank You for Supporting Prerna Foundation', text: `Dear ${donation.name},\n\nThank you for your donation of ₹${donation.amount} towards ${donation.purpose}.\nReceipt: ${receipt}\nPayment reference: ${razorpay_payment_id}\n\nPrerna Foundation` });
        emailStatus = 'sent';
      } catch {
        console.error('Donation receipt email failed.');
        emailStatus = 'failed';
      }
    }

    donation.emailStatus = emailStatus;
    await donation.save();
    return NextResponse.json({ receiptNumber: receipt, emailStatus });
  } catch (error) {
    console.error('Donation verification failed.', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json({ error: 'Verification could not be completed.' }, { status: error instanceof SyntaxError ? 400 : 500 });
  }
}
