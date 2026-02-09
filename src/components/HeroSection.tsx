import { ChefHat, ShoppingCart } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import heroImage from '@/assets/hero-gelato.jpg';
import heroVideo from '@/assets/Artisan Ice cream.mp4';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Ensure video plays on iOS and other browsers
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setVideoError(true);
      });
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-24">
      {/* Background Video */}
      <div className="absolute inset-0 bg-chocolate">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={heroImage}
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              pointerEvents: 'none',
            }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={heroImage}
            alt="Premium artisan gelato"
            className="w-full h-full object-cover"
          />
        )}
        {/* Dark warm overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate/60 via-chocolate/50 to-chocolate/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Supporting Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-chocolate/40 backdrop-blur-md border border-amber-200/20 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600/80" />
            <span className="text-amber-100/90 text-xs md:text-sm tracking-widest uppercase font-light">Authentic Gelato, Crafted Fresh In-Store Every Day</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#F5F2EC] leading-tight tracking-tight mb-8 max-w-4xl mx-auto font-medium opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Ice Cream for Those Who
            <br />
            <span className="text-[#D6B25E] font-semibold">Care About What They Eat</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-[#F5F2EC]/70 mb-12 font-light tracking-wide opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
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
              Menu
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
