export default async function SpeakingClubHome() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/calendar/events`);

    if (!response.ok) {
      throw new Error(`Failed to fetch events. Status code: ${response.status}`);
    }

    const events = await response.json();
    
    console.log('Fetched events:', events);

    return (
      <div>
        <h1>Speaking club home page</h1>
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
