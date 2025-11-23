import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface ContractAddressProps {
  address: string;
}

const ContractAddress: React.FC<ContractAddressProps> = ({ address }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="flex flex-col items-center md:items-start w-full max-w-xl">
      <span className="text-[#F4D03F] font-comic text-sm md:text-lg tracking-wider mb-1 drop-shadow-md uppercase">
        Contract:
      </span>
      <div 
        onClick={handleCopy}
        className={`cursor-pointer group relative w-full flex items-center justify-between bg-[#7a4a10]/50 border-2 rounded-xl py-3 px-4 md:py-4 md:px-6 transition-all duration-300 transform ${
            copied 
            ? 'border-[#4ade80] bg-[#064e3b]/50 scale-105 shadow-[0_0_15px_rgba(74,222,128,0.5)]' 
            : 'border-[#F4D03F] hover:bg-[#7a4a10]/80 hover:scale-[1.02]'
        }`}
      >
        <span className={`font-comic text-xs md:text-lg truncate mr-2 tracking-wider select-all transition-colors duration-300 ${copied ? 'text-[#4ade80]' : 'text-white'}`}>
          {address}
        </span>
        <button 
          className={`transition-transform duration-300 ${copied ? 'scale-110' : 'scale-100'} text-white`}
          aria-label="Copy contract address"
        >
          {copied ? <Check size={24} className="text-[#4ade80]" /> : <Copy size={24} className="group-hover:text-[#F4D03F] transition-colors" />}
        </button>

        {/* Tooltip for feedback */}
        <div 
            className={`absolute -top-10 right-0 bg-[#064e3b] text-[#4ade80] border border-[#4ade80] text-xs font-bold py-1 px-3 rounded-lg shadow-lg transition-all duration-300 transform ${
                copied ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-90 pointer-events-none'
            }`}
        >
            COPIED!
        </div>
      </div>
    </div>
  );
};

export default ContractAddress;