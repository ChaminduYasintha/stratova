import React from 'react';

export const Contents = () => {
  const items = [
    { title: 'ABOUT COMPANY', id: 'about' },
    { title: 'OUR VISION & MISSION', id: 'vision' },
    { title: 'OUR CORE VALUES', id: 'values' },
    { title: 'OUR SERVICES', id: 'services' },
    { title: 'OUR TEAM', id: 'team' },
    { title: 'OUR LEADERSHIP', id: 'leadership' },
    { title: 'OUR CLIENTS', id: 'clients' },
    { title: 'OUR ONGOING PROJECTS', id: 'projects' },
    { title: 'OUR PARTNERSHIPS', id: 'partnerships' },
    { title: 'WHY CHOOSE STRATOVA', id: 'why-choose-us' },
    { title: 'CONTACT US', id: 'contact' },
  ];

  return (
    <section className="w-full bg-stratova-dark py-20 md:py-28 px-8 md:px-16 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tight mb-12 md:mb-0">
          CONTENTS
        </h2>
      </div>
      
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {items.map((item, index) => (
          <a 
            key={index} 
            href={`#${item.id}`}
            className="flex items-center group hover:opacity-90 transition-opacity"
          >
            <div className="flex-grow bg-stratova-blue py-3 px-6 text-white font-bold text-lg md:text-xl tracking-wide">
              {item.title}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
