import React from 'react';
import { Logo } from './Logo';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex items-center overflow-hidden bg-white">
      {/* Background Graphics */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Mobile Solid Split Background */}
        <div className="md:hidden absolute bottom-0 left-0 w-full h-[50%] bg-stratova-dark"></div>

        {/* Desktop Dark Blue Diagonal Background */}
        <div className="hidden md:block absolute top-0 right-0 w-[60%] h-[150%] bg-stratova-dark transform origin-top-right -rotate-45 translate-x-[20%] -translate-y-[20%]"></div>
        {/* Desktop White Stripe */}
        <div className="hidden md:block absolute top-0 right-0 w-[60%] h-[150%] border-l-[15px] border-white transform origin-top-right -rotate-45 translate-x-[15%] -translate-y-[20%]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between h-full pt-20 sm:pt-28 md:pt-12 lg:pt-4 xl:pt-12 pb-12 md:pb-0 relative z-10 flex-grow">
        
        {/* Left Typography */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[8rem] font-black text-stratova-dark tracking-tight leading-[0.95] md:leading-[1]">
            STRATOVA<br className="hidden sm:block" /> PRIVATE<br /> LIMITED
          </h1>
        </div>

        {/* Right Graphic */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          {/* Diamond Container */}
          <div className="relative w-[180px] h-[180px] xs:w-[210px] xs:h-[210px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px] xl:w-[380px] xl:h-[380px] 2xl:w-[500px] 2xl:h-[500px] flex items-center justify-center">
            {/* White Inner Diamond holding the Logo */}
            <div className="absolute inset-0 bg-white transform rotate-45 overflow-hidden flex items-center justify-center shadow-xl">
              {/* Un-rotate the content so the Logo stands upright, but gets clipped by diamond edges */}
              <div className="w-[150%] h-[150%] transform -rotate-45 flex items-center justify-center">
                <Logo className="w-[70%] h-[70%] object-contain ml-1 md:ml-2" />
              </div>
            </div>

            {/* Hollow Blue Border sitting ON TOP */}
            <div className="absolute inset-0 border-[8px] sm:border-[12px] md:border-[16px] xl:border-[20px] border-stratova-blue transform rotate-45 z-20 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]"></div>

          </div>
        </div>
      </div>
    </section>
  );
};
