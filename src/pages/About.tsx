import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import brandStoryImg from '@/assets/brand-story.jpg';
import hotChocolateImg from '@/assets/hot-chocolate.jpg';
import sandwichImg from '@/assets/sandwich.jpg';
import darkChocolateImg from '@/assets/dark-chocolate-values.jpg';
import iceCream1 from '@/assets/Pistachio.jpg';
import iceCream2 from '@/assets/Ruby Chocolate.jpg';
import iceCream3 from '@/assets/Blueberry.jpg';
import logo from '@/assets/LOGO.png';

const About = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe all reveal elements
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F2EC]">
      <Navigation />

      {/* SECTION 6 (TOP) - WHO WE ARE */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 bg-gradient-to-b from-[#F7F2EC] to-[#FAF5EF]">
        <div className="container mx-auto max-w-5xl text-center reveal">
          <div className="mb-8 flex justify-center">
            <img src={logo} alt="Churn" className="w-32 h-32 rounded-full" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-[#3D3127] mb-8 tracking-tight font-medium">
            Authentic. Artisan. <span className="text-[#D6B25E]">Unique.</span>
          </h1>
          <div className="space-y-6 text-lg md:text-xl text-[#6B5E52] leading-relaxed font-light max-w-3xl mx-auto">
            <p>
              Churn is a family-owned and operated café.
            </p>
            <p>
              We feature authentic artisan ice creams, sorbets, panini sandwiches, and hot chocolate — all made fresh daily in our kitchen.
            </p>
            <p>
              Created for those who respect eating real, fresh, and natural food linked to good health and nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 - THE BEGINNING */}
      <section className="relative min-h-screen flex items-center py-20 px-6 bg-[#3D3127]">
        <div className="absolute inset-0">
          <img
            src={brandStoryImg}
            alt="The Beginning"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="reveal text-center md:text-left">
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#D6B25E] mb-6 font-light">
              THE ORIGIN STORY
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-[#F7F2EC] mb-12 tracking-tight font-medium">
              The Beginning
            </h2>
            <div className="space-y-8 text-lg md:text-2xl text-[#F7F2EC] leading-relaxed font-light">
              <p className="reveal" style={{ transitionDelay: '0.1s' }}>
                It takes time, passion, and an unwavering commitment to quality.
              </p>
              <p className="reveal" style={{ transitionDelay: '0.2s' }}>
                After being trained by Gelato Masters in Italy, we spent a full year relentlessly experimenting to arrive at unique artisanal flavours made completely from scratch.
              </p>
              <p className="reveal" style={{ transitionDelay: '0.3s' }}>
                Using fresh fruits, milk, seasonal ingredients, and our own caramels and nut butters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - CONSTANTLY INNOVATING */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={darkChocolateImg}
            alt="Innovation Lab"
            className="w-full h-full object-cover scale-innovation"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3D3127]/90 via-[#3D3127]/60 to-transparent" />
        </div>
        <div className="container mx-auto max-w-4xl px-6 relative z-10 text-center reveal">
          <h2 className="font-serif text-4xl md:text-6xl text-[#F7F2EC] mb-8 tracking-tight font-medium">
            Constantly Innovating
          </h2>
          <p className="text-xl md:text-2xl text-[#F7F2EC]/90 leading-relaxed font-light">
            Churn is also an experimental laboratory, always in motion. When we are not too busy, we are working in the lab on new and exciting concoctions to tickle the taste buds.
          </p>
        </div>
      </section>

      {/* SECTION 2 - BEYOND ICE CREAMS */}
      <section className="relative py-24 md:py-32 px-6 bg-[#F7F2EC]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal slide-from-left">
              <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#A18A6F] mb-4 font-light">
                MORE THAN GELATO
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#3D3127] mb-6 tracking-tight font-medium">
                Beyond Ice Creams
              </h2>
              <p className="text-lg md:text-xl text-[#6B5E52] leading-relaxed font-light mb-8">
                If you are looking for something other than ice creams, we make on-premises panini sandwiches with unique stuffings made in-house and ultra-rich single-origin hot chocolate like none you've had before.
              </p>
              <p className="text-lg md:text-xl text-[#3D3127] font-medium italic">
                Sit down and enjoy!
              </p>
            </div>
            <div className="reveal slide-from-right grid grid-cols-2 gap-4">
              <img
                src={sandwichImg}
                alt="Artisan Sandwiches"
                className="rounded-2xl w-full h-64 object-cover shadow-lg"
              />
              <img
                src={hotChocolateImg}
                alt="Hot Chocolate"
                className="rounded-2xl w-full h-64 object-cover shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 (BOTTOM) - FROM TASTE TOWARDS WELLNESS */}
      <section className="relative py-24 md:py-32 px-6 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="reveal">
            <h2 className="font-serif text-4xl md:text-6xl text-[#3D3127] mb-8 tracking-tight font-medium">
              From Taste Towards <span className="text-[#D6B25E]">Wellness</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#6B5E52] leading-relaxed font-light max-w-3xl mx-auto mb-12">
              Our artisan creations squeeze the best out of nature to offer a unique and authentic taste, while protecting the aspects linked to health and nutrition.
            </p>
          </div>

          {/* Floating Ice Cream Visuals */}
          <div className="relative mt-16 flex justify-center gap-6 flex-wrap">
            <div className="reveal float-up" style={{ transitionDelay: '0.1s' }}>
              <img
                src={iceCream1}
                alt="Ice Cream"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl"
              />
            </div>
            <div className="reveal float-up" style={{ transitionDelay: '0.2s' }}>
              <img
                src={iceCream2}
                alt="Ice Cream"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl"
              />
            </div>
            <div className="reveal float-up" style={{ transitionDelay: '0.3s' }}>
              <img
                src={iceCream3}
                alt="Ice Cream"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        /* Base reveal animation */
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Slide animations */
        .slide-from-left {
          transform: translateX(-40px) translateY(0);
        }

        .slide-from-left.reveal-visible {
          transform: translateX(0) translateY(0);
        }

        .slide-from-right {
          transform: translateX(40px) translateY(0);
        }

        .slide-from-right.reveal-visible {
          transform: translateX(0) translateY(0);
        }

        /* Float up animation */
        .float-up {
          transform: translateY(40px);
        }

        .float-up.reveal-visible {
          transform: translateY(0);
        }

        /* Scale animation for background */
        .scale-innovation {
          animation: subtle-zoom 20s ease-in-out infinite alternate;
        }

        @keyframes subtle-zoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.05);
          }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .slide-from-left,
          .slide-from-right,
          .float-up {
            transition: none;
            transform: none;
          }

          .scale-innovation {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
