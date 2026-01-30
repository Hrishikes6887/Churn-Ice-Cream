import { Leaf, Apple, Scale, Award, Heart, Plane } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: '100% Real, 100% Fresh',
    description: 'No artificial flavors, colors, or preservatives. Just pure, natural ingredients.',
    gradient: 'from-emerald-400 to-teal-500',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Apple,
    title: 'Pure Fruits & Veggies',
    description: 'Cold-pressed, nutrient-rich produce for authentic, vibrant flavors.',
    gradient: 'from-rose-400 to-pink-500',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
  {
    icon: Scale,
    title: 'Trimming the Fat',
    description: 'Only 7-10% fat compared to 30% in regular ice cream. Guilt-free indulgence.',
    gradient: 'from-amber-400 to-orange-500',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: Award,
    title: 'Authentic Artisan',
    description: 'Hand-roasted nuts and perfectly balanced recipes crafted with care.',
    gradient: 'from-purple-400 to-indigo-500',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Heart,
    title: 'Quality Always',
    description: 'Egg-free, gelatin-free, no artificial colorings. Pure quality you can trust.',
    gradient: 'from-red-400 to-rose-500',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
  },
  {
    icon: Plane,
    title: 'Fly to Italy or Drive into Churn',
    description: 'Trained by Italian gelato masters. Authentic taste without the travel.',
    gradient: 'from-sky-400 to-blue-500',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
  },
];

const BrandValues = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-cream via-white to-mint/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-mint/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gold/20 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block text-sm tracking-[0.2em] uppercase text-transparent bg-gradient-to-r from-caramel via-gold to-caramel-dark bg-clip-text mb-4 font-semibold">
            Our Promise
          </span>
          <h2 className="font-heading text-5xl md:text-6xl text-foreground mb-6 tracking-tight">
            Why Choose <span className="text-transparent bg-gradient-to-r from-caramel via-gold to-caramel-dark bg-clip-text">Churn?</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Every scoop tells a story of quality, authenticity, and passion for the perfect gelato experience.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 overflow-hidden"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0,
              }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`relative w-20 h-20 rounded-2xl ${value.iconBg} flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-md group-hover:shadow-xl`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`} />
                <value.icon className={`w-10 h-10 ${value.iconColor} transition-all duration-500 relative z-10`} strokeWidth={2} />
              </div>

              {/* Content */}
              <h3 className="font-heading text-2xl text-foreground mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {value.description}
              </p>

              {/* Decorative Corner Element */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default BrandValues;
