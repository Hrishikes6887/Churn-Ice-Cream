// Script to generate placeholder images for ice cream flavors
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Create SVG placeholder for each flavor
const assetsPath = path.join(__dirname, 'src', 'assets');

// Color palette for different flavor types
const getColorGradient = (flavorName) => {
  const lower = flavorName.toLowerCase();
  
  // Chocolate-based
  if (lower.includes('choco') || lower.includes('mocha') || lower.includes('brownie')) {
    return ['#5C4033', '#8B6F47'];
  }
  // Berry/red fruits
  if (lower.includes('berry') || lower.includes('cherry') || lower.includes('raspberry')) {
    return ['#C41E3A', '#E57373'];
  }
  // Tropical/yellow fruits
  if (lower.includes('mango') || lower.includes('banana') || lower.includes('pineapple') || lower.includes('apricot')) {
    return ['#F7931E', '#FFC947'];
  }
  // Green/mint
  if (lower.includes('mint') || lower.includes('matcha') || lower.includes('bluepea') || lower.includes('paan')) {
    return ['#228B22', '#90EE90'];
  }
  // Nuts
  if (lower.includes('nut') || lower.includes('almond') || lower.includes('cashew') || lower.includes('pecan')) {
    return ['#8B7355', '#C4A582'];
  }
  // Purple/grape
  if (lower.includes('grape') || lower.includes('black')) {
    return ['#5D3FD3', '#9370DB'];
  }
  // Orange/citrus
  if (lower.includes('orange') || lower.includes('citrus')) {
    return ['#FF8C00', '#FFB84D'];
  }
  // Coffee/tea
  if (lower.includes('coffee') || lower.includes('chai') || lower.includes('hojicha')) {
    return ['#6F4E37', '#A0826D'];
  }
  // Cream/vanilla/cheese
  if (lower.includes('cheese') || lower.includes('cream') || lower.includes('kulfi') || lower.includes('white')) {
    return ['#F5E6D3', '#FFF8DC'];
  }
  
  // Default elegant gradient
  return ['#D4AF94', '#E8D5C4'];
};

const createSVGPlaceholder = (flavorName) => {
  const [color1, color2] = getColorGradient(flavorName);
  
  return `<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad${flavorName.replace(/[^a-zA-Z0-9]/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
      <feColorMatrix type="saturate" values="0"/>
      <feBlend mode="multiply" in="SourceGraphic" />
    </filter>
  </defs>
  <rect width="800" height="800" fill="url(#grad${flavorName.replace(/[^a-zA-Z0-9]/g, '')})" />
  <rect width="800" height="800" fill="url(#grad${flavorName.replace(/[^a-zA-Z0-9]/g, '')})" filter="url(#noise)" opacity="0.15" />
  <circle cx="400" cy="350" r="250" fill="white" opacity="0.2" />
  <circle cx="400" cy="400" r="200" fill="white" opacity="0.15" />
</svg>`;
};

console.log('Generating placeholder images for ice cream flavors...\n');

flavors.forEach((flavor) => {
  const fileName = `${flavor}.jpg`;
  const filePath = path.join(assetsPath, fileName);
  
  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`✓ ${fileName} already exists, skipping...`);
  } else {
    // Create SVG content
    const svgContent = createSVGPlaceholder(flavor);
    const svgPath = path.join(assetsPath, `${flavor}.svg`);
    
    fs.writeFileSync(svgPath, svgContent);
    console.log(`✓ Generated ${flavor}.svg (placeholder)`);
  }
});

console.log('\n✓ Placeholder generation complete!');
console.log('\nNote: SVG files have been created as placeholders.');
console.log('For production, replace these with actual photographs of the ice cream flavors.');
