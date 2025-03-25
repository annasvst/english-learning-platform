import { NextResponse } from "next/server";
import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

export const GET = async () => {
  try {
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

    const authClient = await auth.getClient();

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

    const clientEventData = data.items?.map(item => {
      return {summary: item.summary, description: item.description, start: item.start?.dateTime,   }
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
