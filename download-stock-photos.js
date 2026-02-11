// Download free stock gelato/ice cream photos from Unsplash as placeholders
// No API key needed for download
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsPath = path.join(__dirname, 'src', 'assets');

// Curated ice cream photo IDs from Unsplash
// These are high-quality, free-to-use images
const unsplashQueries = [
  'gelato-scoop', 'artisan-ice-cream', 'gelato-bowl', 'ice-cream-dessert',
  'gelato-cup', 'artisan-gelato', 'gelato-close-up', 'premium-ice-cream'
];

// Download image from URL
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        https.get(response.headers.location, (redirectResponse) => {
          const fileStream = fs.createWriteStream(filepath);
          redirectResponse.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            resolve();
          });
        }).on('error', reject);
      } else if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

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

console.log('🍦 Downloading stock gelato photos from Unsplash...\n');
console.log('⚠️  Note: Using random gelato photos as placeholders');
console.log('For production, replace with flavor-specific photos\n');

(async () => {
  for (let i = 0; i < flavors.length; i++) {
    const flavor = flavors[i];
    const fileName = `${flavor}.jpg`;
    const filePath = path.join(assetsPath, fileName);
    
    // Unsplash Source API - random ice cream photo (800x800)
    const query = unsplashQueries[i % unsplashQueries.length];
    const url = `https://source.unsplash.com/800x800/?${query},gelato&sig=${i}`;
    
    try {
      console.log(`Downloading: ${fileName}...`);
      await downloadImage(url, filePath);
      console.log(`✓ Downloaded: ${fileName}`);
      
      // Small delay to be nice to Unsplash servers
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`✗ Failed ${fileName}:`, error.message);
    }
  }
  
  console.log('\n✨ Downloaded stock photos as placeholders!');
  console.log('📸 These are generic gelato photos, not flavor-specific.');
  console.log('💡 For best results, use AI generation or hire a photographer.');
})();
