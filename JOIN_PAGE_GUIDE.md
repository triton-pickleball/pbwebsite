# Join Page Management Guide

## 🎯 How to Update Join Page Content

The join page is now **completely dynamic** and easy to customize! All join page data is stored in `/src/data/join.ts`.

## 📝 Updating Form Links

### To Update the Tryout Form Link:
1. Open `/src/data/join.ts`
2. Update the `tryoutForm.url` field:

```typescript
tryoutForm: {
  url: "https://forms.google.com/your-actual-tryout-form", // Replace with real URL
  text: "Tryout Form",
  description: "Complete forms required to tryout. Tryouts are held to find new members."
}
```

### To Update the Interest Form Link:
1. Open `/src/data/join.ts`
2. Update the `interestForm.url` field:

```typescript
interestForm: {
  url: "https://forms.google.com/your-actual-interest-form", // Replace with real URL
  text: "Interest Form", 
  description: "Fill out our interest form to let us know you're interested in joining."
}
```

### To Update Other Links:
- **Discord Link**: Update `discordLink.url`
- **Schedule Link**: Update `scheduleLink.url` (use `/events` for internal links)
- **Button Text**: Update the `text` fields for any button

## 🔗 Supported Link Types

### External Links (Google Forms, etc.):
```typescript
url: "https://forms.google.com/your-form"
```

### Internal Links (to other pages on your site):
```typescript
url: "/events"  // Will automatically become full URL
url: "/about"  // Will automatically become full URL
```

### External Links (Discord, Instagram, etc.):
```typescript
url: "https://discord.gg/5Jsz8rKStg"
url: "https://www.instagram.com/triton.pickleball/"
```

## 📋 Complete Example

Here's how your `/src/data/join.ts` might look with real form links:

```typescript
export const joinPageData: JoinPageData = {
  tryoutForm: {
    url: "https://forms.google.com/d/1ABC123DEF456GHI789JKL/formview", // Real Google Form
    text: "Tryout Form",
    description: "Complete forms required to tryout. Tryouts are held to find new members."
  },
  interestForm: {
    url: "https://forms.google.com/d/1XYZ789ABC123DEF456GHI/formview", // Real Google Form
    text: "Interest Form", 
    description: "Fill out our interest form to let us know you're interested in joining."
  },
  discordLink: {
    url: "https://discord.gg/5Jsz8rKStg",
    text: "Join Discord"
  },
  scheduleLink: {
    url: "/events", // Internal link to events page
    text: "View Schedule"
  }
};
```

## 🎨 Customization Options

### Button Text:
- Change `text` field to update button labels
- Examples: "Apply Now", "Sign Up", "Join Tryouts", etc.

### Descriptions:
- Update `description` fields to change explanatory text
- These appear in the step-by-step process

### Link Behavior:
- External links open in new tab (`target="_blank"`)
- Internal links stay on your site
- Automatic security attributes (`rel="noopener noreferrer"`)

## 🚀 Benefits

✅ **Easy to update** - Just edit one file  
✅ **No code changes needed** - Just update URLs and text  
✅ **Automatic link handling** - Internal vs external links  
✅ **Security features** - Proper external link attributes  
✅ **Professional styling** - Consistent button design  
✅ **Accessibility** - Proper link descriptions  

## 📋 Quick Start

1. **Get your form URLs** from Google Forms, Typeform, etc.
2. **Edit `/src/data/join.ts`** with your actual form links
3. **Update button text** if desired
4. **Save and deploy** - Changes appear automatically!

## 🔧 Form Platform Examples

### Google Forms:
```
https://forms.google.com/d/1ABC123DEF456GHI789JKL/formview
```

### Typeform:
```
https://yourname.typeform.com/to/ABC123
```

### Microsoft Forms:
```
https://forms.office.com/r/ABC123DEF456
```

### Custom Form:
```
https://yourwebsite.com/contact-form
```

The system is designed to be **maintainer-friendly** - no technical knowledge required to update form links!
