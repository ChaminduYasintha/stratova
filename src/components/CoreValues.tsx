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
    <section id="values" className="w-full flex flex-col relative overflow-visible" style={{ zIndex: hoveredIndex !== null ? 50 : 1, position: 'relative' }}>
      {/* Top White Section */}
      <div className="w-full bg-white pt-20 md:pt-28 pb-60 md:pb-40 px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-normal text-stratova-dark mb-2">OUR</h2>
          <h2 className="text-6xl md:text-8xl font-black text-stratova-dark tracking-tight">CORE VALUES</h2>
        </motion.div>
      </div>

      {/* Bottom Dark Blue Section */}
      <div className="w-full flex-grow bg-stratova-dark relative py-20 md:py-28 px-8 md:px-16">

        {/* Diamonds Row — high z-index so icons are always above hover cards */}
        <div className="absolute top-0 left-0 w-full flex justify-center -translate-y-1/2 px-4" style={{ zIndex: 30 }}>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="flex flex-wrap justify-center gap-6 md:gap-0 w-full max-w-7xl md:grid md:grid-cols-5"
          >
            {values.map((value, index) => (
              <div key={index} className="flex justify-center w-[40%] md:w-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 flex items-center justify-center cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.08 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-stratova-blue to-stratova-blue-dark transform rotate-45 rounded-2xl shadow-[0_10px_30px_rgba(27,139,186,0.3)] transition-all duration-300" />
                  <div className="relative z-10 transform scale-75 md:scale-100">
                    {value.icon}
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Text Content Row */}
        <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 md:gap-4 mt-32 md:mt-16 relative">
          {values.map((value, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div 
                key={index} 
                className="relative h-[100px] xs:h-[120px] md:h-[100px]" // Stable wrapper
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  animate={{
                    scale: isHovered ? 1.08 : 1,
                    zIndex: isHovered ? 10 : 0,
                    y: isHovered ? 8 : 0,
                  }}
                  viewport={{ once: false }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 25 
                  }}
                  className={`absolute top-0 left-0 w-full text-center flex flex-col items-center px-6 py-8 rounded-2xl transition-shadow duration-300 ${isHovered ? 'bg-stratova-dark/90 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10' : ''}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 cursor-default uppercase tracking-wide">
                    {value.title}
                  </h3>

                  {/* Animated description — expands downward on hover */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      height: isHovered ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
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
