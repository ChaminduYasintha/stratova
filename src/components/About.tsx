import React from 'react';
import { motion } from 'motion/react';

export const About = () => {

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
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-2">About</h2>
          <div className="bg-stratova-blue inline-block px-3 py-1 -ml-1">
            <h2 className="text-6xl md:text-7xl font-black text-stratova-dark tracking-tight leading-none">
              Company
            </h2>
          </div>
        </motion.div>

        {/* ROW */}
        <div className="flex flex-col lg:flex-row items-start gap-14 lg:gap-20">

          {/* LEFT: paragraphs */}
          <div className="w-full lg:w-1/2 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed font-medium"
            >
              Stratova Private Limited is a bespoke Business consulting firm incorporated in 2026
              with a commitment to delivering innovative and reliable financial solutions. We serve
              a wide spectrum of clients, including small and medium enterprises (SMEs), large
              corporations, institutional investors, high-net-worth individuals and not-for-profit
              organisations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-300 leading-relaxed font-medium"
            >
              Our multidisciplinary team brings together expertise from investment banking, capital
              markets, corporate finance, corporate advisory services. By combining deep industry
              knowledge with practical experience, we provide customised strategies that help
              clients navigate complex financial landscapes, seize emerging opportunities, and
              achieve sustainable growth in today's ever-evolving market.
            </motion.p>
          </div>

          {/* RIGHT: Vision + Mission cards */}
          <div className="w-full lg:w-1/2 grid gap-6" style={{gridTemplateRows: '1fr 1fr'}}>

            {/* Vision card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative bg-gradient-to-br from-stratova-blue to-stratova-blue-dark rounded-3xl shadow-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 cursor-default h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 transform translate-x-8 -translate-y-8 rotate-45 rounded-3xl" />
              <div className="p-8 md:p-10 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-1 bg-white/30 rounded-full" />
                  <h4 className="text-xl md:text-2xl font-black text-white tracking-widest uppercase drop-shadow-md">
                    Vision
                  </h4>
                </div>
                <p
                  className="text-white/95 font-medium leading-relaxed text-base md:text-lg drop-shadow-sm"
                >
                  To be a trusted partner of choice for businesses and investors by delivering
                  innovative financial and strategic solutions that drive sustainable growth, empower
                  entrepreneurship, and create lasting impact in global markets.
                </p>
              </div>
            </motion.div>

            {/* Mission card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative bg-gradient-to-br from-stratova-blue to-stratova-blue-dark rounded-3xl shadow-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 cursor-default h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 transform translate-x-8 -translate-y-8 rotate-45 rounded-3xl" />
              <div className="p-8 md:p-10 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-1 bg-white/30 rounded-full" />
                  <h4 className="text-xl md:text-2xl font-black text-white tracking-widest uppercase drop-shadow-md">
                    Mission
                  </h4>
                </div>
                <p
                  className="text-white/95 font-medium leading-relaxed text-base md:text-lg drop-shadow-sm"
                >
                  To deliver innovative and tailored financial solutions that empower businesses,
                  entrepreneurs, and investors to achieve sustainable growth and long-term success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};