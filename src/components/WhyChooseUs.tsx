import React from 'react';
import { motion } from 'motion/react';

const reasons = [
  {
    title: "Experienced Advisory Team",
    icon: (
      <svg className="w-12 h-12 md:w-16 md:h-16 text-stratova-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Tailored Strategic Solutions",
    icon: (
      <svg className="w-12 h-12 md:w-16 md:h-16 text-stratova-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Integrated Multi-Disciplinary\nExpertise Under One Roof",
    icon: (
      <svg className="w-12 h-12 md:w-16 md:h-16 text-stratova-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Strong Network & Market Access",
    icon: (
      <svg className="w-12 h-12 md:w-16 md:h-16 text-stratova-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    title: "Commitment to Sustainable\nValue Creation",
    icon: (
      <svg className="w-12 h-12 md:w-16 md:h-16 text-stratova-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="w-full flex flex-col relative overflow-hidden bg-white">
      
      {/* Top White Section */}
      <div className="w-full bg-white relative">
        {/* Top Right Green Dots Pattern */}
        <div className="absolute top-12 right-12 md:right-24 grid grid-cols-4 gap-2 opacity-80 z-0">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-stratova-green"></div>
          ))}
        </div>

        <div className="container mx-auto pt-12 md:pt-16 pb-12 px-8 md:px-24 relative">

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-light text-stratova-green mb-1 tracking-tight">WHY CHOOSE</h2>
            <h2 className="text-5xl md:text-7xl font-black text-stratova-dark tracking-tight leading-none">STRATOVA?</h2>
          </motion.div>
        </div>
      </div>

      {/* Bottom Dark Blue Section */}
      <div className="w-full bg-stratova-dark flex-grow flex flex-col items-center">
        <div className="container mx-auto pt-10 pb-16 px-8 md:px-24 flex flex-col items-center">
          <div className="flex flex-col gap-6 md:gap-8 w-fit max-w-4xl mx-auto">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 md:gap-6"
              >
                {/* Icon */}
                <div className="shrink-0 flex items-center justify-center">
                  {reason.icon}
                </div>
                
                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-medium text-white leading-snug whitespace-pre-line">
                    {reason.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination / Footer Element on bottom dark section */}
      <div className="w-full bg-stratova-dark pb-12 px-12 md:px-24 flex justify-between items-center relative">
        <div className="flex-1 flex justify-center gap-4">
          <div className="w-4 h-4 bg-stratova-green"></div>
          <div className="w-4 h-4 bg-stratova-green opacity-50"></div>
          <div className="w-4 h-4 bg-stratova-green opacity-50"></div>
          <div className="w-4 h-4 bg-stratova-green opacity-50"></div>
        </div>

      </div>

    </section>
  );
};