import Award1Img from '@/assets/Award1.jpeg';
import Award2Img from '@/assets/Award2.jpeg';

const awards = [
  {
    image: Award1Img,
    title: 'Excellence in Artisan Gelato',
    description: 'Recognized for our dedication to authentic gelato-making, natural ingredients, and uncompromising quality.',
  },
  {
    image: Award2Img,
    title: 'Outstanding Taste & Innovation',
    description: 'Honoured for creating innovative flavours while staying true to traditional craftsmanship.',
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-16 md:py-20 bg-[#F7F2EC] scroll-mt-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#A18A6F] mb-3 font-light">
            OUR JOURNEY
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#3D3127] mb-6 tracking-tight font-medium">
            Achievements & Recognition
          </h2>
          <p className="text-base md:text-lg text-[#6B5E52] leading-relaxed font-light max-w-3xl mx-auto">
            Celebrating milestones that reflect our commitment to quality, craftsmanship, and authenticity.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <div
              key={award.title}
              className="award-card"
              style={{
                animationDelay: `${index * 0.15}s`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0,
              }}
            >
              {/* Award Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-white shadow-lg">
                <img
                  src={award.image}
                  alt={award.title}
                  className="award-image w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Award Content */}
              <div className="text-center px-4">
                <h3 className="font-serif text-xl md:text-2xl text-[#3D3127] mb-3 font-medium">
                  {award.title}
                </h3>
                <p className="text-sm md:text-base text-[#6B5E52] leading-relaxed font-light">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <div className="max-w-3xl mx-auto text-center mt-12 md:mt-16">
          <p className="text-base md:text-lg text-[#6B5E52] leading-relaxed font-light italic">
            These achievements inspire us to continue crafting desserts that people trust, love, and remember.
          </p>
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

        .award-image {
          transition: transform 0.5s ease;
        }

        .award-card:hover .award-image {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default AchievementsSection;
