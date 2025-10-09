# Google Calendar Integration Setup

## ⚠️ SECURITY WARNING
**NEVER commit your `.env` file or API keys to git!** Your `.gitignore` has been updated to prevent this, but always double-check before pushing code.

## Overview
Your Astro website now has Google Calendar integration that displays upcoming events in a modern, clean UI format on the homepage.

## Setup Instructions

### 1. Get Google Calendar API Access

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Calendar API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Calendar API"
   - Click "Enable"

### 2. Create API Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy your API key
4. (Optional) Restrict the API key to only work with Google Calendar API

### 3. Configure Environment Variables

Create a `.env` file in your project root with:

```env
# Google Calendar API Configuration
GOOGLE_CALENDAR_API_KEY=your_api_key_here
GOOGLE_CALENDAR_ID=primary
```

### 4. Calendar ID Options

- `primary` - Your main Google Calendar
- Specific calendar ID - Found in Google Calendar Settings > Settings for my calendars > [Your Calendar] > Calendar ID

## How It Works

1. **API Endpoint**: `/src/pages/api/events.ts` fetches events from Google Calendar
2. **Frontend**: The homepage fetches events via JavaScript and displays them in modern cards
3. **Fallback**: If the API key isn't configured, it shows mock events for development
4. **Caching**: Events are cached for 5 minutes to improve performance

## Features

- ✅ Clean, modern event card design
- ✅ Date blocks with month/day display
- ✅ Event details with time badges
- ✅ Location information
- ✅ Responsive design
- ✅ Loading states
- ✅ Error handling with fallbacks
- ✅ Automatic caching

## Customization

The event cards can be customized by modifying the `createEventCard` function in `index.astro`. The design matches the modern UI pattern you requested with:

- Dark date blocks on the left
- Event details on the right
- Time badges with clock icons
- Hover effects and smooth transitions

## 🚨 Security Best Practices

### For Development:
- ✅ Your `.env` file is now in `.gitignore` - it will NOT be committed
- ✅ Always check `git status` before committing to ensure no `.env` files are staged
- ✅ Use mock events for development if you don't want to set up API keys

### For Production/Deployment:

#### Option 1: Environment Variables (Recommended)
Most hosting platforms support environment variables:
- **Vercel**: Add environment variables in project settings
- **Netlify**: Add environment variables in site settings
- **Railway/Render**: Add environment variables in dashboard

#### Option 2: Server-Side Only
If you're deploying to a platform that supports server-side rendering:
- Move the API call to server-side only
- Use server environment variables
- Never expose API keys to the client

### What NOT to do:
- ❌ Never commit `.env` files
- ❌ Never hardcode API keys in source code
- ❌ Never expose API keys in client-side JavaScript

## Troubleshooting

- **No events showing**: Check your API key and calendar ID
- **API errors**: The system falls back to mock events for development
- **Build issues**: Make sure your environment variables are set correctly
- **Security concerns**: Double-check that `.env` is in `.gitignore`

## Next Steps

1. Set up your Google Calendar API key (safely in `.env`)
2. Test the integration locally
3. Deploy with environment variables (not hardcoded keys)
4. Customize the event display as needed
5. Consider adding more event details (attendees, recurring events, etc.)
