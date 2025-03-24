import { NextRequest, NextResponse } from 'next/server';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { db } from '@lib/firebase';

const usersCollectionRef = collection(db, "users");

const userSchema = z.object({
  name: z.string().min(1, "Name is required").trim(),
  email: z.string().email("Invalid email address").trim().toLowerCase(),
  birthYear: z.coerce.number().int().min(1900, "Birth year must be 1900 or later").max(new Date().getFullYear(), `Birth year cannot be later than ${new Date().getFullYear()}`),
  consent: z.boolean().refine(val => val === true, "Consent is required")
});

export const GET = async (req: NextRequest) => {

  try {
    const cookies = req.cookies;
    const sessionToken = cookies.get('sessionToken');

    if (!sessionToken) {
      return NextResponse.json({ error: 'No session token found' }, { status: 401 });
    }

    const userQuery = query(usersCollectionRef, where('sessionToken', '==', sessionToken.value));
    const userSnapshot = await getDocs(userQuery);

    if (userSnapshot.empty) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const userData = userSnapshot.docs[0].data();

    return NextResponse.json({
      name: userData.name,
      email: userData.email
    }, { status: 200 });
  } catch (error) {
    console.error('Error fetching user:', error);

    const errorMessage = error instanceof Error ? error.message : "Error fetching user";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}

export const POST = async (req: NextRequest) => {

  try {
    const cookies = req.cookies;
    const existingSessionToken = cookies.get('sessionToken');

    if (existingSessionToken) {
      return NextResponse.json({ error: 'Test limit reached, wait for 1 hour to re-do the test' }, { status: 429 });
    }

    const oneHour = 60 * 60;
    const data = await req.json();
    const parsedData = userSchema.parse(data);
    const { name, email, birthYear } = parsedData;
    const docReference = doc(usersCollectionRef, email);
    const sessionToken = uuidv4();
    const currentDateTime = new Date().toISOString();

    await setDoc(docReference, {
      name,
      email,
      birthYear,
      consent: currentDateTime,
      consentText: 'I consent to the collection and processing of my personal information.',
      sessionToken,
      sessionCreatedAt: currentDateTime,
    });



    const response = NextResponse.json({ message: 'User created successfully' }, { status: 201 });
    response.cookies.set('sessionToken', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: oneHour
    });

    return response;
  } catch (error) {
    console.error('Error creating user:', error);

    const errorMessage = error instanceof Error ? error.message : "Error creating user";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}