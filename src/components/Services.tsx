import React, { useState } from 'react';
import { motion } from 'motion/react';

const services = [
  {
    title: "Financial Strategic Solutions",
    icon: <img src="/finacialstrategic.png" alt="Financial Strategic Solutions" className="w-28 h-28 object-contain opacity-90" />,
    items: [
      "Private Equity Placements (Local & International)",
      "Investor Identification & Strategic Partner Matching",
      "Debt Raising : Private & Financial Institutions",
      "Debt & Capital Restructuring (SME-Focused)",
      "Company Turnaround & Distressed Business Advisory",
      "Mergers & Acquisitions (M&A) Advisory",
      "FDI Structuring & BOI Facilitation",
      "Portfolio Strategy & Financial Modelling",
      "Pitch Deck & Investment Memorandum Preparation",
      "Coordinations with CBSL, CSE, SEC etc for Licensing Requirements"
    ]
  },
  {
    title: "Project Management Consultancy Services",
    icon: <img src="/projectmangemnt.png" alt="Project Management Services" className="w-28 h-28 object-contain opacity-90" />,
    items: [
      "Donor Identification & Grant Mobilisation (NGOs & INGOs)",
      "Development Project Proposal Writing",
      "Fund & Grant Management",
      "Budgeting, Financial Planning & Bookkeeping Support",
      "Monitoring & Evaluation (M&E) Frameworks",
      "Rapid Rural Assessments (RRA) / Need Assessments",
      "Project/Programme Manuals & SOP Development",
      "Capacity Building & Institutional Strengthening Trainings",
      "Research, Surveys & Feasibility Studies"
    ]
  },
  {
    title: "Entrepreneurship Advisory Services",
    icon: <img src="/entrepreneurship.png" alt="Entrepreneurship Advisory" className="w-28 h-28 object-contain opacity-90" />,
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services-1" className="w-full bg-white py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-stratova-dark transform rotate-45 translate-x-1/3 -translate-y-1/2 opacity-5 pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 relative z-10 flex flex-col">
        {/* Header */}
        <div className="text-right mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-stratova-dark mb-2">OUR</h2>
          <h2 className="text-6xl md:text-8xl font-black text-stratova-dark tracking-tight leading-none">SERVICES</h2>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="flex flex-col cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon + Title — always visible, uses first service styling: dark bg icon, blue content */}
                <div className="flex flex-col md:flex-row w-full">
                  {/* Icon — stratova-dark background */}
                  <div className="w-full md:w-2/5 flex justify-center items-center p-8 bg-stratova-dark">
                    <div className="transform scale-90">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title — stratova-blue background */}
                  <div className="w-full md:w-3/5 p-6 flex items-center bg-stratova-blue">
                    <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Bullet points — hidden until hover, expands downward */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isHovered ? 'auto' : 0,
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 200, damping: 26 }}
                  style={{ overflow: 'hidden' }}
                  className="bg-stratova-dark"
                >
                  <div className="p-6 md:p-8">
                    <ul className="space-y-2">
                      {service.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -8 }}
                          transition={{ delay: isHovered ? i * 0.04 : 0, duration: 0.2 }}
                          className="flex items-start text-sm md:text-base text-white font-medium"
                        >
                          <span className="mr-3 mt-2 w-2 h-2 rounded-full bg-stratova-blue flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;