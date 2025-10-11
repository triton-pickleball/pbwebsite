# Officers Management Guide

## 🎯 How to Customize Officers

The officers section is now **completely dynamic** and easy to customize! All officer data is stored in `/src/data/officers.ts`.

## 📝 Adding/Removing Officers

### To Add a New Officer:
1. Open `/src/data/officers.ts`
2. Add a new officer object to the `officers` array:

```typescript
{
  name: "Your Name",
  role: "Your Role",
  image: "your-photo.jpg", // Add your photo to /public/ folder
  email: "your.email@tritonpickleball.com", // Optional
  bio: "Your brief bio" // Optional
}
```

### To Remove an Officer:
1. Simply delete their object from the `officers` array in `/src/data/officers.ts`

### To Update Officer Info:
1. Edit the officer object in `/src/data/officers.ts`
2. Change name, role, image, email, or bio as needed

## 🖼️ Adding Officer Photos

1. **Add photos to `/public/` folder** (same level as `favicon.svg`)
2. **Update the `image` field** in the officer object to match the filename
3. **Recommended image size**: 400x400px or square aspect ratio
4. **Supported formats**: JPG, PNG, WebP

## 📱 Responsive Grid System

The grid automatically adapts based on the number of officers:

- **1-2 officers**: 1-2 columns
- **3 officers**: 1-3 columns  
- **4 officers**: 1-4 columns
- **5 officers**: 1-5 columns
- **6 officers**: 1-6 columns
- **7+ officers**: Flexible grid (up to 5 columns on large screens)

## 🎨 Customization Options

### Officer Object Properties:
- **`name`** (required): Officer's full name
- **`role`** (required): Their position/title
- **`image`** (required): Photo filename in /public/ folder
- **`email`** (optional): Contact email
- **`bio`** (optional): Brief description

### Example Officer Entry:
```typescript
{
  name: "Alex Johnson",
  role: "President", 
  image: "alex-johnson.jpg",
  email: "alex@tritonpickleball.com",
  bio: "Leading the club with passion and dedication"
}
```

## 🚀 Benefits

✅ **Easy to update** - Just edit one file  
✅ **Responsive design** - Grid adapts to any number of officers  
✅ **No code changes needed** - Just update the data  
✅ **Professional look** - Consistent styling  
✅ **Accessible** - Proper alt text and semantic HTML  

## 📋 Quick Start

1. **Add officer photos** to `/public/` folder
2. **Edit `/src/data/officers.ts`** with your officer information
3. **Save and deploy** - Changes appear automatically!

The system is designed to be **maintainer-friendly** - no technical knowledge required to update officers!
