import React from 'react';
import { motion, useInView } from 'motion/react';

export const Partnerships = () => {
  const cardVariants: any = {
    hidden: { opacity: 0, scale: 0.72, y: 40 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 22,
      },
    },
  };

  return (
    <section id="partnerships" className="w-full min-h-screen flex flex-col relative overflow-hidden bg-white">
      {/* Top White Section */}
      <div className="w-full min-h-[40vh] md:min-h-[50vh] bg-white pt-24 pb-48 md:pb-64 px-8 md:px-24 flex flex-col justify-start">
        <h2 className="text-4xl md:text-5xl font-light text-stratova-dark mb-1 ml-1 md:ml-3">OUR</h2>
        <h2 className="text-5xl md:text-[6.5rem] lg:text-[7.5rem] font-black text-stratova-dark leading-none">PARTNERSHIPS</h2>
      </div>

      {/* Bottom Light Blue Section */}
      <div className="w-full min-h-[30vh] md:min-h-[50vh] bg-stratova-blue relative flex-grow">
        
        {/* Logos Container positioned across the horizon */}
        <div className="absolute top-0 left-0 w-full flex justify-center -translate-y-1/2 px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full">
            
            {/* Partner 1: CIMA */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.04, y: -6 }}
              whileTap={{ scale: 0.97 }}
              className="w-full max-w-[280px] md:max-w-[440px] aspect-[16/10] bg-white border-[14px] border-[#0a1128] flex items-center justify-center p-6 md:p-10 shadow-2xl relative"
            >
              <img
                src="/partner1.png"
                alt="CIMA Training Partner"
                className="w-full h-full object-contain relative z-10"
              />
            </motion.div>

            {/* Partner 2: Confluence */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.04, y: -6 }}
              whileTap={{ scale: 0.97 }}
              className="w-full max-w-[280px] md:max-w-[440px] aspect-[16/10] bg-[#456a96] border-[14px] border-[#0a1128] flex items-center justify-center p-6 md:p-10 shadow-2xl relative"
            >
              <img
                src="/partner2.png"
                alt="Confluence Capital"
                className="w-full h-full object-contain relative z-10"
              />
            </motion.div>

          </div>
        </div>
        
      </div>
    </section>
  );
};
