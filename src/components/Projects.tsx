import React from 'react';

export const Projects = () => {
  return (
    <section id="projects" className="w-full flex flex-col md:flex-row relative overflow-hidden bg-white">
      {/* Left Content */}
      <div className="w-full md:w-3/5 py-20 md:py-28 px-8 lg:px-16 flex flex-col justify-center gap-6 relative z-10 bg-white">
        
        {/* Box 1 */}
        <div className="bg-stratova-blue py-6 px-6 md:px-10">
          <h3 className="text-lg md:text-xl font-bold text-stratova-dark mb-3">
            • Consultancy Services on Obtaining Regulatory Licenses / Approvals
          </h3>
          <ul className="space-y-1 ml-6 text-base md:text-lg text-stratova-dark font-medium leading-relaxed">
            <li>- Investment Manager</li>
            <li>- Insurance Broker</li>
            <li>- Corporate Advisor</li>
            <li>- BIO Approvals</li>
            <li>- Approved Sponsor</li>
          </ul>
        </div>

        {/* Box 2 */}
        <div className="bg-stratova-blue py-6 px-6 md:px-10">
          <h3 className="text-lg md:text-xl font-bold text-stratova-dark mb-3">
            • Seeking Private Equity Funding
          </h3>
          <ul className="space-y-1 ml-6 text-base md:text-lg text-stratova-dark font-medium leading-relaxed">
            <li>- Scale Manufacturing Company</li>
            <li>- Hospitality Industry in South and East Coast, Sri Lanka</li>
            <li>- Small Scale Apparel Outlet Chain</li>
            <li>- Pharmaceutical Manufacturing Company</li>
            <li>- Cannabis License Holding Company</li>
            <li>- Small and Medium Scale IT Companies</li>
          </ul>
        </div>

        {/* Box 3 */}
        <div className="bg-stratova-blue py-6 px-6 md:px-10">
          <h3 className="text-lg md:text-xl font-bold text-stratova-dark mb-3">
            • Seeking Private Equity Investments
          </h3>
          <ul className="space-y-1 ml-6 text-base md:text-lg text-stratova-dark font-medium leading-relaxed">
            <li>- Medium Scale Manufacturing Company</li>
            <li>- Hospitality Industry in South and East Coast, Sri Lanka</li>
            <li>- Small and Medium Scale IT Companies</li>
          </ul>
        </div>

        {/* Box 4 */}
        <div className="bg-stratova-blue py-6 px-6 md:px-10">
          <h3 className="text-lg md:text-xl font-bold text-stratova-dark mb-3">
            • Seeking Private Debt Finance
          </h3>
          <ul className="space-y-1 ml-6 text-base md:text-lg text-stratova-dark font-medium leading-relaxed">
            <li>- Medium – Large Scale Manufacturing Companies</li>
          </ul>
        </div>

      </div>

      {/* Right Content */}
      <div className="w-full md:w-2/5 bg-stratova-dark px-8 md:px-12 py-20 md:py-28 flex flex-col relative z-20">
        
        {/* Header Block */}
        <div className="text-right mb-16 mt-8">
          <h2 className="text-3xl md:text-[3vw] lg:text-[2.5vw] xl:text-[2.2vw] font-normal text-white mb-[-0.25rem] pr-2">ON GOING</h2>
          <h2 className="text-[4rem] md:text-[5.5vw] lg:text-[4.5vw] xl:text-[4.2vw] font-black text-white tracking-tighter leading-none whitespace-nowrap">PROJECTS</h2>
        </div>
        
        {/* Custom SVG Line Art for Icons */}
        <div className="flex-grow flex items-center justify-center w-full max-w-sm mx-auto pb-12">
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="#1b8bba" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            
            {/* Top Right: Checklist Document */}
            <rect x="130" y="30" width="40" height="50" rx="3" />
            <line x1="140" y1="42" x2="145" y2="47" /><line x1="145" y1="47" x2="160" y2="39" />
            <line x1="140" y1="52" x2="145" y2="57" /><line x1="145" y1="57" x2="160" y2="49" />
            <line x1="140" y1="62" x2="145" y2="67" /><line x1="145" y1="67" x2="160" y2="59" />

            {/* Top Left: Triangle in Circle */}
            <circle cx="60" cy="70" r="23" />
            <path d="M 60 55 L 48 78 L 72 78 Z" />
            
            {/* Bottom Left: Gear in Circle Arrow */}
            <path d="M 40 145 A 25 25 0 1 1 35 125" />
            <path d="M 28 142 L 40 145 L 43 133" />
            {/* Gear shape */}
            <circle cx="50" cy="120" r="10" />
            <path d="M 50 106 L 50 110 M 50 130 L 50 134 M 36 120 L 40 120 M 60 120 L 64 120 M 40 110 L 43 113 M 57 127 L 60 130 M 60 110 L 57 113 M 40 130 L 43 127" />
            
            {/* Bottom Right: Lightbulb in Circle Arrow */}
            <path d="M 168 120 A 25 25 0 1 1 155 145" />
            <path d="M 165 145 L 155 145 L 152 135" />
            {/* Lightbulb */}
            <path d="M 140 113 C 140 103 150 103 150 113 C 150 118 147 122 147 127 L 143 127 C 143 122 140 118 140 113 Z" />
            <line x1="143" y1="130" x2="147" y2="130" />

            {/* Middle Upward Trend Arrow */}
            <path d="M 72 120 L 92 100 L 105 110 L 126 83" strokeWidth="5" />
            <polyline points="113,83 126,83 126,96" strokeWidth="5" />
            
          </svg>
        </div>

      </div>
    </section>
  );
};
