import React, { useState } from 'react';
import { motion } from 'motion/react';

export const CoreValues = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const values = [
    {
      title: 'INTEGRITY',
      icon: <img src="/integrety.png" alt="Integrity" className="w-12 h-12 object-contain opacity-80" />,
      description: 'We uphold the highest standards of honesty, transparency, and ethical conduct in every engagement and decision.'
    },
    {
      title: 'INNOVATION',
      icon: <img src="/inovation.png" alt="Innovation" className="w-12 h-12 object-contain opacity-80" />,
      description: 'We embrace innovative thinking and forward-looking solutions to create strategic value and drive sustainable growth for our clients.'
    },
    {
      title: 'EXCELLENCE',
      icon: <img src="/excelence.png" alt="Excellence" className="w-12 h-12 object-contain opacity-80" />,
      description: 'We are committed to delivering exceptional quality and professional standards in every service we provide.'
    },
    {
      title: 'PARTNERSHIP',
      icon: <img src="/partnership.png" alt="Partnership" className="w-12 h-12 object-contain opacity-80" />,
      description: 'We believe in building trusted, long-term partnerships with clients and stakeholders, working collaboratively to create sustainable value and shared success.'
    },
    {
      title: 'SUSTAINABILITY',
      icon: <img src="/sustainability.png" alt="Sustainability" className="w-12 h-12 object-contain opacity-80" />,
      description: 'We are committed to promoting sustainable business practices that create long-term economic, social, and environmental value.'
    }
  ];

  return (
    <section id="values" className="w-full min-h-screen flex flex-col relative overflow-hidden">
      {/* Top White Section */}
      <div className="w-full bg-white pt-20 pb-40 px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl font-normal text-stratova-dark mb-2">OUR</h2>
        <h2 className="text-6xl md:text-8xl font-black text-stratova-dark tracking-tight">CORE VALUES</h2>
      </div>

      {/* Bottom Dark Blue Section */}
      <div className="w-full flex-grow bg-stratova-dark relative py-20 px-8 md:px-16">

        {/* Diamonds Row */}
        <div className="absolute top-0 left-0 w-full flex justify-center -translate-y-1/2 px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 w-full max-w-7xl">
            {values.map((value, index) => (
              <div key={index} className="flex justify-center">
                <motion.div
                  className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 flex items-center justify-center cursor-pointer"
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                >
                  <div className="absolute inset-0 bg-stratova-blue transform rotate-45 shadow-lg" />
                  <div className="relative z-10 transform scale-75 md:scale-100">
                    {value.icon}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Text Content Row */}
        <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 mt-8 md:mt-16">
          {values.map((value, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                className="text-center flex flex-col items-center px-4"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 cursor-default">
                  {value.title}
                </h3>

                {/* Animated description — expands downward on hover */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    height: isHovered ? 'auto' : 0,
                    y: isHovered ? 0 : -10,
                  }}
                  transition={{ type: 'spring', stiffness: 200, damping: 26 }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed pb-2">
                    {value.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
