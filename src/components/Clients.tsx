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
          <div className="max-w-xl mx-auto text-base md:text-lg text-stratova-dark font-medium leading-relaxed">
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

        {/* Client Images */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeRight}
          custom={0.2}
          className="flex-grow flex flex-col items-center justify-center w-full max-w-2xl gap-10 mx-auto relative pb-8 mt-8"
        >
          <img src="/ourclient1.png" alt="Our Client 1" className="w-full h-auto object-contain drop-shadow-md rounded-lg" />
          <img src="/ourclient2.png" alt="Our Client 2" className="w-full h-auto object-contain drop-shadow-md rounded-lg" />
        </motion.div>

      </div>
    </section>
  );
};
