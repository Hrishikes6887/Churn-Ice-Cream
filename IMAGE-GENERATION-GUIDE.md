# Generating Photorealistic Ice Cream Images

## Option 1: AI Image Generation with DALL-E (Recommended)

### Setup:

1. Get an OpenAI API key: https://platform.openai.com/api-keys
2. Install the OpenAI package:

```bash
npm install openai
```

3. Set your API key:

```bash
# Windows (PowerShell)
$env:OPENAI_API_KEY="your-api-key-here"

# Mac/Linux
export OPENAI_API_KEY="your-api-key-here"
```

4. Generate images:

```bash
node generate-ai-images.js
```

**Cost:** ~$0.04 per image (DALL-E 3 HD quality)
**Total for 55 images:** ~$2.20
**Time:** ~2-3 minutes per image (to avoid rate limits)

---

## Option 2: Use Midjourney (Manual but Best Quality)

1. Sign up at: https://midjourney.com
2. Use Discord bot with this prompt template:

```
/imagine prompt: Ultra-realistic professional food photography of artisan [FLAVOR NAME] gelato ice cream. Close-up shot of creamy gelato scoops in a small ceramic bowl. Soft studio lighting, natural shadows, visible creamy texture with realistic melting edges. Warm beige café background. 45-degree angle, shallow depth of field, DSLR camera quality, premium Italian gelateria aesthetic --ar 1:1 --style raw --v 6
```

**Cost:** $10/month for 200 images
**Quality:** Best photorealism
**Time:** Manual but fast

---

## Option 3: Free Stock Photos from Unsplash

For a quick solution, download similar ice cream photos:

- https://unsplash.com/s/photos/gelato
- https://unsplash.com/s/photos/artisan-ice-cream

---

## Option 4: Hire a Food Photographer

For the ultimate professional look:

- Cost: $500-2000 for a full product shoot
- Benefit: 100% original, on-brand, perfect for commercial use

---

## Current Placeholders

The current images are artistic gradients. They'll work temporarily but should be replaced with real photography for production.
