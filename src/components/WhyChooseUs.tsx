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
    <section id="why-choose-us" className="w-full bg-stratova-dark py-20 px-8 md:px-16 flex flex-col relative overflow-visible" style={{ zIndex: hoveredIndex !== null ? 50 : 1, position: 'relative' }}>
      <motion.div 
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-normal text-white mb-2">WHY CHOOSE</h2>
        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tight leading-none">STRATOVA</h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, staggerChildren: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-start"
      >
        {reasons.map((reason, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              className="relative h-[120px] md:h-[140px] w-full" // Fixed height wrapper to prevent layout shift
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                animate={{ 
                  scale: isHovered ? 1.2 : 1,
                  zIndex: isHovered ? 50 : 0,
                  y: isHovered ? -10 : 0
                }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 25,
                  opacity: { duration: 0.3 }
                }}
                className={`absolute top-0 left-0 w-full flex flex-col cursor-pointer transition-shadow duration-500 rounded-2xl overflow-hidden ${isHovered ? 'shadow-[0_30px_60px_rgba(0,0,0,0.6)] bg-stratova-dark' : ''}`}
              >
                {/* White title — always visible */}
                <div className={`p-6 flex items-center justify-center min-h-[100px] md:min-h-[120px] transition-colors duration-300 ${isHovered ? 'bg-stratova-blue' : 'bg-white'}`}>
                  <h3 className={`text-sm md:text-base font-bold text-center leading-tight transition-colors duration-300 ${isHovered ? 'text-white' : 'text-stratova-dark'}`}>
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
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ overflow: 'hidden' }}
                  className="bg-stratova-dark"
                >
                  <div className="p-6 md:p-8 border-t border-white/10">
                    <p className="text-white/90 text-xs md:text-sm font-medium leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>


    </section>
  );
};

export default WhyChooseUs;