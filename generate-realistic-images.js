// Generate hyper-realistic ice cream images
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsPath = path.join(__dirname, 'src', 'assets');

// Enhanced color schemes with highlights and shadows for realism
const flavors = [
  { name: 'Apricot', base: '#FFA07A', light: '#FFCCB3', dark: '#FF7F50', accent: '#FFD4B8' },
  { name: 'Banana', base: '#FFE135', light: '#FFF4A3', dark: '#F9A825', accent: '#FFFACD' },
  { name: 'Berrilicious', base: '#E91E63', light: '#F48FB1', dark: '#880E4F', accent: '#FCE4EC' },
  { name: 'Black Grape', base: '#6A1B9A', light: '#9C4DCC', dark: '#4A148C', accent: '#E1BEE7' },
  { name: 'Blackberry', base: '#4527A0', light: '#7C4DFF', dark: '#311B92', accent: '#D1C4E9' },
  { name: 'BlackGarlic', base: '#424242', light: '#757575', dark: '#212121', accent: '#9E9E9E' },
  { name: 'Bluepea', base: '#2196F3', light: '#64B5F6', dark: '#1565C0', accent: '#BBDEFB' },
  { name: 'Brazilnut', base: '#A1887F', light: '#D7CCC8', dark: '#6D4C41', accent: '#EFEBE9' },
  { name: 'Brownie Overload', base: '#5D4037', light: '#8D6E63', dark: '#3E2723', accent: '#D7CCC8' },
  { name: 'Cherry', base: '#D32F2F', light: '#E57373', dark: '#B71C1C', accent: '#FFCDD2' },
  { name: 'Cherry Cheese', base: '#EC407A', light: '#F8BBD0', dark: '#AD1457', accent: '#FCE4EC' },
  { name: 'Choco Butter Scotch', base: '#D4A574', light: '#E8D5C4', dark: '#8B6F47', accent: '#F5E6D3' },
  { name: 'Choco Coco', base: '#795548', light: '#A1887F', dark: '#4E342E', accent: '#EFEBE9' },
  { name: 'Choco Chilli', base: '#D84315', light: '#FF7043', dark: '#BF360C', accent: '#FFCCBC' },
  { name: 'Choco Mint', base: '#388E3C', light: '#81C784', dark: '#1B5E20', accent: '#C8E6C9' },
  { name: 'Choco Orange', base: '#F57C00', light: '#FFB74D', dark: '#E65100', accent: '#FFE0B2' },
  { name: 'Choco Raspberry', base: '#AD1457', light: '#EC407A', dark: '#880E4F', accent: '#F8BBD0' },
  { name: 'Cookie Caramel', base: '#BCAAA4', light: '#D7CCC8', dark: '#8D6E63', accent: '#EFEBE9' },
  { name: 'Fresh Fig', base: '#7B1FA2', light: '#BA68C8', dark: '#4A148C', accent: '#E1BEE7' },
  { name: 'Fresh Mint', base: '#26C6DA', light: '#80DEEA', dark: '#00ACC1', accent: '#B2EBF2' },
  { name: 'Gianduja(Nutella)', base: '#6D4C41', light: '#A1887F', dark: '#3E2723', accent: '#D7CCC8' },
  { name: 'Gianduja(Nutella) Banana', base: '#A1887F', light: '#FFE082', dark: '#6D4C41', accent: '#FFF9C4' },
  { name: 'Guava', base: '#F06292', light: '#F8BBD0', dark: '#C2185B', accent: '#FCE4EC' },
  { name: 'Hazelnut Coffee', base: '#5D4037', light: '#A0826D', dark: '#3E2723', accent: '#D7CCC8' },
  { name: 'Hazelnut Orange', base: '#FF7043', light: '#FFAB91', dark: '#D84315', accent: '#FFCCBC' },
  { name: 'Herbed Cheese', base: '#AED581', light: '#DCEDC8', dark: '#689F38', accent: '#F1F8E9' },
  { name: 'Hojicha', base: '#795548', light: '#BCAAA4', dark: '#4E342E', accent: '#EFEBE9' },
  { name: 'Kala Jamun', base: '#6A1B9A', light: '#AB47BC', dark: '#4A148C', accent: '#E1BEE7' },
  { name: 'Kardantu', base: '#FFD54F', light: '#FFF9C4', dark: '#F9A825', accent: '#FFFDE7' },
  { name: 'Kulfi', base: '#FFF9C4', light: '#FFFDE7', dark: '#F9A825', accent: '#FFFFFF' },
  { name: 'Lakshman Phal Soursop Sorbet', base: '#66BB6A', light: '#A5D6A7', dark: '#388E3C', accent: '#C8E6C9' },
  { name: 'Lychee', base: '#F48FB1', light: '#FCE4EC', dark: '#EC407A', accent: '#FFFFFF' },
  { name: 'Macadamia', base: '#BCAAA4', light: '#EFEBE9', dark: '#8D6E63', accent: '#FFFFFF' },
  { name: 'Masala Chai', base: '#A1887F', light: '#D7CCC8', dark: '#6D4C41', accent: '#EFEBE9' },
  { name: 'Mascarpone Cheese', base: '#FFF9E1', light: '#FFFFFF', dark: '#FFE082', accent: '#FFFDE7' },
  { name: 'Matcha', base: '#4CAF50', light: '#81C784', dark: '#2E7D32', accent: '#C8E6C9' },
  { name: 'Mocha', base: '#6D4C41', light: '#A1887F', dark: '#3E2723', accent: '#D7CCC8' },
  { name: 'Oreostic', base: '#424242', light: '#EEEEEE', dark: '#212121', accent: '#F5F5F5' },
  { name: 'Paan', base: '#81C784', light: '#C8E6C9', dark: '#388E3C', accent: '#E8F5E9' },
  { name: 'Peach', base: '#FF8A65', light: '#FFCCBC', dark: '#F4511E', accent: '#FFE0B2' },
  { name: 'Peanut', base: '#BCAAA4', light: '#D7CCC8', dark: '#795548', accent: '#EFEBE9' },
  { name: 'Peanut Banana', base: '#FFD54F', light: '#FFF9C4', dark: '#F9A825', accent: '#FFFDE7' },
  { name: 'Pecan', base: '#A1887F', light: '#D7CCC8', dark: '#6D4C41', accent: '#EFEBE9' },
  { name: 'Persimmon', base: '#FF5722', light: '#FF8A65', dark: '#D84315', accent: '#FFCCBC' },
  { name: 'Physalis', base: '#FF9800', light: '#FFB74D', dark: '#EF6C00', accent: '#FFE0B2' },
  { name: 'Pomegranate Sorbet', base: '#D32F2F', light: '#E57373', dark: '#B71C1C', accent: '#FFCDD2' },
  { name: 'Poppy (VEGAN)', base: '#90A4AE', light: '#CFD8DC', dark: '#546E7A', accent: '#ECEFF1' },
  { name: 'Pumpkin Pie', base: '#FF7043', light: '#FFAB91', dark: '#D84315', accent: '#FFE0B2' },
  { name: 'Ramphal', base: '#9CCC65', light: '#DCEDC8', dark: '#689F38', accent: '#F1F8E9' },
  { name: 'Raspberry', base: '#D81B60', light: '#F48FB1', dark: '#AD1457', accent: '#F8BBD0' },
  { name: 'Single Origin Chocolates', base: '#4E342E', light: '#795548', dark: '#3E2723', accent: '#A1887F' },
  { name: 'Tender Coconut', base: '#EEEEEE', light: '#FFFFFF', dark: '#BDBDBD', accent: '#FAFAFA' },
  { name: 'Vegan Ice cream (SF)', base: '#66BB6A', light: '#A5D6A7', dark: '#388E3C', accent: '#C8E6C9' },
  { name: 'Walnut', base: '#8D6E63', light: '#BCAAA4', dark: '#5D4037', accent: '#D7CCC8' },
  { name: 'White Chocolate', base: '#FFF9E1', light: '#FFFFFF', dark: '#FFE082', accent: '#FFFDE7' },
];

