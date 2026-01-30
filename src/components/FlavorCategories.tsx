import exoticFlavours from '@/assets/exotic-flavours.jpg';
import hotChocolate from '@/assets/hot-chocolate.jpg';
import royalFlavours from '@/assets/royal-flavours.jpg';
import sandwich from '@/assets/sandwich.jpg';
import sundae from '@/assets/sundae.jpg';
import todaysMenu from '@/assets/todays-menu.jpg';
import veganSorbet from '@/assets/vegan-sorbet.jpg';

const categories = [
  { name: 'Exotic Flavours', count: 40, image: exoticFlavours },
  { name: 'Hot Chocolate', count: 3, image: hotChocolate },
  { name: 'Royal Flavours', count: 18, image: royalFlavours },
  { name: 'Sandwich', count: 8, image: sandwich },
  { name: 'Sundae', count: 3, image: sundae },
  { name: "Today's Menu", count: 12, image: todaysMenu },
  { name: 'Vegan/Sorbet', count: 29, image: veganSorbet },
];

const FlavorCategories = () => {
  return (
    <section id="creations" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm tracking-[0.2em] uppercase text-caramel-light mb-4">
            Our Menu
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Explore Our Creations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From classic favorites to exotic innovations, discover over 100 handcrafted flavors.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="category-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-chocolate/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Count Badge */}
                <div className="absolute top-4 right-4 bg-gold text-chocolate text-sm font-bold px-3 py-1 rounded-full">
                  {category.count}
                </div>

                {/* Category Name */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading text-xl text-cream group-hover:text-gold transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-cream/70 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    Explore {category.count} flavors →
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorCategories;
