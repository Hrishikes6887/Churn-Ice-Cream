import { ChefHat, ShoppingCart } from 'lucide-react';
import heroImage from '@/assets/hero-gelato.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium artisan gelato"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate/70 via-chocolate/50 to-chocolate/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-cream/90 text-sm tracking-wide">Artisan Gelato Since 2018</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-cream leading-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Authentic Pleasure
            <br />
            <span className="text-gold">That Is All Natural</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-cream/80 mb-10 font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Inspiring to Eat Real
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="#create"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold hover:bg-gold-light text-chocolate font-semibold rounded-full transition-all duration-300 hover:scale-105 btn-shadow"
            >
              <ChefHat className="w-5 h-5" />
              Create Your Own
            </a>
            <a
              href="#creations"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-cream/10 hover:bg-cream/20 text-cream border border-cream/30 font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <ShoppingCart className="w-5 h-5" />
              Menu - Pick Up
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="flex flex-col items-center gap-2 text-cream/60">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border-2 border-cream/40 flex justify-center pt-1">
              <div className="w-1 h-2 bg-cream/60 rounded-full animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
