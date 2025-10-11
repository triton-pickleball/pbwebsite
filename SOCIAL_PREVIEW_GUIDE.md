# Social Media Preview Guide

## 🎯 Fix iMessage and Social Media Previews

Your website now has proper **Open Graph** and **Twitter Card** meta tags for better social media previews!

## 📱 What Was Fixed

### **Before:**
- ❌ Only showed "UC San Diego" 
- ❌ No image preview
- ❌ Poor social sharing experience

### **After:**
- ✅ **Full title and description**
- ✅ **Hero image preview** 
- ✅ **Professional social cards**
- ✅ **Works on iMessage, WhatsApp, Facebook, Twitter, etc.**

## 🖼️ Social Media Image

### **Current Setup:**
- Uses your existing `hero.jpg` image
- Optimized for 1200x630px (social media standard)
- Works on all platforms

### **To Create a Custom Social Image:**

1. **Open `social-preview-generator.html`** in your browser
2. **Take a screenshot** of the preview (1200x630px)
3. **Save as `social-preview.jpg`** in your `/public/` folder
4. **Update BaseLayout.astro** to use the new image:

```astro
<meta property="og:image" content={`https://triton-pickleball.github.io/pbwebsite/social-preview.jpg`} />
<meta name="twitter:image" content={`https://triton-pickleball.github.io/pbwebsite/social-preview.jpg`} />
```

## 🎨 Custom Social Image Ideas

### **Design Elements to Include:**
- ✅ **Club logo** or "T" symbol
- ✅ **"Triton Pickleball"** title
- ✅ **"UC San Diego"** subtitle
- ✅ **"Join our community"** tagline
- ✅ **Pickleball imagery** (court, paddles, etc.)
- ✅ **Club colors** (blue, purple gradients)

### **Recommended Tools:**
- **Canva** - Easy drag-and-drop design
- **Figma** - Professional design tool
- **Photoshop** - Advanced editing
- **Online generators** - Quick social media templates

## 📏 Image Specifications

### **Required Size:**
- **Width:** 1200px
- **Height:** 630px
- **Ratio:** 1.91:1 (Facebook/Twitter standard)
- **Format:** JPG or PNG
- **File size:** Under 5MB

### **Design Tips:**
- **Keep text large** - Mobile users need to read it
- **Use high contrast** - Text should be clearly visible
- **Include your logo** - Brand recognition
- **Use club colors** - Consistent branding

## 🔧 Technical Details

### **Meta Tags Added:**
```html
<!-- Open Graph (Facebook, iMessage, WhatsApp) -->
<meta property="og:image" content="your-image-url" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Description for accessibility" />

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="your-image-url" />
<meta name="twitter:image:alt" content="Description for accessibility" />
```

### **Additional Features:**
- ✅ **Theme color** for mobile browsers
- ✅ **Apple touch icons** for iOS
- ✅ **Proper alt text** for accessibility
- ✅ **Site name** branding

## 🧪 Testing Your Previews

### **Test on Different Platforms:**
1. **iMessage** - Send link to yourself
2. **WhatsApp** - Share in a group chat
3. **Facebook** - Post on your timeline
4. **Twitter** - Tweet the link
5. **LinkedIn** - Share as a post

### **Online Testing Tools:**
- **Facebook Sharing Debugger:** https://developers.facebook.com/tools/debug/
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/

## 🚀 Quick Fix Steps

1. **Create social image** (1200x630px)
2. **Save as `social-preview.jpg`** in `/public/` folder
3. **Update image URLs** in BaseLayout.astro
4. **Deploy changes**
5. **Test sharing** on different platforms

## 📱 Platform-Specific Notes

### **iMessage:**
- Uses Open Graph tags
- Shows title, description, and image
- Updates may take a few minutes

### **WhatsApp:**
- Similar to iMessage
- Caches previews (may need to clear cache)

### **Facebook:**
- Requires Open Graph tags
- May need to use Facebook's debugger to refresh

### **Twitter:**
- Uses Twitter Card tags
- Shows large image preview
- Updates immediately

Your social media previews should now work perfectly across all platforms! 🎉
