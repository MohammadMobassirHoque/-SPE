import React from 'react';
import { Wallet, Coins, ExternalLink, ArrowRight } from 'lucide-react';
import { BUY_LINKS } from '../constants';

const HowToBuy: React.FC = () => {
  const buyOptions = [
    {
      name: "Pump.fun",
      desc: "Buy $SPE directly on the Pump.fun bonding curve.",
      link: BUY_LINKS.pumpfun,
      color: "from-[#10B981] to-[#059669]", // Greenish for Pump
      btnColor: "bg-[#10b981] hover:bg-[#059669] text-white"
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
           <h2 className="text-[#F4D03F] font-comic text-5xl md:text-7xl tracking-wide drop-shadow-[4px_4px_0_rgba(122,74,16,0.5)] transform rotate-1">
             HOW TO BUY
           </h2>
           <p className="text-white font-bold text-lg md:text-xl mt-4 max-w-2xl mx-auto">
             First, download <span className="text-[#F4D03F]">Phantom Wallet</span> and load it up with some <span className="text-[#F4D03F]">SOL</span>.
           </p>
        </div>

        {/* Prerequisites (Wallet & SOL) - Condensed */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full max-w-4xl justify-center">
          <div className="flex-1 bg-[#7a4a10]/40 border-2 border-[#8B5A2B] rounded-xl p-4 flex items-center gap-4">
            <div className="bg-[#FFD700] p-3 rounded-lg text-[#5C3A10]"><Wallet size={24} /></div>
            <div className="text-white text-left">
              <div className="font-comic text-xl">1. Create Wallet</div>
              <div className="text-xs opacity-80">Download Phantom App</div>
            </div>
          </div>
          <div className="hidden sm:flex items-center text-[#F4D03F]"><ArrowRight /></div>
          <div className="flex-1 bg-[#7a4a10]/40 border-2 border-[#8B5A2B] rounded-xl p-4 flex items-center gap-4">
            <div className="bg-[#FFD700] p-3 rounded-lg text-[#5C3A10]"><Coins size={24} /></div>
            <div className="text-white text-left">
              <div className="font-comic text-xl">2. Get SOL</div>
              <div className="text-xs opacity-80">Buy or transfer SOL</div>
            </div>
          </div>
        </div>

        {/* The Only Way to Buy */}
        <div className="w-full mb-8 flex flex-col items-center">
          <h3 className="text-[#F4D03F] font-comic text-3xl md:text-4xl text-center mb-8 uppercase">
            Buy on Pump.fun
          </h3>
          <div className="w-full flex justify-center">
            {buyOptions.map((option, idx) => (
              <div key={idx} className="w-full max-w-md bg-[#FFD700] border-4 border-[#8B5A2B] rounded-3xl p-6 flex flex-col items-center text-center shadow-[8px_8px_0_rgba(139,69,19,0.4)] transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                
                {/* Background Gradient for some flair */}
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${option.color}`}></div>

                <h3 className="text-[#8B5A2B] font-comic text-3xl md:text-4xl mb-3 uppercase mt-2">{option.name}</h3>
                
                <p className="text-[#5C3A10] font-bold text-sm mb-6 flex-grow">
                  {option.desc}
                </p>

                <a 
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl font-comic text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px] transition-all flex items-center justify-center gap-2 ${option.btnColor}`}
                >
                  <span>BUY NOW</span>
                  <ExternalLink size={20} />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowToBuy;