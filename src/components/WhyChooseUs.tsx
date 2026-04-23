import React, { useState } from 'react';
import { motion } from 'motion/react';

export const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const reasons = [
    {
      title: "CLIENT CENTRED",
      description: "Stratova places the clients at the heart of every engagement, delivering tailored solutions aligned with their unique goals and long-term success."
    },
    {
      title: "EXPERTISE & EXPERIENCE",
      description: "Stratova combines deep industry knowledge with extensive professional experience to deliver practical, high-impact solutions for complex business challenges"
    },
    {
      title: "TAILORED SOLUTIONS",
      description: "Stratova delivers customised strategies and advisory solutions designed to address each client's specific business needs and growth objectives"
    },
    {
      title: "INTEGRITY & TRUST",
      description: "Stratova builds lasting client relationships through transparency, ethical practices, and a strong commitment to trust."
    },
    {
      title: "SUSTAINABLE IMPACT",
      description: "Stratova focuses on creating long-term economic and social value by supporting responsible, sustainable business growth."
    }
  ];

  return (
    <section id="why-choose-us" className="w-full bg-stratova-dark py-20 px-8 md:px-16 flex flex-col relative">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-normal text-white mb-2">WHY CHOOSE</h2>
        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tight leading-none">STRATOVA</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 items-start">
        {reasons.map((reason, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={index}
              className="flex flex-col cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* White title — always visible */}
              <div className="bg-white p-6 flex items-center justify-center min-h-[100px] md:min-h-[120px]">
                <h3 className="text-xl md:text-2xl font-bold text-stratova-dark text-center leading-tight">
                  {reason.title}
                </h3>
              </div>

              {/* Blue body — hidden until hover */}
              <motion.div
                initial={false}
                animate={{
                  height: isHovered ? 'auto' : 0,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 26 }}
                style={{ overflow: 'hidden' }}
                className="bg-stratova-blue"
              >
                <div className="p-6 md:p-8">
                  <p className="text-white text-base md:text-lg font-medium leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;