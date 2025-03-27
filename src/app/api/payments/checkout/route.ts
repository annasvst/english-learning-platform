import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const checkoutSchema = z.object({
  eventId: z.string(),
});

export const POST = async (req: NextRequest) => {
  try {
    const STRIPE_PRIVATE_KEY = process.env.STRIPE_PRIVATE_KEY;
    const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!STRIPE_PRIVATE_KEY || !NEXT_PUBLIC_API_BASE_URL) throw new Error(
      "STRIPE_SECRET_KEY or NEXT_PUBLIC_API_BASE_URL is not defined.",
    );
    const stripe = new Stripe(STRIPE_PRIVATE_KEY);

    const data = await req.json();
    const parsedData = checkoutSchema.parse(data);
    const { eventId } = parsedData;

    const checkoutSession = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: 'price_1R7BLQK2ygpdYo0fzDJq0v14',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${NEXT_PUBLIC_API_BASE_URL}/speaking-club/booking/success`,
      cancel_url: `${NEXT_PUBLIC_API_BASE_URL}/speaking-club/booking/cancel`,
      metadata: {
        eventId,
      },
    });
    
    return NextResponse.json({ url: checkoutSession.url }, { status: 200 });

  } catch (error) {
    console.error('Checkout Session Error:', error);
    return NextResponse.json({ error: "Error creating checkout session" }, { status: 500 });
  }

}
