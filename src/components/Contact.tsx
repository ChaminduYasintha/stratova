import React from 'react';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact = () => {
  return (
    <section id="contact" className="w-full flex flex-col relative overflow-hidden bg-white min-h-[100svh]">
      
      {/* Top Header Section (Dark Blue) */}
      <div className="w-full bg-stratova-dark pt-20 md:pt-32 pb-16 px-12 md:px-24 relative">
        {/* Top Right Green Dots Pattern */}
        <div className="absolute top-12 right-12 md:right-24 grid grid-cols-4 gap-2 opacity-80 z-0">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-stratova-green"></div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-light text-stratova-blue mb-1 tracking-tight">GET</h2>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-8">IN TOUCH</h2>
          
          {/* Three green dots */}
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-stratova-green"></div>
            <div className="w-4 h-4 bg-stratova-green"></div>
            <div className="w-4 h-4 bg-stratova-green"></div>
          </div>
        </motion.div>
      </div>

      {/* Main Content (White) */}
      <div className="w-full bg-white pt-16 pb-24 px-12 md:px-24 flex-grow relative flex flex-col">
        
        <div className="max-w-4xl space-y-8 mb-16">
          <p className="text-lg md:text-xl text-stratova-dark font-medium leading-relaxed">
            Partner with Stratova to unlock strategic opportunities and sustainable growth.
          </p>
          <p className="text-lg md:text-xl text-stratova-dark font-medium leading-relaxed">
            Connect with our team to explore bespoke advisory solutions, investment
            opportunities, and strategic partnerships designed to deliver measurable
            results for your company.
          </p>
        </div>

        <div className="flex flex-col gap-10 items-center w-full">
          <h3 className="text-3xl md:text-4xl font-black text-stratova-dark italic mb-2 text-center">CONTACT US</h3>
          
          <div className="flex flex-col gap-6 md:gap-8 w-full">
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <div className="w-12 h-12 rounded-full bg-stratova-dark flex items-center justify-center text-white shrink-0 shadow-md">
                <Phone size={24} fill="currentColor" />
              </div>
              <span className="text-xl md:text-2xl font-medium text-stratova-dark">+94 077 611 0005</span>
            </div>
            
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <div className="w-12 h-12 rounded-full bg-stratova-dark flex items-center justify-center text-white shrink-0 shadow-md">
                <Globe size={24} />
              </div>
              <span className="text-xl md:text-2xl font-medium text-stratova-dark">www.stratova.lk</span>
            </div>
            
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <div className="w-12 h-12 rounded-full bg-stratova-dark flex items-center justify-center text-white shrink-0 shadow-md">
                <Mail size={24} />
              </div>
              <span className="text-xl md:text-2xl font-medium text-stratova-dark">office@stratova.lk</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center md:text-left">
              <div className="w-12 h-12 rounded-full bg-stratova-dark flex items-center justify-center text-white shrink-0 shadow-md">
                <MapPin size={24} />
              </div>
              <span className="text-xl md:text-2xl font-medium text-stratova-dark">78, Havelock Road, Colombo 00500, Sri Lanka</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer Elements */}
      <div className="w-full pb-12 px-12 md:px-24 flex justify-between items-end relative max-w-7xl mx-auto z-10">
        {/* Bottom Left Green Dots Pattern */}
        <div className="flex gap-4 opacity-80">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-stratova-green"></div>
          ))}
        </div>
        

      </div>

    </section>
  );
};

