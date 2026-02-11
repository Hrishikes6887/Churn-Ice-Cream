// Script to rename SVG files to JPG
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

console.log('Renaming SVG files to JPG...\n');

flavors.forEach((flavor) => {
  const svgFile = path.join(assetsPath, `${flavor}.svg`);
  const jpgFile = path.join(assetsPath, `${flavor}.jpg`);
  
  if (fs.existsSync(svgFile)) {
    fs.renameSync(svgFile, jpgFile);
    console.log(`✓ Renamed ${flavor}.svg → ${flavor}.jpg`);
  } else {
    console.log(`⚠ ${flavor}.svg not found, skipping...`);
  }
});

console.log('\n✓ Renaming complete!');
console.log('\nNote: SVG files have been renamed to .jpg for compatibility.');
console.log('For production, replace these with actual photographs of the ice cream flavors.');
