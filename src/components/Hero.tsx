import React from 'react';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-0 md:min-h-[100svh] flex flex-col bg-stratova-dark">
      {/* Dark Blue Hero Section */}
      <div className="relative w-full flex-1 flex flex-col overflow-hidden">
        {/* Right Side Graphics - Growth Chart Style */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
          <svg
            className="absolute right-0 top-0 h-full w-full"
            viewBox="0 0 1100 700"
            preserveAspectRatio="xMaxYMax slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Main line gradient - fades in from transparent */}
              <linearGradient id="line-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3ab3e8" stopOpacity="0.0" />
                <stop offset="35%" stopColor="#3ab3e8" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#3ab3e8" stopOpacity="1" />
              </linearGradient>
              {/* Secondary thinner line gradient */}
              <linearGradient id="line-grad2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3ab3e8" stopOpacity="0.0" />
                <stop offset="50%" stopColor="#3ab3e8" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#3ab3e8" stopOpacity="0.45" />
              </linearGradient>
              {/* Background fill gradients */}
              <linearGradient id="bg-fill-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#102a42" stopOpacity="0" />
                <stop offset="100%" stopColor="#1a4a6e" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="bg-fill-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0d2035" stopOpacity="0" />
                <stop offset="100%" stopColor="#1a4a6e" stopOpacity="0.55" />
              </linearGradient>
              {/* Blue dot glow filter */}
              <filter id="blue-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feFlood floodColor="#3ab3e8" floodOpacity="0.9" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Green dot glow filter */}
              <filter id="green-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feFlood floodColor="#83b620" floodOpacity="0.9" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Layered background fills - angular dark wedges on the right */}
            <path d="M 650 700 L 780 560 L 920 380 L 1100 180 L 1100 700 Z" fill="url(#bg-fill-1)" />
            <path d="M 720 700 L 850 600 L 980 470 L 1100 320 L 1100 700 Z" fill="url(#bg-fill-2)" />
            <path d="M 820 700 L 940 640 L 1060 560 L 1100 520 L 1100 700 Z" fill="#060d1a" opacity="0.6" />

            {/* Secondary thin parallel line */}
            <path
              d="M 480 760 C 560 750 680 680 780 570 C 870 470 950 280 1060 100"
              fill="none"
              stroke="url(#line-grad2)"
              strokeWidth="1.2"
            />

            {/* Main growth chart line - gentle start, steep climb to top-right */}
            <path
              d="M 450 780 C 530 770 650 700 750 580 C 850 460 940 250 1050 80"
              fill="none"
              stroke="url(#line-grad)"
              strokeWidth="2.2"
            />

            {/* Dots along the new curve */}
            {/* Dot 1 - small blue, near bottom */}
            <circle cx="530" cy="757" r="2.5" fill="#3ab3e8" filter="url(#blue-glow)" opacity="0.75" />

            {/* Dot 2 - small blue */}
            <circle cx="645" cy="688" r="2.5" fill="#3ab3e8" filter="url(#blue-glow)" />

            {/* Dot 3 - LARGE BLUE glow */}
            <circle cx="742" cy="593" r="5.5" fill="#3ab3e8" filter="url(#blue-glow)" />

            {/* Dot 4 - small blue */}
            <circle cx="832" cy="478" r="2.5" fill="#3ab3e8" filter="url(#blue-glow)" />

            {/* Dot 5 - LARGE BLUE glow */}
            <circle cx="926" cy="328" r="5.5" fill="#3ab3e8" filter="url(#blue-glow)" />

            {/* Dot 6 - small blue */}
            <circle cx="1002" cy="195" r="2.5" fill="#3ab3e8" filter="url(#blue-glow)" />

            {/* Dot 7 - small blue at top */}
            <circle cx="1045" cy="115" r="2.5" fill="#3ab3e8" opacity="0.9" />

            {/* Tiny floating accent dots */}
            <circle cx="720" cy="450" r="1.5" fill="#3ab3e8" opacity="0.3" />
            <circle cx="870" cy="570" r="1.5" fill="#3ab3e8" opacity="0.2" />
            <circle cx="1050" cy="390" r="1.5" fill="#3ab3e8" opacity="0.35" />
          </svg>
        </div>

        <div className="hidden md:grid absolute right-4 md:right-8 top-[45%] -translate-y-1/2 grid-cols-2 gap-x-2 gap-y-3 md:gap-y-4 z-20">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="w-4 h-4 md:w-5 md:h-5 bg-stratova-green"></div>
          ))}
        </div>

        <div className="container mx-auto flex-1 relative z-10 flex flex-col justify-center px-8 md:px-24 py-32 md:pt-24 md:pb-0">
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
