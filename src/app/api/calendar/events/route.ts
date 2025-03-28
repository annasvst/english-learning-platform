import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library";
import { z } from "zod";

const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];
const SCOPES_WRITE = ["https://www.googleapis.com/auth/calendar"];

export const GET = async (req: NextRequest) => {
  try {
    const fullUrl = req.nextUrl.toString();
    console.log("Full URL of the current location:", fullUrl);
    
    const client_email = process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL;
    const private_key = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    if (!client_email || !private_key || !calendarId) {
      throw new Error(
        "SERVICE_ACCOUNT_CLIENT_EMAIL, SERVICE_ACCOUNT_PRIVATE_KEY, or GOOGLE_CALENDAR_ID is not defined in environment variables",
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: client_email,
        private_key: private_key.replace(
          /\\n/g,
          "\n",
        ),
      },
      scopes: SCOPES,
    });

    const authClient = (await auth.getClient()) as OAuth2Client;

    const calendar = google.calendar({
      version: 'v3',
      auth: authClient,
    });

    const { data } = await calendar.events.list({
      calendarId: calendarId,
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });
    console.log(data);

    const clientEventData = data.items?.map(item => {
      return {id: item.id, summary: item.summary, description: item.description, start: item.start?.dateTime,   }
    })

    return new Response(JSON.stringify(clientEventData), { status: 200 });
  } catch (error) {
    console.error("Error fetching calendar events:", error);
    return NextResponse.json(
      { error: "Failed to fetch calendar events" },
      { status: 500 },
    );
  }
};

const eventRequestSchema = z.object({
  eventId: z.string(),
});

export const POST = async (req: NextRequest) => {
  try {
    const client_email = process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL;
    const private_key = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    if (!client_email || !private_key || !calendarId) {
      throw new Error(
        "SERVICE_ACCOUNT_CLIENT_EMAIL, SERVICE_ACCOUNT_PRIVATE_KEY, or GOOGLE_CALENDAR_ID is not defined in environment variables",
      );
    }

    const requestData = await req.json();
    const parsedData = eventRequestSchema.parse(requestData);
    const { eventId } = parsedData;

    console.log('Updating calendar event for event: ', eventId);

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: client_email,
        private_key: private_key.replace(
          /\\n/g,
          "\n",
        ),
      },
      scopes: SCOPES_WRITE,
    });

    const authClient = (await auth.getClient()) as OAuth2Client;

    const calendar = google.calendar({
      version: 'v3',
      auth: authClient,
    });

    const { data } = await calendar.events.patch({
      calendarId: calendarId,
      eventId: eventId,
      requestBody: {
        attendees: [{email: 'annaatalay@hotmail.com'}]
      }
    });
    console.log("Responded with:", data);

    const updatedEventDate =  {summary: data.summary, description: data.description, start: data.start?.dateTime,   }

    return new Response(JSON.stringify(updatedEventDate), { status: 200 });
  } catch (error) {
    console.error("Error fetching calendar events:", error);
    return NextResponse.json(
      { error: "Failed to fetch calendar events" },
      { status: 500 },
    );
  }
};

