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
import royalFlavoursImg from '@/assets/royal-flavours.jpg';
import sandwichImg from '@/assets/sandwich.jpg';
import sundaeImg from '@/assets/sundae.jpg';
import todaysMenuImg from '@/assets/todays-menu.jpg';
import veganSorbetImg from '@/assets/vegan-sorbet.jpg';

export interface IceCreamItem {
  name: string;
  image: string;
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
    name: 'Exotic Flavours',
    slug: 'exotic-flavours',
    description: 'Bold, adventurous flavors from around the world',
    image: exoticFlavoursImg,
    items: [
      { name: 'Almond', image: AlmondImg },
      { name: 'Apple Pie', image: ApplePieImg },
      { name: 'Blueberry', image: BlueberryImg },
      { name: 'Cashew', image: CashewImg },
      { name: 'Chikoo', image: ChikooImg },
      { name: 'Choconut', image: ChoconutImg },
      { name: 'Coffee Arabica', image: CoffeeArabicaImg },
      { name: 'Coffee Caramel', image: CoffeeCaramelImg },
      { name: 'Coffeenut', image: CoffeenutImg },
      { name: 'Cookie Dough', image: CookieDoughImg },
      // Add more exotic flavours as you get more images
    ],
  },
  {
    name: 'Hot Chocolate',
    slug: 'hot-chocolate',
    description: 'Rich, indulgent chocolate experiences',
    image: hotChocolateImg,
    items: [
      { name: 'Belgium Hot Chocolate', image: BelgiumHotChocolateImg },
      { name: 'Belgium Hot Chocolate with Arabica Coffee', image: BelgiumHotChocolateArabicaCoffeeImg },
      { name: 'Belgium Hot Chocolate with Hazelnut', image: BelgiumHotChocolateHazelnutImg },
    ],
  },
  {
    name: 'Royal Flavours',
    slug: 'royal-flavours',
    description: 'Premium, luxurious gelato creations',
    image: royalFlavoursImg,
    items: [
      { name: 'Ruby Chocolate', image: RubyChocolateImg },
      { name: 'Pistachio', image: PistachioImg },
      { name: 'Hazelnut', image: HazelnutImg },
      { name: 'ChocoHazelnut(Nutella)', image: ChocoHazelnutNutellaImg },
      { name: 'Brownie Heaven', image: BrownieHeavenImg },
    ],
  },
  {
    name: 'Sandwich',
    slug: 'sandwich',
    description: 'Classic ice cream sandwiches with a twist',
    image: sandwichImg,
    items: [
      { name: 'Spinach Corn Sandwish', image: SpinachCornSandwishImg },
      { name: 'Mumbai Sandwich', image: MumbaiSandwichImg },
      { name: 'Tandoori Paneer Sandwich', image: TandooriPaneerSandwichImg },
    ],
  },
  {
    name: 'Sundae',
    slug: 'sundae',
    description: 'Decadent sundae creations',
    image: sundaeImg,
    items: [
      { name: 'Almond Fudge', image: AlmondFudgeImg },
      { name: 'Kubani ka Meetha', image: KubanikaMeethaImg },
      { name: 'Cashew Fudge', image: CashewFudgeImg },
    ],
  },
  {
    name: "Today's Menu",
    slug: 'todays-menu',
    description: 'Fresh daily selections',
    image: todaysMenuImg,
    items: [
      { name: 'Almond', image: AlmondImg },
      { name: 'Blueberry', image: BlueberryImg },
      { name: 'Cashew', image: CashewImg },
      { name: 'Chikoo', image: ChikooImg },
      { name: 'Coffee Arabica', image: CoffeeArabicaImg },
      { name: 'Cookie Dough', image: CookieDoughImg },
      // Add today's selections
    ],
  },
  {
    name: 'Vegan/Sorbet',
    slug: 'vegan-sorbet',
    description: 'Plant-based and fruit-forward delights',
    image: veganSorbetImg,
    items: [
      { name: 'Avocado (VEGAN)', image: AvocadoVeganImg },
      { name: 'Pear Ginger Sorbet', image: PearGingerSorbetImg },
      { name: 'Passion Fruit Sorbet', image: PassionFruitSorbetImg },
      { name: 'Orange Sorbet', image: OrangeSorbetImg },
      { name: 'Mint and Lemon Sorbet', image: MintandLemonSorbetImg },
      { name: 'Kiwi Sorbet', image: KiwiSorbetImg },
      { name: 'Black Grape Sorbet', image: BlackGrapeSorbetImg },
    ],
  },
];

// Helper function to get category by slug
export const getCategoryBySlug = (slug: string): MenuCategory | undefined => {
  return menuCategories.find(category => category.slug === slug);
};
