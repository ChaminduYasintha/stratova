import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '0px' });

  const fadeLeft: any = {
    hidden: { opacity: 0, x: -40 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 10, ease: [0.22, 1, 0.36, 1], delay },
    }),
  };

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-stratova-dark py-20 md:py-28"
    >
      {/* Background accent */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[150%] bg-stratova-blue opacity-10 transform origin-top-right -rotate-45 translate-x-[20%] -translate-y-[20%]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-stratova-blue opacity-5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">

        {/* Heading — slides from left, fades out when scrolled away */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-2">About</h2>
          <div className="bg-stratova-blue inline-block px-3 py-1 -ml-1">
            <h2 className="text-6xl md:text-7xl font-black text-stratova-dark tracking-tight leading-none">
              Company
            </h2>
          </div>
        </div>

        {/* ROW */}
        <div className="flex flex-col lg:flex-row items-start gap-14 lg:gap-20">

          {/* LEFT: paragraphs */}
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeLeft}
            custom={0.2}
            className="w-full lg:w-1/2 space-y-6"
          >
            <p
              className="text-lg text-gray-300 leading-relaxed font-medium"
            >
              Stratova Private Limited is a bespoke Business consulting firm incorporated in 2026
              with a commitment to delivering innovative and reliable financial solutions. We serve
              a wide spectrum of clients, including small and medium enterprises (SMEs), large
              corporations, institutional investors, high-net-worth individuals and not-for-profit
              organisations.
            </p>

            <p
              className="text-lg text-gray-300 leading-relaxed font-medium"
            >
              Our multidisciplinary team brings together expertise from investment banking, capital
              markets, corporate finance, corporate advisory services. By combining deep industry
              knowledge with practical experience, we provide customised strategies that help
              clients navigate complex financial landscapes, seize emerging opportunities, and
              achieve sustainable growth in today's ever-evolving market.
            </p>
          </motion.div>

          {/* RIGHT: Vision + Mission cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">

            {/* Vision card */}
            <div
              className="relative bg-stratova-blue rounded-sm overflow-hidden group cursor-default"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 transform translate-x-4 -translate-y-4 rotate-45" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="text-xl font-black text-stratova-dark tracking-widest uppercase">
                    Vision
                  </h4>
                </div>
                <p
                  className="text-stratova-dark font-medium leading-relaxed text-base md:text-lg"
                >
                  To be a trusted partner of choice for businesses and investors by delivering
                  innovative financial and strategic solutions that drive sustainable growth, empower
                  entrepreneurship, and create lasting impact in global markets.
                </p>
              </div>
            </div>

            {/* Mission card */}
            <div
              className="relative bg-stratova-blue rounded-sm overflow-hidden group cursor-default"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 transform translate-x-4 -translate-y-4 rotate-45" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="text-xl font-black text-stratova-dark tracking-widest uppercase">
                    Mission
                  </h4>
                </div>
                <p
                  className="text-stratova-dark font-medium leading-relaxed text-base md:text-lg"
                >
                  To deliver innovative and tailored financial solutions that empower businesses,
                  entrepreneurs, and investors to achieve sustainable growth and long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};