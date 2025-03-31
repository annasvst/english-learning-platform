import { getCalendarEvents } from "../_lib/calendar/events";
import HeroSection from "./_homePageComponents/HeroSection";
import ProgramSection from "./_homePageComponents/ProgramSection";

export const dynamic = 'force-dynamic';

export default async function SpeakingClubHome() {
  try {
    const events = await getCalendarEvents();

    return (
      <div>
        <HeroSection/>
        <ProgramSection events={events}/>
      </div>
    );
  } catch (error) {
    console.error('Error fetching events:', error);

    return (
      <div>
        <p>Failed to load events. Please try again later.</p>
      </div>
    );
  }
}
