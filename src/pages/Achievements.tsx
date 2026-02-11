import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
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

const Achievements = () => {
  return (
    <div className="min-h-screen bg-[#F7F2EC]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#F7F2EC]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#A18A6F] mb-4 font-light">
              OUR JOURNEY
            </p>
            
            {/* Main Heading */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#3D3127] mb-6 tracking-tight font-medium">
              Achievements & Recognition
            </h1>
            
            {/* Subheading */}
            <p className="text-base md:text-lg text-[#6B5E52] leading-relaxed font-light max-w-3xl mx-auto">
              Celebrating milestones that reflect our commitment to quality, craftsmanship, and authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Showcase Section */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6">
          {/* Restaurant Guru Award Ribbon */}
          <div className="flex justify-center mb-12 md:mb-16">
            <div className="w-full max-w-[200px] md:max-w-[240px]">
              <div id="circle-r-ribbon" onClick={(e) => {if((e.target as HTMLElement).nodeName.toLowerCase() !== 'a') {window.open((document.querySelector('.r-ribbon_title') as HTMLAnchorElement)?.href);return 0;}}} className="">
                <div className="r-ribbon_ahead ">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="160px" height="160px" viewBox="0 0 160 160">
                    <defs>
                      <path id="heading-arc" d="M 30 80 a 50 50 0 1 1 100 0"></path>
                    </defs>
                    <text className="r-ribbon_ahead-heading " fill="#000" textAnchor="middle">
                      <textPath startOffset="50%" xlinkHref="#heading-arc">Recommended</textPath>
                    </text>
                  </svg>
                </div>
                <p className="r-ribbon_year">2025</p>
                <a href="https://restaurant-guru.in/CHURN-Bengaluru" className="r-ribbon_title " target="_blank" rel="noopener noreferrer">CHURN</a>
                <div className="r-ribbon_ahead r-ribbon_ahead-bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="120px" height="120px" viewBox="0 0 120 120">
                    <defs>
                      <path id="subheading-arc" d="M 12 60 a 48 48 0 0 0 96 0"></path>
                    </defs>
                    <text className="r-ribbon_ahead-subh" fill="#000" textAnchor="middle">
                      <textPath startOffset="50%" xlinkHref="#subheading-arc"><a href="https://restaurantguru.com" target="_blank" rel="noopener noreferrer">Restaurant Guru</a></textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>


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
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6 bg-white">
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
          <div className="max-w-3xl mx-auto text-center mt-16 md:mt-20">
            <p className="text-base md:text-lg text-[#6B5E52] leading-relaxed font-light italic">
              These achievements inspire us to continue crafting desserts that people trust, love, and remember.
            </p>
          </div>
        </div>
      </section>

      <Footer />

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

        .award-card {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .award-image {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Desktop-only hover effects */
        @media (hover: hover) and (pointer: fine) {
          .award-card:hover {
            transform: translateY(-4px);
          }

          .award-card:hover .award-image {
            transform: scale(1.02);
          }
        }

        /* Respect reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .award-card,
          .award-image {
            transition: none;
          }

          .award-card:hover {
            transform: none;
          }

          .award-card:hover .award-image {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Achievements;
