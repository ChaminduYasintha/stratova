import React from 'react';
import { motion } from 'motion/react';

const services = [
  {
    title: "Financial Strategic Solutions",
    icon: <img src="/finacialstrategic.png" alt="Financial Strategic Solutions" className="w-24 h-24 md:w-32 md:h-32 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />,
    items: [
      "Private Equity & Debt Raising",
      "Debt Restructuring (SME-Focused)",
      "Company Turnaround & Distressed Business Advisory",
      "FDI Structuring & BOI Facilitation",
      "Pitch Deck & Investment Memorandum Preparation",
      "Cordinations with Regulators for Licenses",
      "Manuals/SOP Develpment"
    ]
  },
  {
    title: "Project Management Consultancy Services",
    icon: <img src="/projectmanagement.png" alt="Project Management Services" className="w-24 h-24 md:w-32 md:h-32 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />,
    items: [
      "Development Project Proposal",
      "Monitoring & Evaluation (M&E) Frameworks",
      "Rapid Rural Assessments (RRA) / Need Assesments",
      "Project/Programme Manuals & SOP Development",
      "Capacity Building & Institutional Strengthening Trainings",
      "Research, Surveys & Feasibility Studies"
    ]
  },
  {
    title: "Entrepreneurship Advisory Services",
    icon: <img src="/enterprenuership.png" alt="Entrepreneurship Advisory" className="w-24 h-24 md:w-32 md:h-32 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />,
    items: [
      "Business Structuring & Growth Strategy",
      "Raising Private Equity & Expansion Capital",
      "Debt Advisory for Scale & Stabilisation",
      "Investment Partner Sourcing",
      "Investor Readiness & Pitch Preparation",
      "SME Turnaround & Expansion Advisory",
      "Export Business Coaching"
    ]
  }
];

export const Services = () => {
  return (
    <section id="services" className="w-full relative overflow-hidden bg-stratova-dark py-20">
      
      {/* Top Right Green Squares Pattern */}
      <div className="absolute top-12 md:top-16 right-0 flex gap-2 opacity-80">
        <div className="w-3 h-3 md:w-4 md:h-4 bg-stratova-green"></div>
        <div className="w-3 h-3 md:w-4 md:h-4 bg-stratova-green translate-x-2"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal text-[#1b80a4] mb-1 tracking-tight">OUR</h2>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tight">
            SERVICES
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="flex flex-col gap-10 md:gap-12 w-full max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full"
            >
              {/* Icon (Left) */}
              <div className="w-24 h-24 md:w-36 md:h-36 flex items-center justify-center shrink-0">
                {service.icon}
              </div>

              {/* White Card (Right) */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:px-10 flex-grow w-full">
                <h3 className="text-lg md:text-xl font-black text-[#1b80a4] mb-4">
                  {service.title}
                </h3>
                
                <ul className="list-disc pl-5 flex flex-col gap-1.5 md:gap-2 marker:text-stratova-dark">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-stratova-dark text-[13.5px] md:text-[15px] font-medium leading-snug md:leading-snug">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom Footer Elements */}
      <div className="w-full mt-24 px-12 md:px-24 flex justify-between items-end relative max-w-7xl mx-auto">
        {/* Bottom Center Green Dots */}
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-4">
          <div className="w-4 h-4 bg-stratova-green"></div>
          <div className="w-4 h-4 bg-stratova-green opacity-50"></div>
          <div className="w-4 h-4 bg-stratova-green opacity-50"></div>
          <div className="w-4 h-4 bg-stratova-green opacity-50"></div>
        </div>
        

      </div>

    </section>
  );
};