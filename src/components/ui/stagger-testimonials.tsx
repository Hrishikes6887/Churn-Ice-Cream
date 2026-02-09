"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Tucked away in between a bustling residential area, this ice cream shop is a gem indeed! We loved the naturally flavoured ice cream that was not sweetened artificially. They have the best seasonal flavours in a cup or waffle form. This was an absolutely guilt-free indulgence.",
    by: "Sally Josephine"
  },
  {
    tempId: 1,
    testimonial: "Must visit cafe for ice cream lovers and sandwich bites. Too yumm and cannot resist without having their delicious and healthy ice cream flavours. Amazed with the number of different flavours of ice cream they have each time I visit Churn Cafe and each one have their original and rich taste.",
    by: "Swetha Krishnan"
  },
  {
    tempId: 2,
    testimonial: "This place serves the best gelato in town. The owner personally churns out all the products and hence the name 'Churn'! The recent addition of food to the menu is a bonus. The hot chocolate is truly to die for and a must have.",
    by: "Siddarth Somarajan"
  },
  {
    tempId: 3,
    testimonial: "Some of the most unique flavours of ice cream I have ever heard. And the taste is incredible. The texture is so creamy you will feel the difference immediately. The quality here is a cut above the rest. A different class altogether.",
    by: "Mohamad Suhaib Abdul Rahman"
  },
  {
    tempId: 4,
    testimonial: "Undoubtedly, one of the best place to have ice cream in Bangalore. It's not ice cream, it's in gelato. One disadvantage is the flavour options are limited, but which flavour is, it's too good. And it's actually affordable also. I love the tender Coconut always.",
    by: "Hitesh R"
  },
  {
    tempId: 5,
    testimonial: "We had a wonderful experience at Churn. The ice creams are all made by the owners within the premises with real fruits. The sandwiches were also very good. Quality and hygeine were top class. Comfortable seating with good ambience. They also sell packaged items like organic dry fruits. We really enjoyed the experience and plan to go again.",
    by: "Srikanth V"
  },
  {
    tempId: 6,
    testimonial: "I visited this friendly neighborhood ice cream parlor. I ordered the Belgian dark chocolate, Salted Caramel and Peanut butter ice cream. The owner was patient enough to explain the process and raw materials. They use quality natural ingredients. I recently tried the Belgian Hot Chocolate which was served in a nice glass bottle. It had the right amount of bitterness. 5/5",
    by: "Yogesh Srinivasa Murthy"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-[#F5F2EC] text-[#3D3127] border-[#D6B25E]" 
          : "z-0 bg-white text-[#3D3127] border-[#E5DED0] hover:border-[#D6B25E]/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -40 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px #E5DED0" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-[#E5DED0]"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <h3 className={cn(
        "text-base sm:text-lg font-light leading-relaxed pb-16 sm:pb-12",
        isCenter ? "text-[#3D3127]" : "text-[#6B5E52]"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 mt-2 text-sm font-medium",
        isCenter ? "text-[#D6B25E]" : "text-[#A18A6F]"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(440);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 440 : 350);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-[#F7F2EC]"
      style={{ height: 520 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-[#E5DED0] hover:bg-[#D6B25E] hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B25E] focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-[#E5DED0] hover:bg-[#D6B25E] hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B25E] focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
