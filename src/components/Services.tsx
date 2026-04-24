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
    <section id="services-1" className={`w-full bg-white py-24 relative overflow-visible ${hoveredIndex !== null ? 'z-50' : 'z-10'}`}>
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-stratova-dark transform rotate-45 translate-x-1/3 -translate-y-1/2 opacity-5 pointer-events-none" />

      <div className="container mx-auto px-8 md:px-16 relative z-10 flex flex-col">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-right mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal text-stratova-dark mb-2">OUR</h2>
          <h2 className="text-6xl md:text-8xl font-black text-stratova-dark tracking-tight leading-none">SERVICES</h2>
        </motion.div>

        {/* Cards Row */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div 
                key={index}
                className="relative h-[160px] md:h-[180px]" // Reduced height to match initial state
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  animate={{ 
                    scale: isHovered ? 1.2 : 1,
                    zIndex: isHovered ? 50 : 0,
                    y: isHovered ? -40 : 0,
                    height: isHovered ? 'auto' : '100%',
                    backgroundColor: isHovered ? 'rgba(10, 17, 40, 0.95)' : 'rgba(10, 17, 40, 1)'
                  }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 25,
                    height: { duration: 0.4 }
                  }}
                  className={`absolute top-0 left-0 w-full flex flex-col cursor-pointer rounded-3xl overflow-hidden shadow-xl border border-white/10 transition-all duration-500 backdrop-blur-xl ${isHovered ? 'shadow-[0_40px_80px_rgba(27,139,186,0.25)] border-stratova-blue/40' : ''}`}
                >
                  {/* Subtle Gradient Overlay on Hover */}
                  <motion.div 
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-stratova-blue/10 to-transparent pointer-events-none"
                  />

                  {/* Icon + Title Container */}
                  <motion.div 
                    animate={{ 
                      padding: isHovered ? '1rem' : '0',
                    }}
                    className="flex flex-col md:flex-row w-full shrink-0 items-center overflow-hidden relative z-10"
                  >
                    {/* Icon */}
                    <motion.div 
                      animate={{ 
                        scale: isHovered ? 0.5 : 1,
                        width: isHovered ? '25%' : '40%'
                      }}
                      className="flex justify-center items-center p-6 bg-white/5 shrink-0"
                    >
                      <div className="transform origin-center">
                        {service.icon}
                      </div>
                    </motion.div>

                    {/* Title */}
                    <motion.div 
                      animate={{ 
                        scale: isHovered ? 0.8 : 1,
                        width: isHovered ? '75%' : '60%',
                        x: isHovered ? -10 : 0,
                        backgroundColor: isHovered ? 'transparent' : '#1b8bba'
                      }}
                      className="p-6 flex items-center h-full w-full relative"
                    >
                      <h3 className="text-lg md:text-xl font-bold text-white leading-tight origin-left">
                        {service.title}
                      </h3>
                      {/* Accent Line */}
                      <motion.div 
                        animate={{ width: isHovered ? '40px' : '0px' }}
                        className="absolute bottom-4 left-6 h-1 bg-stratova-blue rounded-full"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Description Panel */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      display: isHovered ? 'block' : 'none',
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex-grow relative z-10"
                  >
                    <div className="p-6 md:p-8 pt-0">
                      <div className="w-full h-px bg-white/10 mb-6" />
                      <ul className="space-y-4">
                        {service.items.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                            transition={{ delay: isHovered ? i * 0.02 : 0, duration: 0.3 }}
                            className="flex items-start text-[11px] md:text-sm text-white/80 font-medium hover:text-white transition-colors"
                          >
                            <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-stratova-blue flex-shrink-0 shadow-[0_0_8px_#1b8bba]" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>




      </div>

    </section>
  );
};

export default Services;