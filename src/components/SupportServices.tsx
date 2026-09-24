import React from 'react';
import { motion } from 'motion/react';

const supportServices = [
  { num: "01", title: "CERTIFICATION & COMPLIANCES" },
  { num: "02", title: "LEGAL ADVISORY SERVICES" },
  { num: "03", title: "SALES , MARKETING & DISTRIBUTION" },
  { num: "04", title: "COMPANY SECRETARY SERVICES" },
  { num: "06", title: "ACCOUNTING , AUDITING, BOOKKEEPING" },
  { num: "07", title: "HUMAN RESOURCE MANAGMENT" },
  { num: "08", title: "TAXATION SERVICES" },
  { num: "09", title: "VALUATION SERVICES" }
];

export const SupportServices = () => {
  return (
    <section id="support-services" className="w-full relative overflow-hidden bg-white py-20 min-h-[100svh] flex flex-col">
      
      <div className="container mx-auto px-8 md:px-24 relative z-10 flex flex-col flex-grow">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-light text-stratova-blue mb-1 tracking-tight">OUR</h2>
          <h2 className="text-5xl md:text-7xl font-black text-stratova-dark leading-[0.9] tracking-tight">
            Support Services
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-stratova-dark font-medium leading-relaxed max-w-3xl mb-16"
        >
          We assist our clients in accessing and engaging with a
          network of specialised support service providers based on
          their business requirements.
        </motion.p>

        {/* List of Services */}
        <div className="flex flex-col gap-6 max-w-3xl w-fit mx-auto">
          {supportServices.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center relative pl-4 md:pl-6"
            >
              {/* Hexagon */}
              <div className="w-16 h-[74px] md:w-20 md:h-[92px] flex items-center justify-center z-10 shrink-0 relative">
                <svg viewBox="-12 -12 124 139.47" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-full h-full text-stratova-green drop-shadow-md">
                  <path 
                    d="M50 0 L100 28.87 L100 86.6 L50 115.47 L0 86.6 L0 28.87 Z" 
                    fill="currentColor" 
                    stroke="currentColor" 
                    strokeWidth="16" 
                    strokeLinejoin="round" 
                  />
                </svg>
                <div className="w-9 h-9 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center z-10 shadow-sm relative">
                  <span className="text-sm md:text-[15px] font-black text-stratova-dark">{service.num}.</span>
                </div>
              </div>
              
              {/* Text Container with bottom line shadow */}
              <div className="flex items-center pr-8 py-2 w-auto relative -ml-8 pl-12 md:-ml-10 md:pl-16 z-0 min-h-[74px] md:min-h-[92px]">
                <h3 className="text-lg md:text-2xl font-bold text-stratova-dark whitespace-nowrap">
                  {service.title}
                </h3>
                {/* Shadow Line starting from the bottom tip of the hexagon */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gray-200 to-transparent rounded-full shadow-[0_8px_15px_rgba(0,0,0,0.15)]"></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Right Edge Green Squares */}
      <div className="absolute top-40 right-12 flex flex-col gap-8 opacity-80 hidden md:flex">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-4 h-4 bg-stratova-green"></div>
        ))}
      </div>

      {/* Bottom Footer Elements */}
      <div className="container mx-auto mt-24 px-8 md:px-24 flex justify-between items-end relative">
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
