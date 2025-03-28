import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const stripeSecretKey = process.env.STRIPE_PRIVATE_KEY!;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
    if (!stripeSecretKey || !webhookSecret) {
      throw new Error('Missing Stripe keys in environment.');
    }

    const stripe = new Stripe(stripeSecretKey);
    const sig = req.headers.get('stripe-signature');
    if (!sig) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
    }

    const rawBody = await req.arrayBuffer(); // read the raw body
    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(Buffer.from(rawBody), sig, webhookSecret);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Error verifying Stripe webhook:', err);
        return NextResponse.json({ error: err.message }, { status: 400 });
      }
      console.error('Unknown error verifying Stripe webhook:', err);
      return NextResponse.json({ error: 'Unknown error occurred' }, { status: 400 });
    }

    // Now handle your events
    switch (event.type) {
      case 'checkout.session.completed':
        console.log('Checkout session completed:', event.data.object);
        break;
      // ...
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });

  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('General error receiving webhook:', err);
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    console.error('Unknown error receiving webhook:', err);
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}
