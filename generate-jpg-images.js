// Generate actual JPG placeholder images for ice cream flavors
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsPath = path.join(__dirname, 'src', 'assets');

// Ice cream flavors with their color schemes
const flavors = [
  { name: 'Apricot', color: '#FFA07A' },
  { name: 'Banana', color: '#FFE135' },
  { name: 'Berrilicious', color: '#E91E63' },
  { name: 'Black Grape', color: '#6A1B9A' },
  { name: 'Blackberry', color: '#4527A0' },
  { name: 'BlackGarlic', color: '#424242' },
  { name: 'Bluepea', color: '#2196F3' },
  { name: 'Brazilnut', color: '#A1887F' },
  { name: 'Brownie Overload', color: '#5D4037' },
  { name: 'Cherry', color: '#D32F2F' },
  { name: 'Cherry Cheese', color: '#EC407A' },
  { name: 'Choco Butter Scotch', color: '#C19A6B' },
  { name: 'Choco Coco', color: '#795548' },
  { name: 'Choco Chilli', color: '#D84315' },
  { name: 'Choco Mint', color: '#388E3C' },
  { name: 'Choco Orange', color: '#F57C00' },
  { name: 'Choco Raspberry', color: '#AD1457' },
  { name: 'Cookie Caramel', color: '#BCAAA4' },
  { name: 'Fresh Fig', color: '#7B1FA2' },
  { name: 'Fresh Mint', color: '#26C6DA' },
  { name: 'Gianduja(Nutella)', color: '#6D4C41' },
  { name: 'Gianduja(Nutella) Banana', color: '#A1887F' },
  { name: 'Guava', color: '#F06292' },
  { name: 'Hazelnut Coffee', color: '#5D4037' },
  { name: 'Hazelnut Orange', color: '#FF7043' },
  { name: 'Herbed Cheese', color: '#AED581' },
  { name: 'Hojicha', color: '#795548' },
  { name: 'Kala Jamun', color: '#6A1B9A' },
  { name: 'Kardantu', color: '#FFD54F' },
  { name: 'Kulfi', color: '#FFF9C4' },
  { name: 'Lakshman Phal Soursop Sorbet', color: '#66BB6A' },
  { name: 'Lychee', color: '#F48FB1' },
  { name: 'Macadamia', color: '#BCAAA4' },
  { name: 'Masala Chai', color: '#A1887F' },
  { name: 'Mascarpone Cheese', color: '#FFF9E1' },
  { name: 'Matcha', color: '#4CAF50' },
  { name: 'Mocha', color: '#6D4C41' },
  { name: 'Oreostic', color: '#424242' },
  { name: 'Paan', color: '#81C784' },
  { name: 'Peach', color: '#FF8A65' },
  { name: 'Peanut', color: '#BCAAA4' },
  { name: 'Peanut Banana', color: '#FFD54F' },
  { name: 'Pecan', color: '#A1887F' },
  { name: 'Persimmon', color: '#FF5722' },
  { name: 'Physalis', color: '#FF9800' },
  { name: 'Pomegranate Sorbet', color: '#D32F2F' },
  { name: 'Poppy (VEGAN)', color: '#90A4AE' },
  { name: 'Pumpkin Pie', color: '#FF7043' },
  { name: 'Ramphal', color: '#9CCC65' },
  { name: 'Raspberry', color: '#D81B60' },
  { name: 'Single Origin Chocolates', color: '#4E342E' },
  { name: 'Tender Coconut', color: '#EEEEEE' },
  { name: 'Vegan Ice cream (SF)', color: '#66BB6A' },
  { name: 'Walnut', color: '#8D6E63' },
  { name: 'White Chocolate', color: '#FFF9E1' },
];

// Function to convert hex to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Create SVG gradient for each flavor
async function createFlavorImage(flavorName, color) {
  const rgb = hexToRgb(color);
  const width = 800;
  const height = 800;
  
  // Create an SVG with gradient
  const svg = `
    <svg width="${width}" height="${height}">
      <defs>
        <radialGradient id="grad" cx="50%" cy="40%" r="50%">
          <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:0.9" />
          <stop offset="30%" style="stop-color:rgb(${rgb.r},${rgb.g},${rgb.b});stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:rgb(${Math.max(0, rgb.r-40)},${Math.max(0, rgb.g-40)},${Math.max(0, rgb.b-40)});stop-opacity:1" />
        </radialGradient>
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" />
          <feColorMatrix type="saturate" values="0.3"/>
        </filter>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)"/>
      <circle cx="400" cy="350" r="250" fill="url(#grad)" opacity="0.6"/>
      <rect width="${width}" height="${height}" filter="url(#noise)" opacity="0.1"/>
    </svg>
  `;

  const fileName = `${flavorName}.jpg`;
  const filePath = path.join(assetsPath, fileName);

  try {
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 90 })
      .toFile(filePath);
    
    console.log(`✓ Generated: ${fileName}`);
  } catch (error) {
    console.error(`✗ Failed to generate ${fileName}:`, error.message);
  }
}

// Generate all images
console.log('Generating actual JPG images for ice cream flavors...\n');

(async () => {
  for (const flavor of flavors) {
    await createFlavorImage(flavor.name, flavor.color);
  }
  console.log('\n✓ All JPG images generated successfully!');
  console.log('Images are now proper JPG format and should display correctly.');
})();
