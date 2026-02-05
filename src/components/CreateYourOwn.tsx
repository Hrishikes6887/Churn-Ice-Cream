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
    <section id="create" className="relative py-24 overflow-hidden">
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
        <div className="text-center mb-16">
          <span className="inline-block text-sm tracking-[0.2em] uppercase text-gold mb-4">
            Custom Creations
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-cream mb-4">
            Your Imagination.
            <br />
            <span className="text-gold">Our Creation.</span>
          </h2>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto">
            Follow the steps below to create your own unique flavor. Dream it, describe it, and we'll make it happen!
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={step.title} className="step-card group">
              {/* Step Number */}
              <div className="step-number text-gold font-heading text-6xl font-bold mb-4 transition-all duration-300">
                {step.number}
              </div>

              {/* Icon */}
              <div className="step-icon-wrapper w-16 h-16 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mb-6 mx-auto transition-all duration-300">
                <step.icon className="step-icon w-7 h-7 text-gold transition-all duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl text-foreground mb-3 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gold hover:bg-gold-light text-chocolate font-semibold rounded-full transition-all duration-300 hover:scale-105 btn-shadow text-lg"
          >
            <Sparkles className="w-5 h-5" />
            Start Creating
          </Link>
        </div>
      </div>

      <style>{`
        .step-card {
          position: relative;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 24px;
          padding: 2.5rem 2rem;
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
