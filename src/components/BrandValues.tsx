import { Leaf, Apple, Scale, Award, Heart, Plane } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: '100% Real, 100% Fresh',
    description: 'No artificial flavors, colors, or preservatives. Only real, natural ingredients.',
    iconColor: '#6B8E7F', // Sage
  },
  {
    icon: Apple,
    title: 'Pure Fruits & Veggies',
    description: 'Cold-pressed, nutrient-rich fruits and vegetables for vibrant, authentic flavors.',
    iconColor: '#C67B5C', // Clay/Terracotta
  },
  {
    icon: Scale,
    title: 'Trimming the Fat',
    description: 'Churn is low in fat (7-10%). Contains one-third of the fat in regular ice creams. ',
    iconColor: '#D6B25E', // Amber/Gold
  },
  {
    icon: Award,
    title: 'Authentic Artisan',
    description: 'Hand-roasted nuts and carefully balanced recipes crafted with care.',
    iconColor: '#7C6A5C', // Cocoa
  },
  {
    icon: Heart,
    title: 'Quality Always',
    description: 'Egg-free, gelatin-free, no premixes or artificial additives. Just honest quality.',
    iconColor: '#C67B5C', // Clay
  },
  {
    icon: Plane,
    title: 'Fly to Italy or Drive into Churn',
    description: 'Trained by Italian gelato masters. Authentic taste, made fresh here.',
    iconColor: '#6B9BC3', // Soft blue
  },
];

const BrandValues = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#F7F2EC] relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10 max-w-4xl mx-auto">
          {/* Eyebrow */}
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#A18A6F] mb-4 font-light">
            OUR PROMISE
          </p>
          
          {/* Main Heading */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3D3127] mb-4 tracking-tight font-medium">
            Why Choose <span className="text-[#D6B25E]">Churn</span>?
          </h2>
          
          {/* Subtext */}
          <p className="text-sm md:text-base text-[#6B5E52] leading-relaxed font-light max-w-2xl mx-auto">
            Every scoop reflects our commitment to quality, authenticity, and honest ingredients.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="value-card bg-white rounded-2xl p-6 md:p-8"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0,
              }}
            >
              {/* Icon */}
              <div className="mb-4 value-card-icon-wrapper">
                <value.icon 
                  className="value-card-icon w-7 h-7 md:w-8 md:h-8" 
                  strokeWidth={1.5} 
                  style={{ color: value.iconColor }}
                />
              </div>

              {/* Content */}
              <h3 className="value-card-title font-serif text-lg md:text-xl text-[#3D3127] mb-2 leading-tight">
                {value.title}
              </h3>
              <p className="text-[#6B5E52] text-sm leading-relaxed font-light">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .value-card {
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: transform 0.24s cubic-bezier(0.4, 0, 0.2, 1),
                      box-shadow 0.24s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .value-card-title {
          transition: font-weight 0.24s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .value-card-icon {
          transition: color 0.22s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.22s cubic-bezier(0.4, 0, 0.2, 1),
                      filter 0.22s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Desktop-only hover effects */
        @media (hover: hover) and (pointer: fine) {
          .value-card:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.10);
          }

          .value-card:hover .value-card-title {
            font-weight: 600;
          }

          .value-card:hover .value-card-icon {
            color: #D6B25E !important;
            filter: brightness(1.06);
            transform: scale(1.05);
          }
        }

        /* Respect reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .value-card,
          .value-card-title,
          .value-card-icon {
            transition: none;
          }
          
          .value-card:hover {
            transform: none;
          }

          .value-card:hover .value-card-title {
            font-weight: inherit;
          }

          .value-card:hover .value-card-icon {
            color: inherit !important;
            filter: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default BrandValues;
