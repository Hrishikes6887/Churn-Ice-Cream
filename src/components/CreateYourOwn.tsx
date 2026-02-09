import { Lightbulb, FileText, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import freshFruitsBg from '@/assets/fresh-fruits-bg.jpg';

const steps = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'Conjure A Flavour',
    description: 'Dream up your perfect flavor combination. Let your imagination run wild!',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Fill The Details',
    description: 'Share your vision with us through our simple form. Be as creative as you want.',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Abra Cadabra',
    description: 'Our gelato artisans bring your creation to life. Magic happens!',
  },
];

const CreateYourOwn = () => {
  return (
    <section id="create" className="relative py-12 md:py-16 overflow-hidden scroll-mt-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={freshFruitsBg}
          alt="Fresh fruits background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-chocolate/85 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-block text-xs md:text-sm tracking-[0.2em] uppercase text-gold mb-3">
            Custom Creations
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-cream mb-3">
            Your Imagination.
            <br />
            <span className="text-gold">Our Creation.</span>
          </h2>
          <p className="text-cream/80 text-sm md:text-base max-w-2xl mx-auto">
            Follow the steps below to create your own unique flavor. Dream it, describe it, and we'll make it happen!
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
          {steps.map((step, index) => (
            <div key={step.title} className="step-card group">
              {/* Step Number */}
              <div className="step-number text-gold font-heading text-4xl md:text-5xl font-bold mb-3 transition-all duration-300">
                {step.number}
              </div>

              {/* Icon */}
              <div className="step-icon-wrapper w-12 h-12 md:w-14 md:h-14 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mb-4 mx-auto transition-all duration-300">
                <step.icon className="step-icon w-5 h-5 md:w-6 md:h-6 text-gold transition-all duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-lg md:text-xl text-foreground mb-2 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-gold/30 translate-x-full" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/create-your-own"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gold hover:bg-gold-light text-chocolate font-semibold rounded-full transition-all duration-300 hover:scale-105 btn-shadow text-base md:text-lg"
          >
            <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
            Start Creating
          </Link>
        </div>
      </div>

      <style>{`
        .step-card {
          position: relative;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 1.5rem 1.25rem;
          text-align: center;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .step-number {
          opacity: 0.4;
        }

        /* Desktop-only hover effects */
        @media (hover: hover) and (pointer: fine) {
          .step-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 12px 32px rgba(214, 178, 94, 0.25);
            background: rgba(255, 255, 255, 1);
          }

          .step-card:hover .step-number {
            opacity: 1;
            color: #D6B25E;
            text-shadow: 0 0 20px rgba(214, 178, 94, 0.4);
          }

          .step-card:hover .step-icon-wrapper {
            background: rgba(214, 178, 94, 0.2);
            border-color: #D6B25E;
            transform: scale(1.1) rotate(5deg);
          }

          .step-card:hover .step-icon {
            transform: scale(1.1);
            filter: brightness(1.2);
          }
        }

        /* Respect reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .step-card,
          .step-number,
          .step-icon-wrapper,
          .step-icon {
            transition: none;
          }

          .step-card:hover {
            transform: none;
          }

          .step-card:hover .step-icon-wrapper {
            transform: none;
          }

          .step-card:hover .step-icon {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default CreateYourOwn;
