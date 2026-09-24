import React from 'react';
import { motion } from 'motion/react';

export const CoreValues = () => {
  const values = [
    {
      title: 'INTEGRITY',
      icon: <img src="/intergrity.png" alt="Integrity" className="w-12 h-12 md:w-16 md:h-16 object-contain brightness-0 invert" />,
      description: 'We uphold the highest standards of honesty, transparency, and ethical conduct in every engagement.'
    },
    {
      title: 'INNOVATION',
      icon: <img src="/inovation.png" alt="Innovation" className="w-12 h-12 md:w-16 md:h-16 object-contain brightness-0 invert" />,
      description: 'We embrace innovation to create strategic value and sustainable growth.'
    },
    {
      title: 'EXCELLENCE',
      icon: <img src="/excelence.png" alt="Excellence" className="w-12 h-12 md:w-16 md:h-16 object-contain brightness-0 invert" />,
      description: 'We are committed to delivering exceptional quality and professional standards in every service we provide.'
    },
    {
      title: 'PARTNERSHIP',
      icon: <img src="/partnership.png" alt="Partnership" className="w-12 h-12 md:w-16 md:h-16 object-contain brightness-0 invert" />,
      description: 'We believe in building trusted, long-term partnerships to create sustainable value and shared success.'
    },
    {
      title: 'SUSTAINABILITY',
      icon: <img src="/sustainability.png" alt="Sustainability" className="w-12 h-12 md:w-16 md:h-16 object-contain brightness-0 invert" />,
      description: 'We are committed to promoting sustainable practices to create economic, social, and environmental value.'
    }
  ];

  return (
    <section id="values" className="w-full relative overflow-hidden bg-white py-20 flex flex-col items-center">
      
      {/* Top Right Green Dots Pattern */}
      <div className="absolute top-12 right-12 md:right-24 grid grid-cols-4 gap-2 opacity-80">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-3 h-3 bg-stratova-green"></div>
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col items-start w-full max-w-5xl relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-stratova-green mb-1 tracking-tight">OUR</h2>
          <h2 className="text-5xl md:text-7xl font-black text-stratova-dark leading-[0.9] tracking-tight uppercase">
            CORE VALUES
          </h2>
        </motion.div>

        {/* Values List */}
        <div className="flex flex-col gap-5 md:gap-7 w-full max-w-[65rem] md:pl-2">
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
              <div className="flex flex-1 rounded-[40px] md:rounded-[50px] overflow-hidden bg-[#dcebf2] shadow-sm relative z-10 h-full">
                {/* Left Dark Blue Icon Container */}
                <div className="bg-stratova-dark w-24 md:w-32 flex items-center justify-center shrink-0 py-6 md:py-8">
                  {value.icon}
                </div>
                
                {/* Right Light Blue Text Container */}
                <div className="flex flex-col justify-center py-5 px-6 md:py-6 md:px-8 z-10 flex-grow">
                  <h3 className="text-lg md:text-xl font-black text-stratova-dark mb-1 md:mb-1.5">{value.title}</h3>
                  <p className="text-[13px] md:text-[15px] text-stratova-dark font-medium leading-snug md:leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>

              {/* Connecting Dotted Line with hollow dot */}
              <div className="flex items-center relative z-20 shrink-0">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border-[2.5px] border-stratova-dark bg-[#dcebf2] absolute left-0 -translate-x-1/2"></div>
                <div className="w-8 md:w-16 border-t-[2.5px] border-dotted border-stratova-dark"></div>
              </div>

              {/* Number Circle */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#cbdcaa] flex items-center justify-center shrink-0 z-10 shadow-sm border border-[#bdd09b]">
                <span className="text-xl md:text-2xl font-black text-stratova-dark">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Bottom Footer Elements */}
      <div className="container mx-auto mt-24 px-8 md:px-24 flex justify-center items-end relative">
        
        {/* Bottom Center Green Dots */}
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-4 pb-8">
          <div className="w-4 h-4 bg-stratova-green"></div>
          <div className="w-4 h-4 bg-stratova-green opacity-50"></div>
          <div className="w-4 h-4 bg-stratova-green opacity-50"></div>
          <div className="w-4 h-4 bg-stratova-green opacity-50"></div>
        </div>
      </div>

    </section>
  );
};

