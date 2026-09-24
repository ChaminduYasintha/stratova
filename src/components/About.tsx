import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-[100svh] bg-white overflow-hidden flex flex-col py-16"
    >
      {/* Top Right Green Dots Pattern */}
      <div className="absolute top-0 right-0 grid grid-cols-4 gap-3 p-8 opacity-80">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-3 h-3 bg-stratova-green"></div>
        ))}
      </div>

      <div className="container mx-auto px-8 md:px-24 relative z-10 flex flex-col flex-grow pb-16 md:pb-24">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-[3.5rem] font-light text-stratova-blue leading-none tracking-tight mb-1">
            ABOUT
          </h2>
          <h2 className="text-5xl md:text-[5rem] font-black text-stratova-dark leading-none tracking-tight -mt-2 mb-8">
            COMPANY
          </h2>

          {/* Three green dots */}
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-stratova-green"></div>
            <div className="w-4 h-4 bg-stratova-green"></div>
            <div className="w-4 h-4 bg-stratova-green"></div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="w-full xl:w-11/12 space-y-6 pr-0 md:pr-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-stratova-dark leading-relaxed font-medium"
          >
            Stratova Private Limited is a bespoke Multinational Business Consulting
            Firm incorporated in 2025 with a commitement to delivering innovative
            and reliable financial solutions. We serve a wide spectrum of clients,
            including small and medium enterprises (SMEs), large corporations,
            institutional investors, high-net-worth individuals and not-for-profit
            organisations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-stratova-dark leading-relaxed font-medium"
          >
            Our multidisciplinary team brings together expertise from investment in
            private equity and debt, business advisory service, restructing of
            distress companies and taliored trainings. By combining deep industry
            knowledge with practical experience, we provide customised strategies
            that help clients navigate complex financial landscapes, seize
            emerging opportunities, and achieve sustainable growth in today's
            ever evolving market.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-stratova-dark leading-relaxed font-medium pt-4"
          >
            Stratova has its own subsidiary : StratovaX Global in Malaysia and also
            business partnerships in Austrailia, UAE and Singapore.
          </motion.p>
        </div>

      </div>

      {/* Bottom Footer Elements */}
      <div className="absolute bottom-4 left-12 md:left-24 right-12 md:right-24 flex justify-between items-end">
        {/* Bottom Left Green Dots Pattern */}
        <div className="grid grid-cols-10 gap-4 opacity-80 pb-2">
          {[...Array(40)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-stratova-green"></div>
          ))}
        </div>
        

      </div>

    </section>
  );
};