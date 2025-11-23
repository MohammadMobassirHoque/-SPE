import React from 'react';
import { TrendingUp, Lock, ExternalLink, Zap } from 'lucide-react';
import { BUY_LINKS } from '../constants';

const BondingCurve: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#FFD700] border-4 border-[#8B5A2B] rounded-3xl p-8 md:p-12 shadow-[12px_12px_0_rgba(139,69,19,0.4)] relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] pointer-events-none"></div>
          
          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Header */}
            <h2 className="text-[#8B5A2B] font-comic text-5xl md:text-7xl mb-6 uppercase tracking-wide drop-shadow-sm transform -rotate-1">
              BONDING CURVE FILLING! <span className="inline-block animate-bounce">🚀</span>
            </h2>

            {/* Progress Visual */}
            <div className="w-full max-w-3xl bg-[#5C3A10] h-12 md:h-16 rounded-full border-4 border-[#8B5A2B] mb-8 relative overflow-hidden shadow-inner">
               {/* Progress Bar - 92% Filled */}
               <div className="absolute top-0 left-0 h-full bg-[#4ade80] w-[92%] animate-[pulse_2s_infinite] border-r-4 border-[#8B5A2B]">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:40px_40px] animate-[shine_1s_linear_infinite]"></div>
               </div>
               
               {/* Text Overlay */}
               <div className="absolute inset-0 flex items-center justify-center z-10">
                 <span className="font-comic text-2xl md:text-4xl text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.5)] tracking-wider">
                   92% FILLED - ALMOST THERE!
                 </span>
               </div>
            </div>

            {/* Description */}
            <div className="bg-white/90 border-4 border-[#8B5A2B] rounded-2xl p-6 md:p-8 max-w-4xl mb-10 transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-md">
               <p className="text-[#5C3A10] font-bold text-lg md:text-2xl leading-relaxed">
                 We are pumping hard! <span className="text-[#d97706] font-black">IT IS NOT FULLY FILLED YET BRO!</span> <br className="hidden md:block"/>
                 Fill the curve on <span className="underline decoration-4 decoration-[#10B981]">Pump.fun</span> to unlock Raydium liquidity and send this to the moon.
               </p>
               <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6 font-comic text-xl md:text-2xl text-[#8B5A2B]">
                 <span className="flex items-center gap-2"><Zap className="text-[#F4D03F] fill-[#F4D03F]" /> PUMPING NOW</span>
                 <span className="w-2 h-2 rounded-full bg-[#8B5A2B] self-center"></span>
                 <span className="flex items-center gap-2"><Lock size={20} /> RAYDIUM LOCKED</span>
               </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <a 
                href={BUY_LINKS.pumpfun}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-[#4ade80] text-[#064e3b] border-4 border-[#064e3b] rounded-xl font-comic text-2xl md:text-4xl shadow-[6px_6px_0px_0px_#064e3b] hover:shadow-[8px_8px_0px_0px_#064e3b] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 animate-breathing-glow w-full sm:w-auto"
              >
                <span>BUY ON PUMP.FUN</span>
                <ExternalLink size={32} className="group-hover:rotate-12 transition-transform" />
              </a>
              
              <div className="group relative px-8 py-4 bg-gray-400 text-gray-700 border-4 border-gray-600 rounded-xl font-comic text-2xl md:text-3xl shadow-[6px_6px_0px_0px_#4b5563] opacity-80 cursor-not-allowed flex items-center justify-center gap-2 w-full sm:w-auto">
                <span>RAYDIUM (SOON)</span>
                <Lock size={28} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BondingCurve;