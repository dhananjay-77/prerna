import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { connectDB } from '@/lib/db';
import { Donation } from '@/models';

const schema = z.object({
  name: z.string().trim().min(2).max(150), email: z.string().trim().email(), mobile: z.string().trim().min(6).max(30),
  address: z.string().trim().max(500).optional(), pan: z.string().trim().max(30).optional(),
  amount: z.coerce.number().positive().max(10_000_000), purpose: z.string().trim().min(1).max(200), message: z.string().trim().max(5_000).optional(),
});

export async function POST(request: Request) {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    return NextResponse.json({ error: 'Online donations are not configured yet.' }, { status: 503 });
  }

  try {
    const donationDetails = schema.parse(await request.json());
    await connectDB();
    const razorpay = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET });
    const order = await razorpay.orders.create({ amount: Math.round(donationDetails.amount * 100), currency: 'INR', receipt: `PF-${Date.now()}`, notes: { purpose: donationDetails.purpose } });
    const donation = await Donation.create({ ...donationDetails, email: donationDetails.email.toLowerCase(), amount: donationDetails.amount, orderId: order.id, status: 'pending' });

    return NextResponse.json({ key: process.env.RAZORPAY_KEY_ID, orderId: order.id, amount: order.amount, donationId: String(donation._id) });
  } catch (error) {
    if (error instanceof z.ZodError || error instanceof SyntaxError) return NextResponse.json({ error: 'Invalid donation details.' }, { status: 400 });
    console.error('Razorpay order creation failed.', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json({ error: 'Could not create payment order.' }, { status: 500 });
  }
}
