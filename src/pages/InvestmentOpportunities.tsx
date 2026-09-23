import React, { useState } from 'react';
import { motion } from 'motion/react';

// Mock data based on the screenshot
const opportunities = [
  {
    id: 'DB024',
    type: 'Acquisition / JV',
    sector: 'Luxury Heritage Boutique Hotel',
    location: 'Sri Lanka',
    size: 'LKR 320–370Mn (EV)\n≈ USD 0.97–1.12M',
    returns: 'On application',
    status: 'Open'
  },
  {
    id: 'DB025',
    type: 'Full Acquisition',
    sector: 'Iconic Themed Restaurant & Bar (F&B)',
    location: 'Sri Lanka',
    size: 'LKR 250Mn (negotiable)\n≈ USD 0.76M',
    returns: 'On application',
    status: 'Open'
  },
  {
    id: 'DB026',
    type: 'Majority Acquisition',
    sector: 'Listed Hospitality / Riverfront Hotel',
    location: 'Sri Lanka',
    size: 'USD 3.9M (70% stake)',
    returns: 'On application',
    status: 'Open'
  },
  {
    id: 'DB027',
    type: 'Strategic Investment',
    sector: 'Enterprise ICT / Digital Transformation',
    location: 'Singapore, South Asia',
    size: 'USD 2.94M (equity value)',
    returns: '25%–30%',
    status: 'Open'
  },
  {
    id: 'DB028',
    type: 'Growth Equity / Strategic Partnership',
    sector: 'ICT Systems Integration | Networking, IoT & Smart Infrastructure',
    location: 'Sri Lanka',
    size: 'LKR 201Mn (range 167–253Mn)\n≈ USD 0.61M (0.51–0.77M)',
    returns: '20%–25%',
    status: 'Open'
  },
  {
    id: 'DB029',
    type: 'Asset Acquisition',
    sector: 'Hospitality | Freehold Resort Development Land & Approved Boutique Project',
    location: 'Sri Lanka (Sigiriya, Cultural Triangle)',
    size: 'USD 300K (dev. cost ~USD 2.0M)',
    returns: 'On application',
    status: 'Open'
  }
];

export const InvestmentOpportunities = () => {
  const [activeSector, setActiveSector] = useState('All');
  const [activeSize, setActiveSize] = useState('All sizes');

  const sectors = ['All', 'Hospitality & Leisure', 'Technology & ICT', 'Consumer & Agri', 'Energy & Mobility', 'Financial Services', 'Education'];
  const sizes = ['All sizes', 'Under USD 1M', 'USD 1–5M', 'USD 5–20M', 'USD 20M+', 'On application'];

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black text-stratova-dark mb-6 tracking-tight">
            Investment Opportunities
          </h1>
          
          {/* Legend */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-gray-600">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-[#e6f4ea] text-[#137333] rounded-full text-xs font-bold">Open</span>
              <span>Actively Raising</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-[#fef7e0] text-[#b06000] rounded-full text-xs font-bold">Review</span>
              <span>In Diligence</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-[#f1f3f4] text-[#5f6368] rounded-full text-xs font-bold">Closed</span>
              <span>Fully Funded / Inactive</span>
            </div>
          </div>
        </motion.div>

        {/* Summary Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <h3 className="text-4xl font-black text-stratova-dark mb-2">14</h3>
            <p className="text-gray-500 font-medium">Live opportunities</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <h3 className="text-4xl font-black text-stratova-dark mb-2">5</h3>
            <p className="text-gray-500 font-medium">Sectors</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <h3 className="text-3xl md:text-4xl font-black text-stratova-dark mb-2 tracking-tight">USD 300K–50M</h3>
            <p className="text-gray-500 font-medium">Ticket range</p>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-gray-400 mb-10">
          Inventory updated September 2026 · Teasers available on request; detailed materials released after NDA. · USD equivalents indicative at USD 1 = LKR 330.
        </p>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-4 mb-8"
        >
          {/* Sector Filter */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            {sectors.map(sector => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${
                  activeSector === sector 
                    ? 'bg-stratova-dark text-white border-stratova-dark' 
                    : 'bg-white text-stratova-dark border-gray-200 hover:border-stratova-blue hover:text-stratova-blue'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
          
          {/* Size Filter */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">Deal Size</span>
            {sizes.map(size => (
              <button
                key={size}
                onClick={() => setActiveSize(size)}
                className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${
                  activeSize === size 
                    ? 'bg-stratova-dark text-white border-stratova-dark' 
                    : 'bg-white text-stratova-dark border-gray-200 hover:border-stratova-blue hover:text-stratova-blue'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Data Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-stratova-dark text-white text-sm">
                  <th className="py-4 px-6 font-bold w-[8%]">ID No.</th>
                  <th className="py-4 px-6 font-bold w-[12%]">Type</th>
                  <th className="py-4 px-6 font-bold w-[25%]">Sector / Industry</th>
                  <th className="py-4 px-6 font-bold w-[15%]">Location</th>
                  <th className="py-4 px-6 font-bold w-[15%]">Investment Size</th>
                  <th className="py-4 px-6 font-bold w-[10%]">Target Returns</th>
                  <th className="py-4 px-6 font-bold text-center w-[10%]">More Info</th>
                  <th className="py-4 px-6 font-bold text-center w-[5%]">Status</th>
                </tr>
              </thead>
              <tbody>
                {opportunities.map((opp, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold text-stratova-dark underline decoration-stratova-blue decoration-2 underline-offset-4">
                      {opp.id}
                    </td>
                    <td className="py-5 px-6 text-sm text-gray-600">{opp.type}</td>
                    <td className="py-5 px-6 text-sm text-gray-700">{opp.sector}</td>
                    <td className="py-5 px-6 text-sm text-gray-600">{opp.location}</td>
                    <td className="py-5 px-6 text-sm text-gray-600 whitespace-pre-line">{opp.size}</td>
                    <td className="py-5 px-6 text-sm text-gray-600">{opp.returns}</td>
                    <td className="py-5 px-6">
                      <div className="flex flex-col gap-2 items-center">
                        <button className="bg-[#f58f29] hover:bg-[#e07b1a] text-white text-xs font-bold py-1.5 px-4 rounded transition-colors w-full">
                          View
                        </button>
                        <button className="bg-white border border-[#25D366] text-[#25D366] hover:bg-[#f0fbf4] text-xs font-bold py-1.5 px-4 rounded transition-colors w-full">
                          WhatsApp
                        </button>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-center">
                      {opp.status === 'Open' && (
                        <span className="px-3 py-1 bg-[#e6f4ea] text-[#137333] rounded-full text-xs font-bold">Open</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
