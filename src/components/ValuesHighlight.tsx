import { Check } from 'lucide-react';
import darkChocolateImage from '@/assets/dark-chocolate-values.jpg';

const values = [
  'No industrial premixes or pastes',
  'Egg-free and gelatin-free',
  'No artificial colorings or flavors',
  'Delicious vegan sorbetto available',
  'Fat-free and refreshing options',
  'Made fresh daily in-house',
];

const ValuesHighlight = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={darkChocolateImage}
          alt="Dark chocolate gelato"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-chocolate/95 via-chocolate/85 to-chocolate/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl">
          <span className="inline-block text-sm tracking-[0.2em] uppercase text-gold mb-4">
            Our Commitment
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-cream mb-6">
            Our Values
          </h2>
          <p className="text-cream/80 text-lg mb-10">
            We believe in transparency and quality. Every scoop reflects our 
            unwavering commitment to creating the purest gelato experience.
          </p>

          {/* Values List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value) => (
              <div 
                key={value} 
                className="flex items-center gap-3 bg-cream/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-cream/10"
              >
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <span className="text-cream text-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesHighlight;
