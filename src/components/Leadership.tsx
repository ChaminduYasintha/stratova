import React from 'react';

export const Leadership = () => {
  return (
    <section id="leadership" className="w-full flex flex-col md:flex-row relative overflow-hidden bg-white">
      {/* Left: Graphics & Photo */}
      <div className="w-full md:w-2/5 relative min-h-[500px] flex items-end justify-center">
        
        {/* Background if person.jpg is transparent; if person.jpg is the full graphic, these fall behind it cleanly. */}
        {/* Dark Navy top-left triangle */}
        <div 
          className="absolute top-0 left-0 w-[60%] h-[40%] bg-stratova-dark z-0"
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
        ></div>
        
        {/* Blue bottom-left triangle */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[80%] bg-stratova-blue z-0"
          style={{ clipPath: 'polygon(0 20%, 100% 100%, 0% 100%)' }}
        ></div>

        {/* Person Photo / Graphic */}
        <div className="absolute bottom-0 left-0 w-full h-[95%] flex items-end justify-start z-10 p-0 m-0">
          <img
            src="/person.jpg"
            alt="Rashmi Senevirante"
            className="w-full h-full object-contain object-left-bottom mix-blend-multiply"
          />
        </div>
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-3/5 px-8 md:px-16 py-20 md:py-28 flex flex-col justify-start relative z-10">
        
        {/* Header Block Top Right */}
        <div className="flex flex-col items-end mb-16 w-full">
          <h2 className="text-4xl md:text-5xl font-normal text-stratova-dark mb-[-0.25rem] pr-2">OUR</h2>
          <h2 className="text-[5rem] md:text-[6.5rem] font-black text-stratova-dark tracking-tighter leading-none">LEADERSHIP</h2>
        </div>

        {/* Bio Content */}
        <div className="w-full max-w-2xl pl-0 md:pl-12">
          <h3 className="text-3xl md:text-4xl font-bold text-stratova-dark mb-1">
            Rashmi Senevirante
          </h3>
          <p className="text-[0.65rem] md:text-[0.8rem] font-bold text-stratova-dark mb-6 tracking-wide uppercase">
            BSc MBA FCPA ACMA CGMA MCIS AFA MIPA
          </p>

          <h4 className="text-xl md:text-2xl font-normal text-stratova-dark mb-8">
            Managing Director
          </h4>

          <div className="space-y-6 text-base md:text-lg text-stratova-dark font-medium leading-relaxed">
            <p>
              Rashmi Seneviratne is the Founder of Stratova Private Limited and an
              experienced professional in business advisory, investment facilitation, and
              development consulting. She employed Corporates, MNCs and
              International Agencies in leading positions such as Navara Capital Ltd, the
              Colombo Plan Secretariate, EY, Deloitte, IFRC/Spanish Red Cross, and MAS
              Holdings.
            </p>
            <p>
              With a strong background in finance, business administration and project
              development, Rashmi specialises in investment structuring, business
              strategy, and project development, helping SMEs, large companies and
              organisations navigate complex opportunities and achieve sustainable
              growth in local and international context.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


