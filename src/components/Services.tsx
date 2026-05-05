import React, { useState } from 'react';
import { motion } from 'motion/react';

const services = [
  {
    title: "Financial Strategic Solutions",
    icon: <img src="/finacialstrategic.png" alt="Financial Strategic Solutions" className="w-20 h-20 object-contain opacity-90" />,
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
    icon: <img src="/projectmangemnt.png" alt="Project Management Services" className="w-20 h-20 object-contain opacity-90" />,
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
    icon: <img src="/entrepreneurship.png" alt="Entrepreneurship Advisory" className="w-20 h-20 object-contain opacity-90" />,
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

// Fixed height of the collapsed card — wrapper stays this height always
const CARD_HEIGHT = 160;

export const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services-1"
      className="w-full bg-white py-24 relative overflow-visible"
      style={{ zIndex: hoveredIndex !== null ? 50 : 1, position: 'relative' }}
    >
      {/* Background Accent — clipped so it cannot bleed outside the section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-stratova-dark transform rotate-45 translate-x-1/3 -translate-y-1/2 opacity-5" />
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10 flex flex-col">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-right mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal text-stratova-dark mb-2">OUR</h2>
          <h2 className="text-6xl md:text-8xl font-black text-stratova-dark tracking-tight leading-none">SERVICES</h2>
        </motion.div>

        {/* Cards — fixed-height wrappers so expanded cards float OVER the section */}
        <div className="flex flex-col gap-5">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              /* ── Fixed-height wrapper — layout never shifts ── */
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 1.1,
                  delay: index * 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                /* Height is FIXED — inner card is absolute, so expansion is free-floating */
                style={{ position: 'relative', height: `${CARD_HEIGHT}px`, zIndex: isHovered ? 50 : 1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* ── Absolute card — grows downward over the section ── */}
                <motion.div
                  animate={{
                    scale: isHovered ? 1.012 : 1,
                    y: isHovered ? -4 : 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute top-0 left-0 w-full flex flex-col cursor-pointer rounded-2xl overflow-hidden border border-white/10
                    ${isHovered
                      ? 'shadow-[0_24px_60px_rgba(27,139,186,0.22)] border-stratova-blue/30'
                      : 'shadow-[0_8px_32px_rgba(10,17,40,0.14)]'
                    }`}
                  style={{ backgroundColor: 'rgba(10,17,40,1)' }}
                >
                  {/* Gradient Overlay on hover */}
                  <motion.div
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0 bg-gradient-to-r from-stratova-blue/10 via-transparent to-transparent pointer-events-none rounded-2xl"
                  />

                  {/* Icon + Title Row — fixed height, always visible */}
                  <div
                    className="flex flex-row items-stretch w-full shrink-0 relative z-10"
                    style={{ height: `${CARD_HEIGHT}px` }}
                  >
                    {/* Icon block */}
                    <motion.div
                      animate={{ width: isHovered ? '18%' : '28%' }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="flex justify-center items-center bg-white/5 h-full shrink-0"
                    >
                      <motion.div
                        animate={{ scale: isHovered ? 0.8 : 1 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {service.icon}
                      </motion.div>
                    </motion.div>

                    {/* Title block */}
                    <motion.div
                      animate={{
                        backgroundColor: isHovered
                          ? 'rgba(27,139,186,0)'
                          : 'rgba(27,139,186,1)',
                      }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="flex flex-1 items-center px-6 md:px-10 h-full relative"
                    >
                      <h3 className="text-lg md:text-2xl font-bold text-white leading-snug">
                        {service.title}
                      </h3>


                    </motion.div>
                  </div>

                  {/* Expandable Items Panel — floats over section below */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isHovered ? 'auto' : 0,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{
                      height: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: 0.3, delay: isHovered ? 0.1 : 0 },
                    }}
                    className="overflow-hidden relative z-10"
                  >
                    <div className="px-6 md:px-10 pb-7 pt-2">
                      <div className="w-full h-px bg-white/10 mb-5" />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
                        {service.items.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -8 }}
                            transition={{
                              delay: isHovered ? i * 0.04 + 0.12 : 0,
                              duration: 0.35,
                            }}
                            className="flex items-start gap-3 text-sm text-white/80 hover:text-white transition-colors"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stratova-blue flex-shrink-0 shadow-[0_0_8px_#1b8bba]" />
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;