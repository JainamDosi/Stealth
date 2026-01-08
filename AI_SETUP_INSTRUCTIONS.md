# AI Wooden Toy Generator - Setup Instructions

## 🎨 Feature Overview
This feature uses Google's Gemini AI to transform any uploaded photo into a wooden toy style matching your reference image (im1.png).

## 🔑 Setup Your Gemini API Key

1. **Get your API key:**
   - Visit: https://aistudio.google.com/app/apikey
   - Sign in with your Google account
   - Create a new API key

2. **Add it to your project:**
   - Create a file called `.env.local` in the root directory (d:\Placed\Project\wooden)
   - Add this line to the file:
     ```
     GEMINI_API_KEY=your_actual_api_key_here
     ```
   - Replace `your_actual_api_key_here` with your API key

3. **Restart the dev server:**
   - Stop your current `npm run dev` process (Ctrl+C)
   - Run `npm run dev` again

## 🚀 How It Works

1. **User uploads a photo** → The image is sent to the AI Section component
2. **API call is made** → The photo + reference image (im1.png) are sent to Gemini
3. **AI generates result** → Gemini creates a wooden toy version matching the style
4. **Display & download** → User sees the result and can download it

## 📝 The Prompt

The AI uses this prompt to transform images:
> "Convert the given human image to the exact same style as the reference wooden toy image provided. Match the same details, the same structure, and the same hand-painted finish. Create a wooden toy version that captures the person's likeness while maintaining the artisanal, handcrafted wooden aesthetic with painted details."

## 🛠️ Technical Details

- **Model:** gemini-2.0-flash (optimized for speed and multimodal generation)
- **Input:** User photo + im1.png reference image
- **Output:** Generated wooden toy style image
- **Response Time:** 10-30 seconds

## 📦 Files Modified

- `components/AISection.tsx` - Main UI component with upload & display
- `app/api/generate-wooden-toy/route.ts` - API endpoint that calls Gemini
- Dependencies added: `@google/genai`, `mime`, `@types/node`

## ⚠️ Important Notes

- Make sure you have im1.png in your public folder (reference style image)
- The API key is sensitive - never commit .env.local to git
- Generation takes 10-30 seconds depending on image size
- Internet connection required for API calls
