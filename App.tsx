import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import ContractAddress from './components/ContractAddress';
import SocialButton from './components/SocialButton';
import HeroCoin from './components/HeroCoin';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import Roadmap from './components/Roadmap';
import FAQ from './components/FAQ';
import Notification from './components/Notification';
import Giveaway from './components/Giveaway';
import BondingCurve from './components/BondingCurve';
import { CONTRACT_ADDRESS, SOCIAL_LINKS, BUY_LINK } from './constants';

const App: React.FC = () => {
  const [isPumping, setIsPumping] = useState(false);
  const [notification, setNotification] = useState<{
    title: string;
    message: string;
    actionLink?: string;
    actionLabel?: string;
  } | null>(null);

  // Simulate a community announcement event
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification({
        title: "Giveaway Alert! 🎁",
        message: "Win 50,000 $SPE! Check the rules and enter now.",
        actionLink: "#giveaway",
        actionLabel: "Enter Now"
      });
    }, 3000); // Notification appears 3 seconds after load

    return () => clearTimeout(timer);
  }, []);

  const handlePump = () => {
    setIsPumping(true);
    // Reset after animation duration
    setTimeout(() => setIsPumping(false), 150);
  };

  return (
    <div className="min-h-screen bg-pepe-brown flex flex-col relative overflow-x-hidden font-body selection:bg-[#F4D03F] selection:text-[#965e18]">
      
      {/* Background Texture/Gradient Overlay (Subtle) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50 fixed" />

      {/* Navbar */}
      <header className="w-full p-4 md:p-8 flex justify-between items-center relative z-50">
        <button 
          onClick={handlePump}
          className={`font-comic text-4xl md:text-5xl drop-shadow-[2px_4px_0_rgba(0,0,0,0.2)] transition-all duration-150 ease-out cursor-pointer select-none outline-none ${
            isPumping 
              ? 'text-[#4ade80] scale-125 rotate-0 drop-shadow-[0_0_20px_rgba(74,222,128,0.8)]' 
              : 'text-[#F4D03F] -rotate-2 hover:scale-105'
          }`}
          aria-label="Pump the ticker"
        >
          $SPE
        </button>
        <div className="flex gap-3 md:gap-4">
          <SocialButton 
            icon={<img src="https://files.catbox.moe/a36jmz.png" alt="Twitter" className="w-full h-full object-contain" />} 
            href={SOCIAL_LINKS.twitter} 
          />
          <SocialButton 
            icon={<img src="https://files.catbox.moe/8fmms9.png" alt="Telegram" className="w-full h-full object-contain" />} 
            href={SOCIAL_LINKS.telegram} 
          />
          <SocialButton 
            icon={<img src="https://files.catbox.moe/6kyi91.png" alt="Discord" className="w-full h-full object-contain" />} 
            href={SOCIAL_LINKS.discord} 
          />
        </div>
      </header>

      {/* Main Content Wrapper */}
      <main className="flex-grow flex flex-col w-full relative z-10">
        
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-center px-4 md:px-12 lg:px-20 py-12 gap-12 lg:gap-20 max-w-7xl mx-auto w-full">
          
          {/* Left Side: Coin Image */}
          <div className="order-1 lg:order-1 flex justify-center">
            <HeroCoin />
          </div>

          {/* Right Side: Text Content */}
          <div className="order-2 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
            <h1 className="text-[#F4D03F] font-comic text-5xl md:text-7xl lg:text-8xl leading-none mb-6 drop-shadow-[4px_4px_0_rgba(139,69,19,0.5)] italic transform -skew-x-6">
              SUPREME PEPE
            </h1>
            
            <p className="text-[#FFF8E7] font-bold text-lg md:text-xl lg:text-2xl mb-8 uppercase tracking-wide leading-relaxed drop-shadow-md max-w-xl">
              $SPE The Pepe-powered meme coin you can trust! Fully community-driven, LP securely locked, dev renounced, zero rug risk. Safe, fun, and designed for laughs and gains join the $SPE movement today!
            </p>

            <ContractAddress address={CONTRACT_ADDRESS} />

            {/* Action Buttons */}
            <div className="w-full max-w-xl flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <a
                href={BUY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#4ade80] hover:bg-[#22c55e] text-[#064e3b] border-4 border-[#064e3b] hover:border-[#FFD700] rounded-2xl font-comic text-3xl md:text-4xl shadow-[6px_6px_0px_0px_#064e3b] hover:shadow-[8px_8px_0px_0px_#064e3b] hover:scale-105 transition-all duration-300 transform w-full sm:w-auto animate-breathing-glow hover:animate-none"
              >
                <span>BUY NOW</span>
                <ExternalLink className="w-8 h-8 md:w-10 md:h-10 group-hover:rotate-12 transition-transform" strokeWidth={3} />
              </a>
            </div>

          </div>
        </section>

        {/* Bonding Curve Section */}
        <BondingCurve />

        {/* Tokenomics Section */}
        <Tokenomics />

        {/* How To Buy Section */}
        <HowToBuy />

        {/* Roadmap Section */}
        <Roadmap />

        {/* Giveaway Section */}
        <Giveaway />

        {/* FAQ Section */}
        <FAQ />

      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center relative z-10 flex flex-col items-center gap-4 mt-8">
        <p className="text-[#FFD700] font-comic text-sm md:text-base tracking-widest opacity-80">
          © 2025 $SPE. ALL RIGHTS RESERVED
        </p>
      </footer>

      {/* Notification System */}
      {notification && (
        <Notification 
          title={notification.title}
          message={notification.message}
          actionLink={notification.actionLink}
          actionLabel={notification.actionLabel}
          onClose={() => setNotification(null)}
        />
      )}

      {/* Decorative Elements mimicking the screenshot art style */}
      <div className="fixed top-0 right-0 w-64 h-64 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
    </div>
  );
};

export default App;