import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, TrendingUp } from 'lucide-react';

const SocialProof: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "PepeLord_69",
      handle: "@pepelord",
      content: "I've seen many frogs, but none as Supreme as this one. $SPE is literally printing meme history right now. 🐸🚀",
      avatar: "👑"
    },
    {
      name: "SolanaChad",
      handle: "@solchad",
      content: "Dev is based, community is unhinged (in a good way). This is exactly what I look for in a moonshot. 💎🙌",
      avatar: "💪"
    },
    {
      name: "DogeKiller",
      handle: "@doge_dead",
      content: "Sold my car for $SPE. Walking to work but my portfolio is flying. Best decision of my life.",
      avatar: "🏎️"
    }
  ];

  const platforms = [
    { name: "CoinGecko", status: "AS SEEN ON", color: "bg-green-500", icon: "🦎" },
    { name: "Dextools", status: "TRENDING #1", color: "bg-blue-500", icon: <TrendingUp size={24} /> },
    { name: "DexScreener", status: "TOP GAINER", color: "bg-slate-700", icon: "🦅" },
    { name: "Phantom", status: "VERIFIED", color: "bg-[#AB9FF2]", icon: "👻" }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto rotate
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-12 md:py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
           <h2 className="text-[#F4D03F] font-comic text-5xl md:text-7xl tracking-wide drop-shadow-[4px_4px_0_rgba(122,74,16,0.5)] transform rotate-1">
             SOCIAL PROOF
           </h2>
        </div>

        {/* Platforms / Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20 w-full">
          {platforms.map((p, idx) => (
            <div key={idx} className="bg-white border-4 border-[#8B5A2B] rounded-xl p-3 md:p-4 flex items-center gap-3 md:gap-4 shadow-[6px_6px_0_rgba(139,69,19,0.4)] transform hover:scale-105 transition-transform cursor-default select-none">
               <div className={`w-10 h-10 md:w-12 md:h-12 ${p.color} rounded-lg flex items-center justify-center text-white font-bold text-xl md:text-2xl`}>
                 {p.icon}
               </div>
               <div className="text-left">
                 <div className="text-[#8B5A2B] text-[10px] md:text-xs font-bold tracking-widest">{p.status}</div>
                 <div className="text-[#5C3A10] font-comic text-xl md:text-2xl leading-none">{p.name}</div>
               </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative w-full max-w-3xl px-4 md:px-0">
          {/* Main Card */}
          <div className="bg-[#FFD700] border-4 border-[#8B5A2B] rounded-3xl p-8 md:p-12 shadow-[12px_12px_0_rgba(139,69,19,0.4)] relative min-h-[300px] flex flex-col justify-center">
            
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-8 text-[#8B5A2B] bg-[#FFD700] border-4 border-[#8B5A2B] rounded-full p-3 z-10">
              <Quote size={32} fill="currentColor" />
            </div>

            <div className="flex flex-col items-center text-center animate-float">
              <div className="text-6xl mb-6 drop-shadow-md">{testimonials[activeIndex].avatar}</div>
              <p className="text-[#5C3A10] font-comic text-2xl md:text-3xl mb-8 leading-relaxed italic">
                "{testimonials[activeIndex].content}"
              </p>
              
              <div className="flex flex-col items-center">
                <span className="text-[#8B5A2B] font-black text-xl uppercase tracking-wider">{testimonials[activeIndex].name}</span>
                <span className="text-[#8B5A2B]/70 font-bold text-sm">{testimonials[activeIndex].handle}</span>
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mt-4 text-[#8B5A2B]">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} className="drop-shadow-sm" />)}
              </div>
            </div>

          </div>

          {/* Controls */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-2 md:-left-16 transform -translate-y-1/2 bg-[#5C3A10] text-[#F4D03F] p-2 md:p-3 rounded-full border-2 border-[#F4D03F] hover:scale-110 hover:bg-[#8B5A2B] transition-all z-20 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-2 md:-right-16 transform -translate-y-1/2 bg-[#5C3A10] text-[#F4D03F] p-2 md:p-3 rounded-full border-2 border-[#F4D03F] hover:scale-110 hover:bg-[#8B5A2B] transition-all z-20 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight size={32} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-4 h-4 rounded-full border-2 border-[#8B5A2B] transition-all duration-300 ${idx === activeIndex ? 'bg-[#F4D03F] scale-125' : 'bg-[#5C3A10]'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default SocialProof;