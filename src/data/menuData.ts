// Import ice cream images
import AlmondImg from '@/assets/Almond.jpg';
import AlmondFudgeImg from '@/assets/Almond Fudge.jpg';
import ApplePieImg from '@/assets/Apple Pie.jpg';
import AvocadoVeganImg from '@/assets/Avocado (VEGAN).jpg';
import BelgiumHotChocolateImg from '@/assets/Belgium Hot Chocolate.jpg';
import BelgiumHotChocolateArabicaCoffeeImg from '@/assets/Belgium Hot Chocolate with Arabica Coffee.jpg';
import BelgiumHotChocolateHazelnutImg from '@/assets/Belgium Hot Chocolate with Hazelnut.jpg';
import BlackGrapeSorbetImg from '@/assets/Black Grape Sorbet.jpg';
import BlueberryImg from '@/assets/Blueberry.jpg';
import BrownieHeavenImg from '@/assets/Brownie Heaven.jpg';
import CashewImg from '@/assets/Cashew.jpg';
import CashewFudgeImg from '@/assets/Cashew Fudge.jpg';
import ChikooImg from '@/assets/Chikoo.jpg';
import ChocoHazelnutNutellaImg from '@/assets/ChocoHazelnut(Nutella).jpg';
import ChoconutImg from '@/assets/Choconut.jpg';
import CoffeeArabicaImg from '@/assets/Coffee Arabica1.jpg';
import CoffeeCaramelImg from '@/assets/Coffee Caramel.jpg';
import CoffeenutImg from '@/assets/Coffeenut.jpg';
import CookieDoughImg from '@/assets/Cookie Dough.jpg';
import HazelnutImg from '@/assets/Hazelnut.jpg';
import KiwiSorbetImg from '@/assets/Kiwi Sorbet.jpg';
import KubanikaMeethaImg from '@/assets/Kubani ka Meetha.jpg';
import MintandLemonSorbetImg from '@/assets/Mint and Lemon Sorbet.jpg';
import MumbaiSandwichImg from '@/assets/Mumbai Sandwich.jpg';
import OrangeSorbetImg from '@/assets/Orange Sorbet.jpg';
import PassionFruitSorbetImg from '@/assets/Passion Fruit Sorbet.jpg';
import PearGingerSorbetImg from '@/assets/Pear Ginger Sorbet.jpg';
import PistachioImg from '@/assets/Pistachio.jpg';
import RubyChocolateImg from '@/assets/Ruby Chocolate.jpg';
import SpinachCornSandwishImg from '@/assets/Spinach Corn Sandwish.jpg';
import TandooriPaneerSandwichImg from '@/assets/Tandoori Paneer Sandwich.jpg';

// Category images
import exoticFlavoursImg from '@/assets/exotic-flavours.jpg';
import hotChocolateImg from '@/assets/hot-chocolate.jpg';
import sandwichImg from '@/assets/sandwich.jpg';
import sundaeImg from '@/assets/sundae.jpg';
import veganSorbetImg from '@/assets/vegan-sorbet.jpg';

export interface IceCreamItem {
  name: string;
  image: string;
  description?: string;
}

