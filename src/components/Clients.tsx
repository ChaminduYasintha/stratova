import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '0px' });

  const fadeRight: any = {
    hidden: { opacity: 0, x: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 10, ease: [0.22, 1, 0.36, 1], delay },
    }),
  };

  return (
    <section id="clients" className="w-full min-h-screen flex flex-col md:flex-row relative overflow-hidden bg-white">
      {/* Left Content - Dark border framing the blue block */}
      <div className="w-full md:w-1/2 bg-stratova-dark p-6 md:p-10 flex flex-col justify-center relative z-10">
        <div className="w-full h-full bg-stratova-blue p-8 md:p-12 lg:p-20 flex flex-col justify-center">
          <div className="max-w-xl mx-auto space-y-8 text-base md:text-lg text-stratova-dark font-medium leading-relaxed">
            <p>
              Our clients are at the heart of everything we do. We
              believe that honesty, transparency, and trust are
              essential to building strong and lasting business
              relationships. At Stratova, we focus on
              understanding our clients' objectives and
              delivering high quality, practical solutions that
              address critical business challenges.
            </p>
            <p>
              Since our establishment, we have been committed
              to supporting our clients with dedication and
              professionalism, helping them achieve meaningful
              results while building long-term partnerships
              based on mutual success.
            </p>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 bg-white pb-8 px-8 md:px-16 pt-16 flex flex-col relative z-10">
        
        {/* Header Block Top Right */}
        <div className="flex flex-col items-end mb-12 w-full">
          <h2 className="text-3xl md:text-5xl font-normal text-stratova-dark mb-[-0.25rem] pr-2">OUR</h2>
          <h2 className="text-6xl md:text-[7rem] font-black text-stratova-dark tracking-tighter leading-none">CLIENTS</h2>
        </div>
        
        {/* Custom SVG Line Art to approximate the illustration */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeRight}
          custom={0.2}
          className="flex-grow flex items-center justify-center w-full max-w-lg mx-auto relative opacity-90 pb-8"
        >
          <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" stroke="#1b8bba" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            {/* Person 1 (Standing Left) */}
            <path d="M 40 100 L 40 70 C 40 60 50 55 60 55 C 65 55 70 60 70 70 L 70 100" />
            <circle cx="55" cy="45" r="8" />
            <path d="M 40 80 L 60 85 L 70 80" />
            
            {/* Person 2 (Sitting Middle) ovelapping laptop */}
            <path d="M 90 120 L 90 90 C 90 85 95 80 100 80 C 105 80 110 85 110 90 L 110 120" />
            <circle cx="100" cy="70" r="7" />
            <path d="M 75 115 L 85 100 L 115 100 L 125 115 Z" />
            
            {/* Person 3 (Standing Right) */}
            <path d="M 130 110 L 130 80 C 130 70 140 65 150 65 C 160 65 170 75 170 85 L 170 120" />
            <circle cx="145" cy="55" r="8" />
            <path d="M 170 85 L 150 90 L 130 85" />
            
            {/* Person 4 (Bottom Left) */}
            <path d="M 15 150 L 15 130 C 15 120 25 115 35 115 C 45 115 50 125 50 135 L 50 150" />
            <circle cx="30" cy="105" r="9" />

            {/* Person 5 (Bottom Right) */}
            <path d="M 140 150 L 140 135 C 140 125 150 120 160 120 C 170 120 180 130 180 145 L 180 150" />
            <circle cx="165" cy="110" r="9" />
          </svg>
        </motion.div>

      </div>
    </section>
  );
};
