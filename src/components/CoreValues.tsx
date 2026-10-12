import React from 'react';
import { motion } from 'motion/react';

export const CoreValues = () => {
  const values = [
    {
      title: 'INTEGRITY',
      icon: <img src="/intergrity.png" alt="Integrity" className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain brightness-0 invert" />,
      description: 'We uphold the highest standards of honesty, transparency, and ethical conduct in every engagement.'
    },
    {
      title: 'INNOVATION',
      icon: <img src="/inovation.png" alt="Innovation" className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain brightness-0 invert" />,
      description: 'We embrace innovation to create strategic value and sustainable growth.'
    },
    {
      title: 'EXCELLENCE',
      icon: <img src="/excelence.png" alt="Excellence" className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain brightness-0 invert" />,
      description: 'We are committed to delivering exceptional quality and professional standards in every service we provide.'
    },
    {
      title: 'PARTNERSHIP',
      icon: <img src="/partnership.png" alt="Partnership" className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain brightness-0 invert" />,
      description: 'We believe in building trusted, long-term partnerships to create sustainable value and shared success.'
    },
    {
      title: 'SUSTAINABILITY',
      icon: <img src="/sustainability.png" alt="Sustainability" className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain brightness-0 invert" />,
      description: 'We are committed to promoting sustainable practices to create economic, social, and environmental value.'
    }
  ];

  return (
    <section id="values" className="w-full relative overflow-hidden bg-white pt-16 sm:pt-20 pb-8 flex flex-col">

      {/* Top Right Green Dots Pattern */}
      <div className="absolute top-12 right-12 md:right-24 grid grid-cols-4 gap-2 opacity-80 hidden md:grid">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-3 h-3 bg-stratova-green"></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-stratova-green mb-1 tracking-tight">OUR</h2>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-stratova-dark leading-[0.95] md:leading-[0.9] tracking-tight uppercase">
            CORE VALUES
          </h2>
        </motion.div>

        {/* Values List */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-7 w-full max-w-[65rem] mx-auto md:pl-2">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center w-full relative"
            >
              {/* Main Pill */}
              <div className="flex flex-1 min-w-0 rounded-[24px] sm:rounded-[36px] md:rounded-[50px] overflow-hidden bg-[#dcebf2] shadow-sm relative z-10">
                {/* Left Dark Blue Icon Container */}
                <div className="bg-stratova-dark w-16 sm:w-20 md:w-28 lg:w-32 flex items-center justify-center shrink-0 py-4 sm:py-6 md:py-8 self-stretch">
                  {value.icon}
                </div>

                {/* Right Light Blue Text Container */}
                <div className="flex flex-col justify-center py-3.5 px-3.5 sm:py-5 sm:px-5 md:py-6 md:px-8 z-10 flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-stratova-dark mb-0.5 sm:mb-1 md:mb-1.5 uppercase tracking-wide">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] md:text-[14px] lg:text-[15px] text-stratova-dark font-medium leading-relaxed sm:leading-snug md:leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>

              {/* Connecting Dotted Line with hollow dot */}
              <div className="flex items-center relative z-20 shrink-0">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full border-[2px] md:border-[2.5px] border-stratova-dark bg-[#dcebf2] absolute left-0 -translate-x-1/2"></div>
                <div className="w-2.5 sm:w-5 md:w-10 lg:w-16 border-t-[2px] md:border-t-[2.5px] border-dotted border-stratova-dark"></div>
              </div>

              {/* Number Circle */}
              <div className="w-9 h-9 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-[#cbdcaa] flex items-center justify-center shrink-0 z-10 shadow-sm border border-[#bdd09b]">
                <span className="text-xs sm:text-base md:text-xl lg:text-2xl font-black text-stratova-dark">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Footer Elements */}
      <div className="w-full mt-10 sm:mt-12 pb-8 px-4 sm:px-12 md:px-24 flex justify-center items-center relative max-w-7xl mx-auto">
        <div className="flex-1 flex justify-center gap-3 sm:gap-4">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-stratova-green"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-stratova-green opacity-50"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-stratova-green opacity-50"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-stratova-green opacity-50"></div>
        </div>
      </div>

    </section>
  );
};