export interface MenuCategory {
  name: string;
  slug: string;
  description?: string;
  image: string;
  items: IceCreamItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    name: 'Ice Cream Flavours',
    slug: 'ice-cream-flavours',
    description: 'Premium handcrafted ice cream flavours from classic to exotic',
    image: exoticFlavoursImg,
    items: [
      // Previously Exotic Flavours
      { name: 'Almond', image: AlmondImg, description: 'Luxuriously smooth ice cream made with pure roasted Californian almond paste.' },
      { name: 'Apple Pie', image: ApplePieImg, description: 'Real apple gelato crafted with our house-made apple pie spice.' },
      { name: 'Blueberry', image: BlueberryImg, description: 'Yummy purple goodness — healthy, refreshing, and delicious.' },
      { name: 'Cashew', image: CashewImg, description: 'Smooth and creamy ice cream blended with homemade roasted Mangalore cashew butter.' },
      { name: 'Chikoo', image: ChikooImg, description: 'A true delight made with fresh, ripe chikoo.' },
      { name: 'Choconut', image: ChoconutImg, description: 'Dark chocolate ice cream blended with roasted Californian almonds.' },
      { name: 'Coffee Arabica', image: CoffeeArabicaImg, description: 'Made with 100% Arabica coffee — crafted especially for coffee lovers.' },
      { name: 'Coffee Caramel', image: CoffeeCaramelImg, description: 'Your favorite coffee macchiato as an ice cream — rich coffee, vanilla, and homemade caramel sauce. A true indulgence.' },
      { name: 'Coffeenut', image: CoffeenutImg, description: 'Traditional filter kaapi blended with tasty and nutritious nuts.' },
      { name: 'Cookie Dough', image: CookieDoughImg, description: 'Blended with our own chocolate chip cookie dough — sweet memories of childhood.' },
      // Previously Royal Flavours
      { name: 'Ruby Chocolate', image: RubyChocolateImg, description: 'A brand-new ice cream made with ruby chocolate — a gift from nature with fresh berry fruitiness and luscious smoothness.' },
      { name: 'Pistachio', image: PistachioImg, description: 'The green gold from Iran — seduces the palate and captivates the senses.' },
      { name: 'Hazelnut', image: HazelnutImg, description: 'Made with freshly roasted hazelnuts sourced from Turkey.' },
      { name: 'ChocoHazelnut(Nutella)', image: ChocoHazelnutNutellaImg, description: 'A luscious blend of rich chocolate and premium hazelnut.' },
      { name: 'Brownie Heaven', image: BrownieHeavenImg, description: 'Fudge brownie gelato with real, gooey homemade brownies folded into dark chocolate ice cream.' },
    ],
  },
  {
    name: 'Hot Chocolate',
    slug: 'hot-chocolate',
    description: 'Rich, indulgent chocolate experiences',
    image: hotChocolateImg,
    items: [
      { name: 'Belgium Hot Chocolate', image: BelgiumHotChocolateImg, description: 'A luscious blend of aromatic Belgium cocoa with single-origin Peruvian chocolate — a true treat for the senses!' },
      { name: 'Belgium Hot Chocolate with Arabica Coffee', image: BelgiumHotChocolateArabicaCoffeeImg, description: 'Distinctly delicious! A spectacular blend of rich, creamy hot chocolate infused with fine 100% Arabica coffee.' },
      { name: 'Belgium Hot Chocolate with Hazelnut', image: BelgiumHotChocolateHazelnutImg, description: 'Rich, creamy hot chocolate blended with home-toasted hazelnut butter — a true cup of heaven!' },
    ],
  },
  {
    name: 'Sandwich',
    slug: 'sandwich',
    description: 'Freshly grilled panini sandwiches with premium fillings',
    image: sandwichImg,
    items: [
      { 
        name: 'Spinach Corn Sandwich', 
        image: SpinachCornSandwishImg,
        description: 'Grilled Panini filled with goodness of fresh spinach and delicious sweet corn cooked in homemade cheesy sauce and mozzarella cheese.'
      },
      { 
        name: 'Mumbai Sandwich', 
        image: MumbaiSandwichImg,
        description: 'Grilled Panini filled with boiled potatoes and fresh peas, which are tempered with spices and mozzarella cheese.'
      },
      { 
        name: 'Tandoori Paneer Sandwich', 
        image: TandooriPaneerSandwichImg,
        description: 'Grilled Panini filled with organic paneer marinated in tandoori masala, bell pepper and mozzarella cheese.'
      },
    ],
  },
  {
    name: 'Sundae',
    slug: 'sundae',
    description: 'Decadent sundae creations',
    image: sundaeImg,
    items: [
      { name: 'Almond Fudge', image: AlmondFudgeImg, description: 'Classic Vanilla ice cream served with homemade chocolate sauce and lots and lots of roasted whole Almonds' },
      { name: 'Kubani ka Meetha', image: KubanikaMeethaImg, description: 'Classic Vanilla ice cream served with roasted Almonds and Kubani ka Meetha' },
      { name: 'Cashew Fudge', image: CashewFudgeImg, description: 'Classic Vanilla ice cream served with homemade chocolate sauce and lots and lots of roasted Cashew halves' },
    ],
  },
  {
    name: 'Vegan/Sorbet',
    slug: 'vegan-sorbet',
    description: 'Plant-based and fruit-forward delights',
    image: veganSorbetImg,
    items: [
      { name: 'Avocado (VEGAN)', image: AvocadoVeganImg, description: 'A captivating ice cream that mixes the creaminess of the Avocado with the rich flavour of coconut, celebration of exotic flavours !!' },
      { name: 'Pear Ginger Sorbet', image: PearGingerSorbetImg, description: 'Light, but surprisingly rich, with a hint of Ginger' },
      { name: 'Passion Fruit Sorbet', image: PassionFruitSorbetImg, description: 'The passion and the love that can be tasted in every mouthful will literally "blow your mind"' },
      { name: 'Orange Sorbet', image: OrangeSorbetImg, description: 'Made from real oranges ...what more can we say?' },
      { name: 'Mint and Lemon Sorbet', image: MintandLemonSorbetImg, description: 'Magnificently refreshing, made with freshly squeezed Lemon and fresh home-grown peppermint' },
      { name: 'Kiwi Sorbet', image: KiwiSorbetImg, description: 'Sweet & Sour, refreshing and bursting with vitamin C' },
      { name: 'Black Grape Sorbet', image: BlackGrapeSorbetImg, description: 'A rich, punchy sorbet just full of grape, sweet and tangy !!' },
    ],
  },
];

// Helper function to get category by slug
export const getCategoryBySlug = (slug: string): MenuCategory | undefined => {
  return menuCategories.find(category => category.slug === slug);
};
