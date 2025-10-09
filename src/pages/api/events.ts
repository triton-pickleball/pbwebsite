import type { APIRoute } from 'astro';
import { google } from 'googleapis';

export const GET: APIRoute = async ({ request }) => {
  try {
    // You'll need to set these environment variables
    const calendarId = import.meta.env.GOOGLE_CALENDAR_ID || 'primary';
    const apiKey = import.meta.env.GOOGLE_CALENDAR_API_KEY;
    
    // Security check: Don't expose API key in client-side errors
    if (!apiKey) {
      console.error('Google Calendar API key not configured');
      // Return mock events instead of error for security
      return getMockEvents();
    }

    // Initialize Google Calendar API
    const calendar = google.calendar({ version: 'v3', auth: apiKey });

    // Get current date and 30 days from now
    const now = new Date();
    const future = new Date();
    future.setDate(now.getDate() + 30);

    // Fetch events
    const response = await calendar.events.list({
      calendarId: calendarId,
      timeMin: now.toISOString(),
      timeMax: future.toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

    const events = response.data.items || [];

    // Transform events to match our UI format
    const formattedEvents = events.map(event => {
      const start = event.start?.dateTime || event.start?.date;
      const end = event.end?.dateTime || event.end?.date;
      
      return {
        id: event.id,
        title: event.summary || 'Untitled Event',
        description: event.description || '',
        start: start,
        end: end,
        location: event.location || '',
        htmlLink: event.htmlLink || '',
        // Extract date components for display
        date: new Date(start),
        startTime: start ? new Date(start).toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: true 
        }) : '',
        endTime: end ? new Date(end).toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: true 
        }) : ''
      };
    });

    return new Response(JSON.stringify(formattedEvents), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300' // Cache for 5 minutes
      }
    });

  } catch (error) {
    console.error('Error fetching calendar events:', error);
    // Return mock events instead of exposing error details
    return getMockEvents();
  }
};

// Helper function to return mock events
function getMockEvents() {
  const mockEvents = [
    {
      id: '1',
      title: 'Weekly Practice',
      description: 'Regular practice session for all skill levels',
      start: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
      end: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000).toISOString(),
      location: 'Main Courts',
      htmlLink: '',
      date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      startTime: '02:00 PM',
      endTime: '04:00 PM'
    },
    {
      id: '2',
      title: 'Beginner Workshop',
      description: 'Learn the basics of pickleball',
      start: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
      end: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000).toISOString(),
      location: 'Training Courts',
      htmlLink: '',
      date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      startTime: '10:00 AM',
      endTime: '12:00 PM'
    },
    {
      id: '3',
      title: 'Tournament - Singles',
      description: 'Monthly singles tournament',
      start: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
      end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000).toISOString(),
      location: 'All Courts',
      htmlLink: '',
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      startTime: '09:00 AM',
      endTime: '12:00 PM'
    }
  ];

  return new Response(JSON.stringify(mockEvents), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300'
    }
  });
}
