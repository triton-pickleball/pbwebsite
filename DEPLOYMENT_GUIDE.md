# Deployment Guide - Secure Environment Variables

## 🚨 CRITICAL: Never commit API keys!

Your `.env` file is now safely excluded from git, but you need to set up environment variables on your hosting platform.

## Platform-Specific Setup

### Vercel (Recommended for Astro)
1. Push your code to GitHub
2. Connect your repo to Vercel
3. Go to Project Settings > Environment Variables
4. Add these variables:
   - `GOOGLE_CALENDAR_API_KEY` = your_api_key_here
   - `GOOGLE_CALENDAR_ID` = primary (or your specific calendar ID)
5. Redeploy your site

### Netlify
1. Push your code to GitHub
2. Connect your repo to Netlify
3. Go to Site Settings > Environment Variables
4. Add the same variables as above
5. Redeploy

### Railway
1. Connect your GitHub repo
2. Go to Variables tab
3. Add environment variables
4. Deploy

### Render
1. Connect your GitHub repo
2. Go to Environment tab
3. Add environment variables
4. Deploy

## Security Checklist Before Deployment

- ✅ `.env` is in `.gitignore`
- ✅ No API keys in source code
- ✅ Environment variables set on hosting platform
- ✅ Test with mock events first
- ✅ Check `git status` before pushing

## Testing Your Deployment

1. **Local Test**: Run `npm run dev` and verify events load
2. **Production Test**: Deploy and check if real events appear
3. **Fallback Test**: If API fails, mock events should show

## Troubleshooting

### "No events showing"
- Check environment variables are set correctly
- Verify API key has Calendar API access
- Check browser console for errors

### "API errors"
- The system automatically falls back to mock events
- Check your API key permissions
- Verify calendar ID is correct

### "Environment variables not working"
- Make sure variables are set in hosting platform
- Redeploy after adding environment variables
- Check variable names match exactly

## Best Practices

1. **Always use environment variables** - never hardcode keys
2. **Test locally first** - make sure everything works
3. **Use mock events for demos** - no API keys needed
4. **Monitor your API usage** - Google has rate limits
5. **Rotate keys regularly** - security best practice

## Support

If you need help with deployment:
1. Check the platform's documentation
2. Verify environment variables are set
3. Test with mock events first
4. Check browser console for errors
