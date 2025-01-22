import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, collection } from 'firebase/firestore';
import { NextRequest, NextResponse } from 'next/server';

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

export const POST = async (req: NextRequest) => {
  console.log('Creating user...');
  const { name, email, consent } = await req.json();
  const normalizedEmail = email.trim().toLowerCase();

  if (!name || !email || !consent) {
    return NextResponse.json({ error: "Name, email, and consent are required" }, { status: 400 });
  }
  
  const docReference = doc(usersCollectionRef, normalizedEmail);

  try {
    await setDoc(docReference, {
      name,
      email,
      consent: new Date(),
      consentText: 'I consent to the collection and processing of my personal information.'
    });

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}