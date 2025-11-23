import React, { useState } from 'react';
import { Gift, Twitter, Wallet, Send, CheckCircle2, AlertTriangle, ShieldCheck, Pin, Loader2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Giveaway: React.FC = () => {
  const [wallet, setWallet] = useState('');
  const [tweetLink, setTweetLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const WEB3FORMS_ACCESS_KEY = "bd893563-b60f-4a6b-ac43-25a95b093821";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New $SPE Giveaway Submission",
          from_name: "SPE Website",
          wallet_address: wallet,
          tweet_proof: tweetLink,
          message: `New Entry Details:\n\nWallet: ${wallet}\nTweet: ${tweetLink}`
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        // If the access key is invalid or missing
        setError(result.message || "Something went wrong. Please check your Access Key.");
      }
    } catch (err) {
      setError("Failed to submit. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="giveaway" className="w-full py-12 md:py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="mb-12 text-center">
           <h2 className="text-[#F4D03F] font-comic text-5xl md:text-7xl tracking-wide drop-shadow-[4px_4px_0_rgba(122,74,16,0.5)] transform -rotate-1">
             GIVEAWAY
           </h2>
           <div className="flex items-center justify-center gap-3 mt-4">
             <Gift className="text-[#4ade80] w-8 h-8 md:w-12 md:h-12 animate-bounce" />
             <p className="text-white font-bold text-xl md:text-2xl uppercase tracking-wider">
               50,000 Coin Community Giveaway
             </p>
             <Gift className="text-[#4ade80] w-8 h-8 md:w-12 md:h-12 animate-bounce" />
           </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Details & Rules */}
          <div className="space-y-6">
            
            {/* Intro Card */}
            <div className="bg-[#FFD700] border-4 border-[#8B5A2B] rounded-3xl p-6 md:p-8 shadow-[8px_8px_0_rgba(139,69,19,0.4)] relative overflow-hidden">
               <p className="text-[#5C3A10] font-bold text-lg md:text-xl leading-relaxed text-center md:text-left">
                 If we reach our first <span className="text-[#8B5A2B] font-black">1,000 holders</span>, we’re dropping a massive <span className="text-[#8B5A2B] font-black">50,000 $SPE</span> giveaway to our loyal community!💛
               </p>
               <div className="mt-4 pt-4 border-t-2 border-[#8B5A2B]/20">
                  <p className="text-[#5C3A10] font-bold text-lg md:text-xl text-center md:text-left">
                    To participate, hold at least <span className="text-[#064e3b] font-black">150 $SPE</span>, provide wallet address and Twitter proof link.
                  </p>
               </div>
            </div>

            {/* How to Participate */}
            <div className="bg-white/90 border-4 border-[#8B5A2B] rounded-3xl p-6 md:p-8 shadow-[8px_8px_0_rgba(139,69,19,0.4)]">
              <h3 className="text-[#8B5A2B] font-comic text-3xl mb-4 flex items-center gap-2">
                <CheckCircle2 /> HOW TO PARTICIPATE
              </h3>
              <ul className="space-y-3 font-bold text-[#5C3A10]">
                <li className="flex gap-3 items-start">
                  <span className="bg-[#8B5A2B] text-[#FFD700] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <span>Hold minimum <span className="font-black text-[#064e3b] text-lg">150 $SPE</span> in your wallet</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="bg-[#8B5A2B] text-[#FFD700] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <span>Follow us on Twitter (<a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#8B5A2B]/80">@SPE_DevSahik</a>)</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="bg-[#8B5A2B] text-[#FFD700] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <span>Tweet about $SPE & why you're holding</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="bg-[#8B5A2B] text-[#FFD700] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <span>Tag @SPE_DevSahik + use hashtag #SPEArmy</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="bg-[#8B5A2B] text-[#FFD700] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
                  <span>Submit your wallet address and tweet proof link below</span>
                </li>
              </ul>
            </div>

            {/* Required Proof */}
            <div className="bg-[#7a4a10]/50 border-2 border-[#8B5A2B] rounded-3xl p-6 backdrop-blur-sm">
               <h4 className="text-[#F4D03F] font-comic text-xl mb-3 flex items-center gap-2">
                 <Pin className="text-[#4ade80]" /> REQUIRED PROOF
               </h4>
               <ul className="space-y-2 text-white font-bold text-sm md:text-base">
                 <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-[#4ade80] flex-shrink-0" /> Public wallet address</li>
                 <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-[#4ade80] flex-shrink-0" /> Tweet link</li>
                 <li className="flex gap-2 items-center"><CheckCircle2 className="w-5 h-5 text-[#4ade80] flex-shrink-0" /> Valid Twitter account (not private)</li>
               </ul>
            </div>

             {/* Rules */}
             <div className="bg-[#8B5A2B] border-4 border-[#F4D03F] rounded-3xl p-6 md:p-8 shadow-[8px_8px_0_rgba(0,0,0,0.2)] text-[#FFD700]">
              <h3 className="font-comic text-3xl mb-4 flex items-center gap-2">
                <AlertTriangle /> RULES
              </h3>
              <ul className="space-y-2 font-bold text-sm md:text-base">
                <li className="flex items-center gap-2"><span className="text-red-400">🚫</span> No multi-wallet farming</li>
                <li className="flex items-center gap-2"><span className="text-red-400">🚫</span> No bots or fake accounts</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✅</span> Wallet must still hold 150+ $SPE</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✅</span> Team reserves right to verify entries</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Form & Info */}
          <div className="space-y-6">
            
             {/* Form */}
             <div className="bg-[#FFD700] border-4 border-[#8B5A2B] rounded-3xl p-6 md:p-8 shadow-[8px_8px_0_rgba(139,69,19,0.4)] relative">
                <h3 className="text-[#8B5A2B] font-comic text-3xl mb-2 text-center uppercase">Submit Entry</h3>
                <p className="text-[#5C3A10] font-bold text-center mb-6 text-sm">
                  Fill out the form below after tweeting!
                </p>
                
                {submitted ? (
                  <div className="bg-[#4ade80] border-2 border-[#064e3b] rounded-xl p-8 text-center animate-breathing-glow flex flex-col items-center justify-center min-h-[300px]">
                    <div className="bg-white p-4 rounded-full mb-4 shadow-md">
                      <CheckCircle2 size={48} className="text-[#064e3b]" />
                    </div>
                    <h4 className="text-[#064e3b] font-comic text-3xl mb-2">SUCCESS!</h4>
                    <p className="text-[#064e3b] font-bold text-lg mb-4">Your entry has been recorded.</p>
                    <p className="text-[#064e3b]/80 text-sm max-w-xs mx-auto">
                      Good luck, Supreme One! We will announce the winners on our social channels. 🍀
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    {error && (
                      <div className="bg-red-500/20 border-2 border-red-500 text-red-700 text-sm p-3 rounded-xl font-bold text-center">
                        {error}
                      </div>
                    )}

                    <div>
                      <label className="block text-[#8B5A2B] font-bold text-sm uppercase mb-1 ml-1">Wallet Address</label>
                      <div className="relative">
                        <Wallet className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8B5A2B]" size={20} />
                        <input 
                          type="text" 
                          name="wallet"
                          placeholder="Solana Address..."
                          required
                          value={wallet}
                          onChange={(e) => setWallet(e.target.value)}
                          className="w-full bg-white border-2 border-[#8B5A2B] rounded-xl py-3 pl-10 pr-4 font-bold text-[#5C3A10] placeholder-[#8B5A2B]/50 focus:outline-none focus:border-[#064e3b] focus:ring-2 focus:ring-[#4ade80]/50 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#8B5A2B] font-bold text-sm uppercase mb-1 ml-1">Tweet Link</label>
                      <div className="relative">
                        <Twitter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8B5A2B]" size={20} />
                        <input 
                          type="url" 
                          name="tweet_link"
                          placeholder="https://x.com/..."
                          required
                          value={tweetLink}
                          onChange={(e) => setTweetLink(e.target.value)}
                          className="w-full bg-white border-2 border-[#8B5A2B] rounded-xl py-3 pl-10 pr-4 font-bold text-[#5C3A10] placeholder-[#8B5A2B]/50 focus:outline-none focus:border-[#064e3b] focus:ring-2 focus:ring-[#4ade80]/50 transition-all"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 bg-[#064e3b] text-[#4ade80] font-comic text-2xl py-3 rounded-xl border-b-4 border-[#042f2e] hover:border-b-0 hover:translate-y-1 active:border-b-0 active:translate-y-1 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:border-b-4"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={24} className="animate-spin" /> SENDING...
                        </>
                      ) : (
                        <>
                          <Send size={24} /> SUBMIT ENTRY
                        </>
                      )}
                    </button>
                    <p className="text-[#8B5A2B]/60 text-xs text-center font-bold mt-2">
                      Please ensure your tweet is public so we can verify.
                    </p>
                  </form>
                )}
             </div>

             {/* Winner Selection Info */}
             <div className="bg-[#7a4a10]/50 border-2 border-[#8B5A2B] rounded-3xl p-6 backdrop-blur-sm">
               <h4 className="text-[#F4D03F] font-comic text-xl mb-3 flex items-center gap-2">
                 <ShieldCheck className="text-[#4ade80]" /> WINNER SELECTION
               </h4>
               <ul className="space-y-2 text-white font-bold text-sm">
                 <li className="flex gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] mt-2 flex-shrink-0" />
                   <span>Random selection after 1,000 holders milestone</span>
                 </li>
                 <li className="flex gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] mt-2 flex-shrink-0" />
                   <span>Winners announced on Twitter & Telegram & DISCORD</span>
                 </li>
                 <li className="flex gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#F4D03F] mt-2 flex-shrink-0" />
                   <span>Rewards distributed directly to wallet</span>
                 </li>
               </ul>
             </div>

             <div className="text-center mt-4">
                <p className="text-[#F4D03F] font-comic text-lg transform rotate-1">"Because the community built this — and deserves the reward!" 🤝</p>
             </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Giveaway;