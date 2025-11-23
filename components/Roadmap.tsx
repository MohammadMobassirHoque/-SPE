import React, { useEffect, useRef, useState } from 'react';
import { Rocket, Users, Crown, CheckCircle2, Timer } from 'lucide-react';

const Roadmap: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Countdown State
  const [timeLeft, setTimeLeft] = useState({ days: 20, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Initialize target date: 20 days from now for demo purposes to ensure it's always active
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 20);
    const targetTime = targetDate.getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const phases = [
    {
      title: "Phase 1: Launch",
      items: [
        "Website Launch",
        "Contract Deployment",
        "Social Media Setup",
        "Fair Launch on Pump.fun",
        "Community Building"
      ],
      icon: <Rocket className="w-8 h-8 md:w-12 md:h-12 text-[#7a4a10]" />,
      status: "completed"
    },
    {
      title: "Phase 2: Growth",
      items: [
        "CoinGecko Listing",
        "CMC Listing",
        "1,000+ Holders",
        "Trending on Dextools",
        "Key Partnerships"
      ],
      icon: <Users className="w-8 h-8 md:w-12 md:h-12 text-[#7a4a10]" />,
      status: "active"
    },
    {
      title: "Phase 3: Takeover",
      items: [
        "CEX Listings",
        "Merch Store Drop",
        "Supreme NFT Collection",
        "10,000+ Holders",
        "To The Moon 🚀"
      ],
      icon: <Crown className="w-8 h-8 md:w-12 md:h-12 text-[#7a4a10]" />,
      status: "upcoming"
    }
  ];

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-[#FFD700] border-2 border-[#8B5A2B] rounded-xl w-14 h-14 md:w-20 md:h-20 flex items-center justify-center shadow-[4px_4px_0_rgba(139,69,19,0.4)] mb-2 relative overflow-hidden group">
        <div className="absolute top-0 w-full h-[50%] bg-white/20"></div>
        <span className="text-[#5C3A10] font-comic text-xl md:text-4xl leading-none pt-1 group-hover:scale-110 transition-transform">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-[#F4D03F] font-bold text-[10px] md:text-xs tracking-widest">{label}</span>
    </div>
  );

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center relative px-2 w-full">
           <h2 className="text-[#F4D03F] font-comic text-4xl md:text-7xl tracking-wide drop-shadow-[4px_4px_0_rgba(122,74,16,0.5)] transform -rotate-1">
             ROADMAP
           </h2>
           <p className="text-[#FFF8E7] font-bold text-base md:text-xl mt-4 max-w-2xl mx-auto opacity-90">
             Our path to supreme meme dominance. Buckle up!
           </p>

           {/* Event Countdown */}
           <div className="mt-8 md:mt-12 bg-[#5C3A10]/80 border-4 border-[#F4D03F] rounded-2xl p-6 md:p-8 max-w-3xl mx-auto shadow-[8px_8px_0_rgba(0,0,0,0.3)] backdrop-blur-sm relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
             
              {/* Animated Shine */}
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shine pointer-events-none"></div>

              <div className="flex items-center justify-center gap-2 md:gap-3 mb-6 text-[#F4D03F]">
                 <Timer className="w-5 h-5 md:w-8 md:h-8 animate-pulse text-[#4ade80]" />
                 <h3 className="font-comic text-xl md:text-3xl tracking-wide text-center uppercase drop-shadow-md">
                    Major CEX Listing In:
                 </h3>
                 <Timer className="w-5 h-5 md:w-8 md:h-8 animate-pulse text-[#4ade80]" />
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 md:gap-6 relative z-10">
                 <TimeBox value={timeLeft.days} label="DAYS" />
                 <span className="text-[#F4D03F] font-comic text-2xl md:text-4xl mt-3 hidden sm:block animate-pulse">:</span>
                 <TimeBox value={timeLeft.hours} label="HOURS" />
                 <span className="text-[#F4D03F] font-comic text-2xl md:text-4xl mt-3 hidden sm:block animate-pulse">:</span>
                 <TimeBox value={timeLeft.minutes} label="MINS" />
                 <span className="text-[#F4D03F] font-comic text-2xl md:text-4xl mt-3 hidden sm:block animate-pulse">:</span>
                 <TimeBox value={timeLeft.seconds} label="SECS" />
              </div>
           </div>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {phases.map((phase, idx) => (
            <div 
              key={idx} 
              className={`
                bg-[#FFD700] border-4 border-[#8B5A2B] rounded-3xl p-5 md:p-8 
                flex flex-col items-center text-center shadow-[6px_6px_0_rgba(139,69,19,0.4)] md:shadow-[8px_8px_0_rgba(139,69,19,0.4)] 
                relative overflow-hidden h-full
                transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] transform
                ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
                hover:-translate-y-2 hover:shadow-[10px_10px_0_rgba(139,69,19,0.4)] hover:scale-[1.02]
              `}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              
              {/* Phase Badge */}
              <div className="absolute top-3 right-3 md:top-4 md:right-4 z-20">
                 <span className="bg-[#5C3A10] text-[#F4D03F] text-[10px] md:text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full uppercase tracking-wider shadow-sm">
                   Phase 0{idx + 1}
                 </span>
              </div>

              {/* Icon Container */}
              <div className="bg-white p-3 md:p-4 rounded-full border-4 border-[#8B5A2B] mb-4 md:mb-6 shadow-inner relative z-10 mt-2 md:mt-0">
                {phase.icon}
              </div>

              <h3 className="text-[#8B5A2B] font-comic text-2xl md:text-4xl mb-4 md:mb-6 uppercase relative z-10">
                {phase.title}
              </h3>
              
              {/* List Items */}
              <ul className="space-y-3 md:space-y-4 w-full relative z-10 flex-grow px-1">
                {phase.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start md:justify-center gap-2.5 text-[#5C3A10] font-bold text-sm md:text-lg text-left md:text-center leading-snug">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#8B5A2B] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative Background Pattern */}
              <div className="absolute bottom-0 left-0 w-full h-12 bg-white/10 skew-y-3 transform origin-bottom-left pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;