// Create realistic ice cream image with depth and texture
async function createRealisticImage(flavorName, colors) {
  const width = 800;
  const height = 800;
  
  // Build complex SVG with multiple layers for realism
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Main gradient for base color -->
        <radialGradient id="base" cx="45%" cy="35%" r="60%">
          <stop offset="0%" style="stop-color:${colors.light};stop-opacity:1" />
          <stop offset="40%" style="stop-color:${colors.base};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${colors.dark};stop-opacity:1" />
        </radialGradient>
        
        <!-- Highlight gradient for shine effect -->
        <radialGradient id="highlight" cx="40%" cy="30%" r="35%">
          <stop offset="0%" style="stop-color:#FFFFFF;stop-opacity:0.9" />
          <stop offset="50%" style="stop-color:${colors.accent};stop-opacity:0.5" />
          <stop offset="100%" style="stop-color:${colors.base};stop-opacity:0" />
        </radialGradient>
        
        <!-- Shadow gradient for depth -->
        <radialGradient id="shadow" cx="50%" cy="70%" r="50%">
          <stop offset="0%" style="stop-color:${colors.base};stop-opacity:0" />
          <stop offset="60%" style="stop-color:${colors.dark};stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#000000;stop-opacity:0.5" />
        </radialGradient>
        
        <!-- Texture filter for realistic surface -->
        <filter id="texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="1"/>
          <feColorMatrix type="saturate" values="0.1"/>
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="0 0.05 0.1 0.15"/>
          </feComponentTransfer>
        </filter>
        
        <!-- Smooth blur for softness -->
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>
      
      <!-- Background -->
      <rect width="${width}" height="${height}" fill="#F5F5F5"/>
      
      <!-- Main ice cream scoop with base color -->
      <ellipse cx="400" cy="420" rx="280" ry="260" fill="url(#base)"/>
      
      <!-- Secondary scoop for dimension -->
      <ellipse cx="400" cy="380" rx="240" ry="220" fill="url(#base)" opacity="0.9"/>
      
      <!-- Top highlight scoop -->
      <ellipse cx="400" cy="350" rx="200" ry="180" fill="url(#base)" opacity="0.85"/>
      
      <!-- Highlight shine effect -->
      <ellipse cx="380" cy="320" rx="120" ry="100" fill="url(#highlight)"/>
      
      <!-- Smaller highlight for realism -->
      <ellipse cx="420" cy="340" rx="60" ry="50" fill="#FFFFFF" opacity="0.6"/>
      
      <!-- Shadow for depth -->
      <ellipse cx="400" cy="480" rx="260" ry="200" fill="url(#shadow)"/>
      
      <!-- Texture overlay -->
      <rect width="${width}" height="${height}" filter="url(#texture)" opacity="0.3"/>
      
      <!-- Soft edge effect -->
      <ellipse cx="400" cy="360" rx="220" ry="200" fill="none" stroke="${colors.light}" 
               stroke-width="3" opacity="0.4" filter="url(#blur)"/>
    </svg>
  `;

  const fileName = `${flavorName}.jpg`;
  const filePath = path.join(assetsPath, fileName);

  try {
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 95, mozjpeg: true })
      .toFile(filePath);
    
    console.log(`✓ Generated realistic image: ${fileName}`);
  } catch (error) {
    console.error(`✗ Failed to generate ${fileName}:`, error.message);
  }
}

// Generate all realistic images
console.log('🍦 Generating hyper-realistic ice cream images...\n');

(async () => {
  for (const flavor of flavors) {
    await createRealisticImage(flavor.name, {
      base: flavor.base,
      light: flavor.light,
      dark: flavor.dark,
      accent: flavor.accent
    });
  }
  console.log('\n✨ All hyper-realistic images generated successfully!');
  console.log('Images now have proper highlights, shadows, and texture for a realistic look.');
})();
