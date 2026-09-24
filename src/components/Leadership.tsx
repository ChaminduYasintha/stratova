import React from 'react';
import { motion } from 'motion/react';

const leaders = [
  {
    name: "Rashmi Senevirante",
    qualifications: "BSc MBA FCPA ACMA CGMA MCIS AFA MIPA",
    titles: [
      "Managing Director - Stratova Pvt Ltd",
      "Director - Stratova X Global, Malaysia"
    ],
    bio: [
      "Rashmi Seneviratne is the Founder of Stratova Private Limited and well experienced professional in business advisory, investment facilitation, and development consulting. She employed Corporates, MNCs and International Agencies in leading positions such as Navara Capital Ltd, the Colombo Plan Secretariate, EY, Deloitte, IFRC/Spanish Red Cross, and MAS Holdings.",
      "With a strong background in finance, business administration and project development, Rashmi specialises in investment structuring, business strategy, and project development, helping SMEs, large companies and organisations navigate complex opportunities and achieve sustainable growth in local and international context in USA, EU, Asia and Oceania."
    ],
    image: "https://placehold.co/400x600/e2e8f0/64748b?text=Rashmi+Senevirante"
  },
  {
    name: "Vijaya Kumar Govindasamy",
    qualifications: "CA CPA FCMA CGMA CIPFA",
    titles: [
      "Director - StratovaX Global, Malaysia"
    ],
    bio: [
      "Vijaya Kumar Govindasamy is a seasoned finance professional with over 19 years of experience in public sector financial management, audit, and asset oversight. In his senior leadership role at the Accountant General’s Department of Malaysia, he has consistently strengthened financial governance, improved reporting accuracy, and enhanced operational efficiency across large-scale government institutions.",
      "With deep expertise in asset management, budgeting, audit compliance, and process optimisation, Vijaya has led high-performing teams and managed complex, multi-department financial systems. His strong capabilities in risk management and strategic financial planning enable organisations to reinforce governance frameworks, streamline operations, and achieve sustainable financial outcomes."
    ],
    image: "https://placehold.co/400x600/e2e8f0/64748b?text=Vijaya+Kumar"
  }
];

export const Leadership = () => {
  return (
    <section id="leadership" className="w-full relative overflow-hidden bg-white py-16 flex flex-col min-h-[100svh]">
      
      {/* Left Dark Blue Strip */}
      <div className="absolute top-0 left-0 w-4 md:w-12 h-full bg-stratova-dark z-0"></div>

      {/* Top Right Green Dots Pattern */}
      <div className="absolute top-12 right-12 md:right-24 grid grid-cols-2 gap-2 opacity-80 z-0">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-3 h-3 bg-stratova-green"></div>
        ))}
      </div>

      <div className="container mx-auto px-8 md:px-24 relative z-10 flex flex-col flex-grow">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 mt-8"
        >
          <h2 className="text-4xl md:text-5xl font-light text-stratova-green mb-1 tracking-tight">OUR</h2>
          <h2 className="text-5xl md:text-7xl font-bold text-stratova-dark leading-[0.9] tracking-tight">
            LEADERSHIP
          </h2>
        </motion.div>

        {/* Leaders List */}
        <div className="flex flex-col gap-24">
          {leaders.map((leader, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col md:flex-row gap-8 md:gap-16 w-full"
            >
              {/* Bio Content (Left) */}
              <div className="flex-1 flex flex-col justify-start">
                <h3 className="text-3xl md:text-4xl font-black text-stratova-dark mb-1">
                  {leader.name}
                </h3>
                <p className="text-xs md:text-sm font-bold text-stratova-dark mb-4 tracking-wider uppercase">
                  {leader.qualifications}
                </p>

                <div className="mb-6 flex flex-col">
                  {leader.titles.map((title, i) => (
                    <h4 key={i} className="text-lg md:text-xl font-medium text-stratova-dark">
                      {title}
                    </h4>
                  ))}
                </div>

                <div className="space-y-4">
                  {leader.bio.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Photo (Right) */}
              <div className="w-full md:w-[300px] shrink-0 flex items-start justify-center md:justify-end">
                <div className="w-64 h-80 md:w-full md:h-auto aspect-[3/4] bg-gray-100 overflow-hidden shadow-lg">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom Footer Elements */}
      <div className="w-full mt-24 px-12 md:px-24 flex justify-end items-end relative max-w-7xl mx-auto z-10">

      </div>

    </section>
  );
};
