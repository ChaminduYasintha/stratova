import React from 'react';

export const VisionMission = () => {
  return (
    <section id="vision" className="w-full flex flex-col md:flex-row relative overflow-hidden bg-white">

      {/* Background Split: 50/50 */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-white"></div>
        <div className="w-full md:w-1/2 bg-[#0a0e1a]"></div>
      </div>

      <div className="w-full relative z-10 flex flex-col md:flex-row items-stretch">

        {/* Left Side: Text and Icon */}
        {/* We use z-20 to ensure this stays "on top" of the blue boxes */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 md:pl-24 md:pr-0 py-20 md:py-28 z-20">
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-light text-black tracking-tight">OUR</span>
            <h2 className="text-6xl md:text-8xl font-black text-black leading-[0.85] tracking-tighter">
              VISION
            </h2>
            <h2 className="text-6xl md:text-8xl font-black text-black leading-[0.85] tracking-tighter">
              MISSION
            </h2>
          </div>

          <div className="mt-12 w-40 h-40 md:w-48 md:h-48">
            <img
              src="/vision&mission.png"
              alt="Vision and Mission Icon"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right Side: Blue Boxes */}
        {/* md:-ml-20 pulls this section left, causing the MISSION text to overlap it */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 py-20 md:py-28 md:-ml-20 z-10">

          {/* Vision Box */}
          <div className="bg-[#218dbb] p-10 md:p-14 shadow-xl flex-1 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-black text-[#0a0e1a] mb-4">VISION</h3>
            <p className="text-base md:text-lg text-[#0a0e1a] font-medium leading-relaxed max-w-xl">
              To be a trusted partner of choice for businesses and
              investors by delivering innovative financial and strategic
              solutions that drive sustainable growth, empower
              entrepreneurship, and create lasting impact in global
              markets.
            </p>
          </div>

          {/* Mission Box */}
          <div className="bg-[#218dbb] p-10 md:p-14 shadow-xl flex-1 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-black text-[#0a0e1a] mb-4">MISSION</h3>
            <p className="text-base md:text-lg text-[#0a0e1a] font-medium leading-relaxed max-w-xl">
              To deliver innovative and tailored financial solutions that
              empower businesses, entrepreneurs, and investors to
              achieve sustainable growth and long-term success.
            </p>
          </div>

        </div>
      </div>


    </section>
  );
};