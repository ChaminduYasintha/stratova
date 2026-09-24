import React from 'react';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col bg-white">
      {/* Top Half - White */}
      <div className="relative w-full flex-none h-[40vh] bg-white">
        <div className="container mx-auto h-full relative w-full">
          {/* Left - Green Squares Accent */}
          <div className="absolute bottom-8 left-8 md:left-24 flex gap-8 md:gap-12">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="w-4 h-4 md:w-5 md:h-5 bg-stratova-green"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Half - Dark Blue */}
      <div className="relative w-full flex-1 bg-stratova-dark">
        <div className="container mx-auto h-full flex flex-col justify-center px-8 md:px-24 py-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none mb-4 md:mb-6">
            Stratova
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-none mb-12">
            Private Limited
          </h2>
          
          <div className="mt-4">
            <p className="text-base sm:text-lg md:text-2xl font-medium text-stratova-blue">
              Empowering Visions <span className="text-stratova-green">|</span> Driving Success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

