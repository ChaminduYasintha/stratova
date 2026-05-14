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
      <div className="w-full md:w-1/2 relative min-h-[600px] md:min-h-[800px] flex items-center justify-center pr-0 md:pr-16">
        <motion.div 
          initial={{ opacity: 0, x: 100, rotate: 25 }}
          whileInView={{ opacity: 1, x: 0, rotate: 25 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute flex flex-col items-center justify-center transform scale-75 sm:scale-90 md:scale-100 mt-12 md:mt-0"
        >

          {/* Frame 1 */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-56 h-56 border-[16px] border-stratova-dark shadow-2xl z-0 transform translate-x-12 translate-y-6 bg-white overflow-hidden flex items-center justify-center"
          >
            <img src="/ourteam1.png" alt="Our Team 1" className="w-full h-full object-cover transform -rotate-[25deg] scale-[1.4]" />
          </motion.div>

          {/* Frame 2 */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-72 h-72 border-[16px] border-stratova-blue shadow-2xl z-10 bg-white overflow-hidden flex items-center justify-center relative"
          >
            <img src="/ourteam2.png" alt="Our Team 2" className="w-full h-full object-cover transform -rotate-[25deg] scale-[1.4]" />
          </motion.div>

          {/* Frame 3 */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-60 h-60 border-[16px] border-stratova-dark shadow-2xl z-20 transform -translate-x-12 -translate-y-6 bg-white overflow-hidden flex items-center justify-center relative"
          >
            <img src="/ourteam3.png" alt="Our Team 3" className="w-full h-full object-cover transform -rotate-[25deg] scale-[1.4]" />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

