import React, { useEffect, useState } from 'react';
import { Lock, ExternalLink, Zap, Loader2, RefreshCw } from 'lucide-react';
import { BUY_LINKS, CONTRACT_ADDRESS } from '../constants';

interface BondingCurveProps {
  tokenMint?: string;
}

interface PumpFunTokenData {
  mint: string;
  name: string;
  symbol: string;
  description: string;
  image_uri: string;
  metadata_uri: string;
  twitter: string | null;
  telegram: string | null;
  bonding_curve: string;
  associated_bonding_curve: string;
  creator: string;
  created_timestamp: number;
  raydium_pool: string | null;
  complete: boolean;
  virtual_sol_reserves: number;
  virtual_token_reserves: number;
  total_supply: number;
  website: string | null;
  show_name: boolean;
  king_of_the_hill_timestamp: number | null;
  market_cap: number;
  nsfw: boolean;
  market_id: number | null;
  last_trade_timestamp: number;
  reply_count: number;
  last_reply: number;
}

const BondingCurve: React.FC<BondingCurveProps> = ({ tokenMint = CONTRACT_ADDRESS }) => {
  const [data, setData] = useState<PumpFunTokenData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Constants for Pump.fun Bonding Curve Logic
  const INITIAL_VIRTUAL_SOL = 30;
  const TARGET_REAL_SOL_RAISE = 85; 
  const LAMPORTS_PER_SOL = 1_000_000_000;

  const fetchData = async () => {
    try {
      setError(false);
      setIsAnimating(true);
      
      const response = await fetch(`https://frontend-api.pump.fun/coins/${tokenMint}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const result: PumpFunTokenData = await response.json();
      
      // Safety check: Ensure we actually got an object back
      if (!result) throw new Error("Empty result");
      
      setData(result);

      // --- Precise Progress Calculation with Safety Checks ---
      if (result.complete) {
        setProgress(100);
      } else {
        let currentProgress = 0;

        // Check if reserves are available and valid numbers
        if (typeof result.virtual_sol_reserves === 'number' && result.virtual_sol_reserves > 0) {
           const reserves = result.virtual_sol_reserves > 1000000 
             ? result.virtual_sol_reserves / LAMPORTS_PER_SOL 
             : result.virtual_sol_reserves;

           const realSolRaised = reserves - INITIAL_VIRTUAL_SOL;
           currentProgress = (realSolRaised / TARGET_REAL_SOL_RAISE) * 100;
        } else if (typeof result.market_cap === 'number') {
           // Fallback to market cap
           const mc = result.market_cap; 
           currentProgress = ((mc - 30) / 85) * 100; 
        }

        // Sanity check for NaN
        if (isNaN(currentProgress)) currentProgress = 0;

        setProgress(Math.min(Math.max(currentProgress, 0), 99));
      }
      
      setLoading(false);
      setTimeout(() => setIsAnimating(false), 500);

    } catch (err) {
      // API fetch failed, falling back to simulation mode.
      setError(true);
      setLoading(false);
      setIsAnimating(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, [tokenMint]);

  // Simulation Effect
  useEffect(() => {
    if (error) {
      const interval = setInterval(() => {
        // Safe simulated fluctuation
        setProgress((prev) => {
          const next = 90 + Math.random() * 5;
          return isNaN(next) ? 90 : next;
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [error]);

  const isMigrated = data?.complete || progress >= 100;
  
  // Safe formatting to prevent crashes if data is partial
  const displayProgress = !isNaN(progress) ? progress.toFixed(2) : "0.00";
  
  const displayMarketCap = (data && typeof data.market_cap === 'number')
    ? `~${data.market_cap.toFixed(2)} SOL` 
    : "Fetching...";

  return (
    <section className="w-full pb-12 md:pb-24 px-4 relative z-10 -mt-2 md:-mt-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Visual Connector Chains */}
        <div className="flex justify-between w-full max-w-[80%] md:max-w-2xl px-4 md:px-12 relative z-0 opacity-90">
             <div className="flex flex-col items-center animate-wiggle" style={{ animationDuration: '4s' }}>
                <div className="w-3 md:w-4 h-16 md:h-28 bg-gradient-to-b from-[#5C3A10] to-[#8B5A2B] border-x-2 border-[#5C3A10]"></div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#8B5A2B] border-4 border-[#5C3A10] -mt-3 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#5C3A10] rounded-full"></div>
                </div>
             </div>
             <div className="flex flex-col items-center animate-wiggle" style={{ animationDuration: '5s', animationDelay: '0.5s' }}>
                <div className="w-3 md:w-4 h-16 md:h-28 bg-gradient-to-b from-[#5C3A10] to-[#8B5A2B] border-x-2 border-[#5C3A10]"></div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#8B5A2B] border-4 border-[#5C3A10] -mt-3 flex items-center justify-center">
                   <div className="w-2 h-2 bg-[#5C3A10] rounded-full"></div>
                </div>
             </div>
        </div>

        {/* Main Card */}
        <div className="w-full bg-[#FFD700] border-4 border-[#8B5A2B] rounded-3xl p-6 md:p-12 shadow-[12px_12px_0_rgba(139,69,19,0.4)] relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300 z-10 -mt-4">
          
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] pointer-events-none"></div>
          
          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2 animate-pulse shadow-md z-20">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            {error ? "SIMULATED LIVE" : "LIVE UPDATES"}
          </div>

          <button 
            onClick={fetchData}
            className={`absolute top-4 left-4 text-[#8B5A2B] hover:text-[#5C3A10] transition-colors p-2 z-20 ${isAnimating ? 'animate-spin' : ''}`}
            title="Refresh Data"
          >
            <RefreshCw size={24} />
          </button>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            
            <h2 className="text-[#8B5A2B] font-comic text-5xl md:text-7xl mb-2 uppercase tracking-wide drop-shadow-sm transform -rotate-1">
              BONDING CURVE <span className={isMigrated ? "text-[#4ade80]" : "text-[#d97706]"}>{isMigrated ? "FILLED!" : "FILLING!"}</span> <span className="inline-block animate-bounce">🚀</span>
            </h2>

            <div className="mb-6 flex gap-4 items-center">
                <div className="font-bold text-[#5C3A10] bg-white/50 px-4 py-1 rounded-lg">
                   Market Cap: <span className="text-[#8B5A2B]">{loading ? "..." : displayMarketCap}</span>
                </div>
            </div>

            {/* Progress Visual */}
            <div className="w-full max-w-3xl bg-[#5C3A10] h-12 md:h-16 rounded-full border-4 border-[#8B5A2B] mb-8 relative overflow-hidden shadow-inner">
               <div 
                 className="absolute top-0 left-0 h-full bg-[#4ade80] border-r-4 border-[#8B5A2B] transition-all duration-1000 ease-out relative"
                 style={{ width: `${progress}%` }}
               >
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:40px_40px] animate-[shine_1s_linear_infinite]"></div>
                  
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-20 h-20 bg-white/20 blur-xl rounded-full"></div>
               </div>
               
               <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
                 <span className="font-comic text-2xl md:text-4xl text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.5)] tracking-wider flex items-center gap-2">
                   {loading ? (
                     <><Loader2 className="animate-spin" /> CHECKING CURVE...</>
                   ) : (
                     <>
                        {displayProgress}% {isMigrated ? "COMPLETED" : "FILLED"}
                     </>
                   )}
                 </span>
               </div>
            </div>

            {/* Description */}
            <div className="bg-white/90 border-4 border-[#8B5A2B] rounded-2xl p-6 md:p-8 max-w-4xl mb-10 transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-md">
               {isMigrated ? (
                 <p className="text-[#064e3b] font-bold text-lg md:text-2xl leading-relaxed">
                   The Bonding Curve is <span className="font-black text-[#10B981]">100% FILLED!</span> <br className="hidden md:block"/>
                   Trading is now live on <span className="underline decoration-4 decoration-[#10B981]">Raydium</span> and <span className="underline decoration-4 decoration-[#3b82f6]">Jupiter</span>. LFG! 🚀
                 </p>
               ) : (
                 <p className="text-[#5C3A10] font-bold text-lg md:text-2xl leading-relaxed">
                   We are pumping hard! <span className="text-[#d97706] font-black">IT IS NOT FULLY FILLED YET BRO!</span> <br className="hidden md:block"/>
                   Fill the curve on <span className="underline decoration-4 decoration-[#10B981]">Pump.fun</span> to unlock Raydium liquidity and send this to the moon.
                 </p>
               )}
               
               <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6 font-comic text-xl md:text-2xl text-[#8B5A2B]">
                 <span className={`flex items-center gap-2 ${isMigrated ? "opacity-50" : "animate-pulse"}`}>
                    <Zap className="text-[#F4D03F] fill-[#F4D03F]" /> {isMigrated ? "PUMP.FUN COMPLETED" : "PUMPING NOW"}
                 </span>
                 <span className="w-2 h-2 rounded-full bg-[#8B5A2B] self-center"></span>
                 <span className={`flex items-center gap-2 ${isMigrated ? "text-[#10B981]" : ""}`}>
                    <Lock size={20} className={isMigrated ? "text-[#10B981]" : ""} /> {isMigrated ? "RAYDIUM UNLOCKED" : "RAYDIUM LOCKED"}
                 </span>
               </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <a 
                href={BUY_LINKS.pumpfun}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative px-8 py-4 bg-[#4ade80] text-[#064e3b] border-4 border-[#064e3b] rounded-xl font-comic text-2xl md:text-4xl shadow-[6px_6px_0px_0px_#064e3b] hover:shadow-[8px_8px_0px_0px_#064e3b] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 w-full sm:w-auto ${!isMigrated ? "animate-breathing-glow" : ""}`}
              >
                <span>BUY ON PUMP.FUN</span>
                <ExternalLink size={32} className="group-hover:rotate-12 transition-transform" />
              </a>
              
              {isMigrated ? (
                 <a 
                   href={BUY_LINKS.raydium}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group relative px-8 py-4 bg-[#8b5cf6] text-white border-4 border-[#5b21b6] rounded-xl font-comic text-2xl md:text-4xl shadow-[6px_6px_0px_0px_#5b21b6] hover:shadow-[8px_8px_0px_0px_#5b21b6] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 animate-breathing-glow w-full sm:w-auto"
                 >
                   <span>TRADE ON RAYDIUM</span>
                   <ExternalLink size={32} className="group-hover:rotate-12 transition-transform" />
                 </a>
              ) : (
                <div className="group relative px-8 py-4 bg-gray-400 text-gray-700 border-4 border-gray-600 rounded-xl font-comic text-2xl md:text-3xl shadow-[6px_6px_0px_0px_#4b5563] opacity-80 cursor-not-allowed flex items-center justify-center gap-2 w-full sm:w-auto">
                  <span>RAYDIUM (SOON)</span>
                  <Lock size={28} />
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BondingCurve;