// Generate photorealistic ice cream images using AI (DALL-E 3)
// You'll need to set your OpenAI API key: export OPENAI_API_KEY="your-key-here"

import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const assetsPath = path.join(__dirname, 'src', 'assets');

const flavors = [
  'Apricot', 'Banana', 'Berrilicious', 'Black Grape', 'Blackberry', 'BlackGarlic',
  'Bluepea', 'Brazilnut', 'Brownie Overload', 'Cherry', 'Cherry Cheese',
  'Choco Butter Scotch', 'Choco Coco', 'Choco Chilli', 'Choco Mint', 'Choco Orange',
  'Choco Raspberry', 'Cookie Caramel', 'Fresh Fig', 'Fresh Mint', 'Gianduja(Nutella)',
  'Gianduja(Nutella) Banana', 'Guava', 'Hazelnut Coffee', 'Hazelnut Orange',
  'Herbed Cheese', 'Hojicha', 'Kala Jamun', 'Kardantu', 'Kulfi',
  'Lakshman Phal Soursop Sorbet', 'Lychee', 'Macadamia', 'Masala Chai',
  'Mascarpone Cheese', 'Matcha', 'Mocha', 'Oreostic', 'Paan', 'Peach',
  'Peanut', 'Peanut Banana', 'Pecan', 'Persimmon', 'Physalis',
  'Pomegranate Sorbet', 'Poppy (VEGAN)', 'Pumpkin Pie', 'Ramphal', 'Raspberry',
  'Single Origin Chocolates', 'Tender Coconut', 'Vegan Ice cream (SF)', 'Walnut',
  'White Chocolate'
];

// Download image from URL
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

// Generate image for each flavor
async function generateFlavorImage(flavorName) {
  const prompt = `Ultra-realistic professional food photography of artisan ${flavorName} gelato ice cream. Close-up shot of creamy gelato scoops in a small ceramic bowl or glass dessert cup. Soft studio lighting, natural shadows, visible creamy texture with realistic melting edges. Warm beige café background. Garnished with appropriate ingredients (${flavorName} related toppings). 45-degree angle, shallow depth of field, DSLR camera quality, premium Italian gelateria aesthetic, luxurious food styling. Square format, photorealistic, mouth-watering presentation.`;

  try {
    console.log(`Generating: ${flavorName}...`);
    
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      quality: "hd",
      style: "natural"
    });

    const imageUrl = response.data[0].url;
    const fileName = `${flavorName}.jpg`;
    const filePath = path.join(assetsPath, fileName);

    await downloadImage(imageUrl, filePath);
    console.log(`✓ Generated: ${fileName}`);
    
    // Add delay to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 2000));
    
  } catch (error) {
    console.error(`✗ Failed to generate ${flavorName}:`, error.message);
  }
}

// Main execution
(async () => {
  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ Error: OPENAI_API_KEY environment variable is not set.');
    console.log('\nTo use this script:');
    console.log('1. Get an API key from: https://platform.openai.com/api-keys');
    console.log('2. Set it in your terminal: export OPENAI_API_KEY="your-key-here"');
    console.log('3. Run this script again');
    process.exit(1);
  }

  console.log('🍦 Generating photorealistic ice cream images with DALL-E 3...\n');
  console.log('⚠️  Note: This will use OpenAI API credits (~$0.04 per image)\n');
  console.log(`Total images: ${flavors.length}`);
  console.log(`Estimated cost: $${(flavors.length * 0.04).toFixed(2)}\n`);

  for (const flavor of flavors) {
    await generateFlavorImage(flavor);
  }

  console.log('\n✨ All images generated successfully!');
})();
