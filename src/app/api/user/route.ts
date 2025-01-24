import { NextRequest, NextResponse } from 'next/server';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, collection } from 'firebase/firestore';
import { z } from 'zod';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersCollectionRef = collection(db, "users");

const userSchema = z.object({
  name: z.string().min(1, "Name is required").trim(),
  email: z.string().email("Invalid email address").trim().toLowerCase(),
  birthYear: z.coerce.number().int().min(1900, "Birth year must be 1900 or later").max(new Date().getFullYear(), `Birth year cannot be later than ${new Date().getFullYear()}`),
  consent: z.boolean().refine(val => val === true, "Consent is required")
});

export const POST = async (req: NextRequest) => {
  console.log('Creating user...');

  try {
    const data = await req.json();
    const parsedData = userSchema.parse(data);
    const { name, email, birthYear } = parsedData;
    const docReference = doc(usersCollectionRef, email);

    await setDoc(docReference, {
      name,
      email,
      birthYear,
      consent: new Date(),
      consentText: 'I consent to the collection and processing of my personal information.'
    });

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);

    const errorMessage = error instanceof Error ? error.message : "Error creating user";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}