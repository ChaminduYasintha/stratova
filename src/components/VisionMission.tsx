import React from 'react';
import { motion } from 'motion/react';

export const VisionMission = () => {
  return (
    <section id="vision" className="w-full min-h-[100svh] relative overflow-x-hidden overflow-y-visible bg-stratova-dark pt-16 pb-32 md:py-16 flex flex-col">

      {/* Top Right Green Dots Pattern */}
      <div className="absolute top-12 right-12 md:right-24 grid grid-cols-4 gap-2 opacity-80 z-0">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-3 h-3 bg-stratova-green"></div>
        ))}
      </div>

      <div className="container mx-auto px-8 md:px-24 relative z-10 flex flex-col flex-grow mt-8 md:mt-24">

        {/* Top Section with Title and Icon Watermark */}
        <div className="relative mb-12 md:mb-32 flex w-full">
          <div className="relative inline-flex flex-col w-full md:w-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col relative z-10 w-full md:w-auto"
            >
              <span className="text-2xl sm:text-3xl md:text-5xl font-normal text-stratova-green tracking-tight w-full">OUR</span>
              <h2 className="text-4xl sm:text-5xl md:text-[80px] font-black text-white leading-[1.1] md:leading-[0.9] tracking-tight flex flex-wrap items-center gap-x-2 md:gap-x-5">
                <span>VISION</span>
                <span className="text-stratova-green font-light">|</span> 
                <span>MISSION</span>
              </h2>
            </motion.div>

            {/* Line art icon watermarked behind text, pinned to the text itself */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="hidden md:block absolute top-[60%] -translate-y-[50%] left-[50%] lg:left-[65%] w-[32rem] h-[32rem] md:w-[45rem] md:h-[45rem] lg:w-[55rem] lg:h-[55rem] opacity-30 -z-10 pointer-events-none"
            >
              <img src="/vision_mission.png" alt="Vision and Mission Icon" className="w-full h-full object-contain scale-110 lg:scale-100" />
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-10 md:gap-16 max-w-4xl mx-auto mb-12 md:mb-24 w-full">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-stratova-blue mb-3 md:mb-4">VISION</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 font-medium leading-relaxed max-w-3xl">
              To be a trusted partner of choice for businesses
              and investors by delivering innovative financial and
              strategic solutions that drive sustainable growth,
              empower entrepreneurship, and create lasting
              impact in global markets.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-stratova-blue mb-3 md:mb-4">MISSION</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 font-medium leading-relaxed max-w-3xl">
              To deliver innovative and tailored financial solutions
              that empower businesses, entrepreneurs, and investors
              to achieve sustainable growth and long-term success.
            </p>
          </motion.div>
        </div>

      </div>

      {/* Bottom Footer Elements */}
      <div className="absolute bottom-8 md:bottom-12 left-6 md:left-24 right-6 md:right-24 flex justify-between items-end">
        {/* Bottom Left Green Dots Pattern (10x4 grid) */}
        <div className="grid grid-cols-10 gap-1.5 md:gap-3 opacity-80">
          {[...Array(40)].map((_, i) => (
            <div key={i} className="w-2 h-2 md:w-3 md:h-3 bg-stratova-green"></div>
          ))}
        </div>
      </div>

    </section>
  );
};
