import { StaggerTestimonials } from '@/components/ui/stagger-testimonials';

const Reviews = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F7F2EC]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#A18A6F] mb-4 font-light">
            WHAT OUR CUSTOMERS SAY
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#3D3127] mb-6 tracking-tight font-medium">
            Client <span className="text-[#D6B25E]">Thinks</span>
          </h2>
        </div>

        {/* Testimonials Component */}
        <StaggerTestimonials />
      </div>
    </section>
  );
};

export default Reviews;
