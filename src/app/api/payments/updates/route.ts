import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'nodejs';

export const POST = async (req: NextRequest) => {
  try {
    console.log(req);
    const STRIPE_PRIVATE_KEY = process.env.STRIPE_PRIVATE_KEY;
    const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

    if (!STRIPE_PRIVATE_KEY || !STRIPE_WEBHOOK_SECRET) throw Error(
      "STRIPE_SECRET_KEY or(and) STRIPE_WEBHOOK_SECRET is not defined.",
    );

    const stripe = new Stripe(STRIPE_PRIVATE_KEY);
    const sig = req.headers.get('stripe-signature');
    if (!sig) {
      throw Error(
        "stripe-signature is missing in the request",
      );
    }

    let event;

    try {
      const rawBody = await buffer(req);
      event = stripe.webhooks.constructEvent(rawBody, sig, STRIPE_WEBHOOK_SECRET);


    } catch (err) {
      console.error('Error verifying Stripe webhook signature:', err);
      const errorMessage = (err instanceof Error) ? err.message : 'Unknown error occurred';
        
      return NextResponse.json({ error: `Webhook Error: ${errorMessage}` }, { status: 400 });
    }

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        console.log('Payment complete for session:', session.id, session);
        // Example: Update DB or email user
        // await updateDbWithPayment(session);
        // await sendEmailToUser(session);
        break;
      }
      // ... handle other event types if needed ...
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
  
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err) {
    console.error('Error recieving Stripe webhook signature:', err);
    const errorMessage = (err instanceof Error) ? err.message : 'Unknown error occurred';
    return NextResponse.json({ error: `Error recieving Webhook: ${errorMessage}` }, { status: 500 });

  }
}

async function buffer(readable: NextRequest) {
  const reader = readable.body?.getReader();
  const chunks = [];
  if (!reader) throw new Error('Readable stream is not available on the request.');

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }

  return Buffer.concat(chunks);
}
