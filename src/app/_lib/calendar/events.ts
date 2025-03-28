// app/lib/getCalendarEvents.ts
import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library";

const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

export async function getCalendarEvents() {
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
      client_email,
      private_key: private_key.replace(/\\n/g, "\n"),
    },
    scopes: SCOPES,
  });

  const authClient = (await auth.getClient()) as OAuth2Client;

  const calendar = google.calendar({
    version: "v3",
    auth: authClient,
  });

  const { data } = await calendar.events.list({
    calendarId,
    timeMin: new Date().toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: "startTime",
  });

  const clientEventData = data.items
    ?.filter((item) => item.id && item.summary && item.start?.dateTime)
    .map((item) => ({
      id: item.id,
      summary: item.summary,
      description: item.description,
      start: item.start?.dateTime,
    }) as CalendarEvent);

  return clientEventData ?? [];
}

export interface CalendarEvent {
  id: string;
  summary: string;
  start: string;
  description?: string;
}
