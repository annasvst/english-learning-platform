import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "modules/app/_lib/firebase";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const answerSchema = z.object({
  reading: z.record(
    z.string(),
    z.record(z.string(), z.string())
  ).optional(),
  listening: z.record(
    z.string(),
    z.record(z.string(), z.string())
  ).optional(),
  grammar:  z.record(
    z.string(),
    z.record(z.string(), z.string())
  ).optional(),
});

const usersCollectionRef = collection(db, "users");
const answersCollectionRef = collection(db, "answers");


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
    const userEmail = userData.email;

    const docReference = doc(answersCollectionRef, userEmail);
    const docSnapshot = await getDoc(docReference);

    if (!docSnapshot.exists()) {
      return NextResponse.json({ error: 'Answers not found' }, { status: 404 });
    }

    const docData = docSnapshot.data();

    return NextResponse.json(docData, { status: 200 });
  } catch (error) {
    console.error('Error fetching answers:', error);

    const errorMessage = error instanceof Error ? error.message : "Error fetching answers";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }

};


export const POST = async (req: NextRequest) => {
    try {
      const cookies = req.cookies;
      const sessionToken = cookies.get('sessionToken');
  
      if (!sessionToken) {
        return NextResponse.json({ error: 'No session token found' }, { status: 401 });
      }

      const data = await req.json();
      const parsedData = answerSchema.parse(data);

  
      const userQuery = query(usersCollectionRef, where('sessionToken', '==', sessionToken.value));
      const userSnapshot = await getDocs(userQuery);
  
      if (userSnapshot.empty) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
  
      const userData = userSnapshot.docs[0].data();
      const userEmail = userData.email;

      const docReference = doc(answersCollectionRef, userEmail);

      const existingDoc = await getDoc(docReference);
      const existingData = existingDoc.exists() ? existingDoc.data() : {};
  
      const mergedData = {
        ...existingData,
        ...parsedData,
        reading: {
          ...existingData.reading,
          ...parsedData.reading,
        },
        listening: {
          ...existingData.listening,
          ...parsedData.listening,
        },
        grammar: {
          ...existingData.grammar,
          ...parsedData.grammar,
        },
      };

      await setDoc(docReference, mergedData, { merge: true });
  
      return NextResponse.json({ message: 'Answers saved successfully' }, { status: 201 });

    } catch (error) {
      console.error('Error saving answers:', error);
  
      const errorMessage = error instanceof Error ? error.message : "Error saving answers";
      return NextResponse.json({ error: errorMessage }, { status: 400 });
    }
};

export const DELETE = async (req: NextRequest) => {
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
    const userEmail = userData.email;

    const docReference = doc(answersCollectionRef, userEmail);
    await setDoc(docReference, {}, { merge: false });

    return NextResponse.json({ message: 'Answers deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting answers:', error);

    const errorMessage = error instanceof Error ? error.message : "Error deleting answers";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}