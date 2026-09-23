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
      
      <div className="container mx-auto px-6 md:px-24 relative z-10 flex flex-col flex-grow">
        
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
              className="flex items-center relative pl-8 md:pl-10"
            >
              {/* Hexagon */}
              <div className="absolute left-0 w-16 h-16 md:w-20 md:h-20 bg-stratova-green flex items-center justify-center z-10" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-sm md:text-base font-black text-stratova-dark">{service.num}.</span>
                </div>
              </div>
              
              {/* White Box */}
              <div className="bg-white rounded-r-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center pr-8 pl-12 md:pl-16 py-2 min-h-[64px] md:min-h-[80px] w-auto min-w-[280px] md:min-w-[400px]">
                <h3 className="text-sm md:text-base font-bold text-stratova-dark whitespace-nowrap">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Right Edge Green Squares */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 flex flex-col gap-8 opacity-80 hidden md:flex">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-4 h-4 bg-stratova-green"></div>
        ))}
      </div>

      {/* Bottom Footer Elements */}
      <div className="w-full mt-24 px-12 md:px-24 flex justify-end items-end relative max-w-7xl mx-auto">

      </div>

    </section>
  );
};
