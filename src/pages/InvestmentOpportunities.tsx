import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface Opportunity {
  id: string;
  type: string;
  sector: string;
  sectorCategory: string;
  location: string;
  size: string;
  sizeCategory: string;
  status: 'Open' | 'Review' | 'Closed';
}

export const InvestmentOpportunities = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);

  const [activeSector, setActiveSector] = useState('All');
  const [activeSize, setActiveSize] = useState('All sizes');
  const [selectedOpp, setSelectedOpp] = useState<Opportunity | null>(null);

  const sectors = ['All', 'Hospitality & Leisure', 'Technology & ICT', 'Consumer & Agri', 'Energy & Mobility', 'Financial Services', 'Education'];
  const sizes = ['All sizes', 'Under LKR 250Mn', 'LKR 250Mn–500Mn', 'LKR 500Mn–1Bn', 'LKR 1Bn+'];

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setOpportunities(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [apiUrl]);

  const filteredOpportunities = opportunities.filter((opp) => {
    const matchesSector = activeSector === 'All' || opp.sectorCategory === activeSector;
    const matchesSize = activeSize === 'All sizes' || opp.sizeCategory === activeSize;
    return matchesSector && matchesSize;
  });

  if (loading) return <div className="py-20 text-center font-bold">Loading Database...</div>;

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-8 md:px-24">

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Investment Opportunities
          </h1>
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

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <h3 className="text-4xl font-black text-gray-900 mb-2">{opportunities.filter(o => o.status === 'Open').length}</h3>
            <p className="text-gray-500 font-medium">Live opportunities</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <h3 className="text-4xl font-black text-gray-900 mb-2">5</h3>
            <p className="text-gray-500 font-medium">Sectors</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">LKR 100Mn – 16.5Bn</h3>
            <p className="text-gray-500 font-medium">Ticket range</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-col gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            {sectors.map(sector => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${activeSector === sector ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-900 border-gray-200 hover:border-blue-600 hover:text-blue-600'
                  }`}
              >
                {sector}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">Deal Size (LKR)</span>
            {sizes.map(size => (
              <button
                key={size}
                onClick={() => setActiveSize(size)}
                className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${activeSize === size ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-900 border-gray-200 hover:border-blue-600 hover:text-blue-600'
                  }`}
              >
                {size}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-gray-900 text-white text-sm">
                  <th className="py-4 px-6 font-bold w-[10%]">ID No.</th>
                  <th className="py-4 px-6 font-bold w-[15%]">Type</th>
                  <th className="py-4 px-6 font-bold w-[28%]">Sector / Industry</th>
                  <th className="py-4 px-6 font-bold w-[15%]">Location</th>
                  <th className="py-4 px-6 font-bold w-[18%]">Investment Size (LKR)</th>
                  <th className="py-4 px-6 font-bold text-center w-[9%]">More Info</th>
                  <th className="py-4 px-6 font-bold text-center w-[5%]">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredOpportunities.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-gray-500 font-medium">
                      No opportunities match the selected filters.
                      <button onClick={() => { setActiveSector('All'); setActiveSize('All sizes'); }} className="block mx-auto mt-3 text-blue-600 font-bold text-sm underline hover:opacity-80">
                        Reset filters
                      </button>
                    </td>
                  </tr>
                ) : (
                  filteredOpportunities.map((opp) => (
                    <tr key={opp.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-5 px-6 font-bold text-gray-900 underline decoration-blue-600 decoration-2 underline-offset-4">{opp.id}</td>
                      <td className="py-5 px-6 text-sm text-gray-600">{opp.type}</td>
                      <td className="py-5 px-6 text-sm font-medium text-gray-800">{opp.sector}</td>
                      <td className="py-5 px-6 text-sm text-gray-600">{opp.location}</td>
                      <td className="py-5 px-6 text-sm font-semibold text-gray-900 whitespace-pre-line">{opp.size}</td>
                      <td className="py-5 px-6">
                        <div className="flex flex-col gap-2 items-center">
                          <button onClick={() => setSelectedOpp(opp)} className="bg-[#f58f29] hover:bg-[#e07b1a] text-white text-xs font-bold py-1.5 px-4 rounded transition-colors w-full">View</button>
                          <a href={`https://wa.me/94776110005?text=${encodeURIComponent(`Hello Stratova, I am interested in Opportunity ${opp.id}: ${opp.sector} (${opp.location}) with investment size ${opp.size}.`)}`} target="_blank" rel="noopener noreferrer" className="bg-white border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white text-xs font-bold py-1.5 px-4 rounded transition-colors w-full text-center block">WhatsApp</a>
                        </div>
                      </td>
                      <td className="py-5 px-6 text-center">
                        {opp.status === 'Open' && <span className="px-3 py-1 bg-[#e6f4ea] text-[#137333] rounded-full text-xs font-bold">Open</span>}
                        {opp.status === 'Review' && <span className="px-3 py-1 bg-[#fef7e0] text-[#b06000] rounded-full text-xs font-bold">Review</span>}
                        {opp.status === 'Closed' && <span className="px-3 py-1 bg-[#f1f3f4] text-[#5f6368] rounded-full text-xs font-bold">Closed</span>}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

        {selectedOpp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative border border-gray-100">
              <button onClick={() => setSelectedOpp(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 text-xl font-bold leading-none">✕</button>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl font-black text-gray-900">{selectedOpp.id}</span>
                <span className="px-3 py-0.5 bg-[#e6f4ea] text-[#137333] rounded-full text-xs font-bold">{selectedOpp.status}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{selectedOpp.sector}</h3>
              <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-2.5 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Transaction Type</span><span className="font-semibold text-gray-800">{selectedOpp.type}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Location</span><span className="font-semibold text-gray-800">{selectedOpp.location}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Investment Size (LKR)</span><span className="font-bold text-blue-600">{selectedOpp.size}</span></div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={() => setSelectedOpp(null)} className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 px-5 rounded-xl transition-colors text-sm w-full">Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};