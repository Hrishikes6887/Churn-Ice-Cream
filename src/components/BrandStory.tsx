import brandStoryImage from '@/assets/brand-story.jpg';

const BrandStory = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={brandStoryImage}
                alt="Gelato artisan at work"
                className="w-full h-[500px] object-cover"
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-mint/30 rounded-full blur-xl" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 bg-card rounded-2xl p-6 shadow-xl card-shadow">
              <div className="font-heading text-4xl text-primary font-bold">7+</div>
              <div className="text-muted-foreground text-sm">Years of<br />Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-sm tracking-[0.2em] uppercase text-caramel-light mb-4">
              Our Story
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              The Beginning
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Our journey began with a dream and a flight to Italy. We trained under the finest 
                <span className="text-foreground font-medium"> Gelato Masters</span> in the heart of Bologna, 
                learning centuries-old techniques that transform simple ingredients into extraordinary experiences.
              </p>
              
              <p>
                After a year of relentless experimentation, we perfected our craft. Every batch is made with 
                <span className="text-foreground font-medium"> natural, seasonal ingredients</span> sourced 
                from local farmers who share our passion for quality.
              </p>
              
              <p>
                We make our own <span className="text-foreground font-medium">house caramels and nut butters</span> — 
                yes, better than Nutella! Every flavor is created from scratch, ensuring that each scoop 
                delivers an authentic, artisanal experience you won't find anywhere else.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <div>
                <div className="font-heading text-3xl text-primary font-bold">100+</div>
                <div className="text-muted-foreground text-sm mt-1">Unique Flavors</div>
              </div>
              <div>
                <div className="font-heading text-3xl text-primary font-bold">50K+</div>
                <div className="text-muted-foreground text-sm mt-1">Happy Customers</div>
              </div>
              <div>
                <div className="font-heading text-3xl text-primary font-bold">100%</div>
                <div className="text-muted-foreground text-sm mt-1">Natural</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
