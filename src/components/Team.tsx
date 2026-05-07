import React from 'react';
import { motion } from 'motion/react';

export const Team = () => {
  return (
    <section id="team" className="w-full flex flex-col md:flex-row relative overflow-hidden bg-white">
      {/* Left Content */}
      <div className="w-full md:w-1/2 py-20 md:py-28 pr-8 pl-8 md:pr-16 md:pl-24 flex flex-col justify-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-light text-stratova-dark mb-1"
        >
          OUR
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-6xl md:text-8xl font-black text-stratova-dark tracking-tighter leading-none bg-stratova-blue inline-block px-1 pb-1">
            TEAM
          </h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed max-w-xl"
        >
          Our strength lies in a team of highly qualified professionals with
          diverse expertise in finance, investment advisory, project
          management, and development consulting. Drawing on
          experience in investment banking, capital markets, project
          management and corporate advisory services, our team
          combines strong technical capability with practical industry
          insight. This enables us to deliver tailored, value-driven
          solutions that address complex business challenges while
          supporting our clients' long-term growth and strategic
          ambitions.
        </motion.p>
      </div>


      {/* Right: Diagonal framed illustrations */}
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden pr-0 md:pr-16">
        <motion.div 
          initial={{ opacity: 0, x: 100, rotate: 25 }}
          whileInView={{ opacity: 1, x: 0, rotate: 25 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute flex flex-col items-center justify-center transform scale-75 sm:scale-90 md:scale-110"
        >

          {/* Frame 1 */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-56 h-56 border-[16px] border-stratova-dark shadow-2xl z-0 transform translate-x-12 translate-y-6 bg-white overflow-hidden flex items-center justify-center"
          >
            <svg viewBox="0 0 120 120" className="w-full h-full p-2 transform -rotate-[25deg]" fill="none" stroke="#1b8bba" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="45" cy="40" r="12" />
              <circle cx="75" cy="45" r="10" />
              <path d="M 25 100 C 25 70 65 70 65 100" />
              <path d="M 60 100 C 60 75 95 75 95 100" />
              <rect x="50" y="60" width="30" height="20" rx="2" />
            </svg>
          </motion.div>

          {/* Frame 2 */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-72 h-72 border-[16px] border-stratova-blue shadow-2xl z-10 bg-white overflow-hidden flex items-center justify-center relative"
          >
            <svg viewBox="0 0 140 140" className="w-full h-full p-6 transform -rotate-[25deg]" fill="none" stroke="#1b8bba" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="35" cy="45" r="12" />
              <circle cx="70" cy="40" r="14" />
              <circle cx="105" cy="45" r="12" />
              <path d="M 15 120 C 15 90 55 90 55 120" />
              <path d="M 50 120 C 50 85 90 85 90 120" />
              <path d="M 85 120 C 85 90 125 90 125 120" />
            </svg>
          </motion.div>

          {/* Frame 3 */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-60 h-60 border-[16px] border-stratova-dark shadow-2xl z-20 transform -translate-x-12 -translate-y-6 bg-white overflow-hidden flex items-center justify-center relative"
          >
            <svg viewBox="0 0 120 120" className="w-full h-full p-2 transform -rotate-[25deg]" fill="none" stroke="#1b8bba" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="40" cy="35" r="12" />
              <circle cx="80" cy="45" r="12" />
              <path d="M 15 100 C 15 70 65 70 65 100" />
              <path d="M 60 100 C 60 75 100 75 100 100" />
              <rect x="35" y="65" width="40" height="25" rx="2" strokeWidth="2" />
            </svg>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

