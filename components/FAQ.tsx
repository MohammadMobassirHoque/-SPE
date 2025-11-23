import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Supreme Pepe ($SPE)?",
      answer: "$SPE is the ultimate meme coin built on Solana, designed to reign supreme over all other frogs. It's purely for fun, community-driven, and fueled by supreme meme energy."
    },
    {
      question: "Is $SPE safe?",
      answer: "Yes! The Liquidity Pool (LP) is 100% locked and the contract ownership has been renounced. This means the developers cannot mint more tokens or change the tax settings. Rug-proof!"
    },
    {
      question: "What are the taxes?",
      answer: "Zero. Nada. Zilch. $SPE has 0% buy tax and 0% sell tax. You keep what you trade, making it perfect for day trading and holding alike."
    },
    {
      question: "How can I buy $SPE?",
      answer: "You can buy $SPE on Raydium, Jupiter, or Pump.fun. You'll need a Solana wallet (like Phantom) and some SOL. Check out our 'How to Buy' section above for a step-by-step guide."
    },
    {
      question: "What is the utility of $SPE?",
      answer: "$SPE is a community-first meme coin. Its primary utility is building a supreme community of meme lovers. Future utilities may include exclusive access to supreme content, merchandise, and community events."
    },
    {
      question: "How can I get involved with the community beyond social media?",
      answer: "We host regular community calls, meme contests, and raids. The best way to get involved is to be active in Telegram and Discord, help raid posts, and create supreme memes for the community."
    },
    {
      question: "When moon? 🚀",
      answer: "We are building a strong community foundation first. With supreme memes and diamond hands, the moon is just the first stop. Buckle up!"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12 md:py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center relative px-2">
           <h2 className="text-[#F4D03F] font-comic text-4xl md:text-7xl tracking-wide drop-shadow-[4px_4px_0_rgba(122,74,16,0.5)] transform rotate-1">
             FAQ
           </h2>
           <p className="text-[#FFF8E7] font-bold text-base md:text-xl mt-4 max-w-2xl mx-auto opacity-90">
             Got questions? The Supreme One has answers.
           </p>
        </div>

        {/* FAQ Items */}
        <div className="w-full flex flex-col gap-3 md:gap-6">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-[#FFD700] border-4 border-[#8B5A2B] rounded-2xl transition-all duration-300 overflow-hidden shadow-[4px_4px_0_rgba(139,69,19,0.4)] md:shadow-[6px_6px_0_rgba(139,69,19,0.4)] ${openIndex === idx ? 'scale-[1.01] md:scale-[1.02]' : 'hover:scale-[1.005] md:hover:scale-[1.01]'}`}
            >
              <button 
                onClick={() => toggleFAQ(idx)}
                className="w-full p-4 md:p-6 flex items-center justify-between text-left focus:outline-none gap-3 group"
              >
                <div className="flex items-center gap-3 md:gap-4 flex-1">
                  <div className="bg-[#5C3A10] text-[#F4D03F] p-1.5 md:p-2 rounded-lg hidden sm:block flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <HelpCircle size={20} className="md:w-6 md:h-6" />
                  </div>
                  <span className="text-[#5C3A10] font-comic text-lg md:text-2xl uppercase tracking-wide leading-tight">
                    {faq.question}
                  </span>
                </div>
                <div className={`bg-[#5C3A10] text-[#F4D03F] p-1 rounded-full border-2 border-[#F4D03F] flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : 'rotate-0'}`}>
                  {openIndex === idx ? <Minus size={16} className="md:w-5 md:h-5" /> : <Plus size={16} className="md:w-5 md:h-5" />}
                </div>
              </button>
              
              <div 
                className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                  openIndex === idx ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className={`p-4 md:p-6 pt-0 text-[#8B5A2B] font-bold text-sm md:text-lg leading-relaxed border-t-2 border-[#8B5A2B]/20 mx-4 md:mx-6 mt-2 pb-6 transition-all duration-500 transform ${
                    openIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                  }`}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;