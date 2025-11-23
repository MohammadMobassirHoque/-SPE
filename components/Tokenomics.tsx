import React from 'react';
import { PieChart, ShieldCheck, Percent } from 'lucide-react';

const Tokenomics: React.FC = () => {
  const cards = [
    {
      icon: <PieChart className="w-8 h-8 md:w-10 md:h-10 text-[#7a4a10]" />,
      label: "Total Supply",
      value: "1 B",
      sub: "Original Supply"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-[#7a4a10]" />,
      label: "Liquidity",
      value: "LOCKED",
      sub: "Rug Proof"
    },
    {
      icon: <Percent className="w-8 h-8 md:w-10 md:h-10 text-[#7a4a10]" />,
      label: "TAX",
      value: "0/0",
      sub: (
        <span className="block text-xs md:text-sm leading-tight mt-1">
          No hidden taxes.<br/>
          No complicated structures.<br/>
          Just a clean ecosystem built for holders.
        </span>
      )
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Title */}
        <div className="mb-12 md:mb-16 relative">
           <h2 className="text-[#F4D03F] font-comic text-5xl md:text-7xl tracking-wide drop-shadow-[4px_4px_0_rgba(122,74,16,0.5)] transform -rotate-2 text-center">
             TOKENOMICS
           </h2>
        </div>

        {/* Cards Grid - Updated to 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-[#FFD700] border-4 border-[#8B5A2B] rounded-3xl p-6 md:p-8 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0_rgba(139,69,19,0.4)] relative overflow-hidden group h-full justify-start">
              
              {/* Shine effect */}
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover:animate-[shine_1s_ease-in-out]"></div>

              <div className="bg-white p-4 rounded-full border-4 border-[#8B5A2B] mb-4 shadow-inner relative z-10 flex-shrink-0">
                {card.icon}
              </div>
              <h3 className="text-[#8B5A2B] font-comic text-2xl md:text-3xl mb-2 uppercase relative z-10">{card.label}</h3>
              <p className="text-[#5C3A10] font-bold text-3xl md:text-4xl font-comic relative z-10 mb-2">{card.value}</p>
              
              {/* Subtext container */}
              <div className="text-[#8B5A2B]/90 font-bold text-sm uppercase tracking-wider relative z-10 mt-auto">
                {card.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Tokenomics;