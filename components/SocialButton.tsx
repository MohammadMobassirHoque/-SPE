
import React from 'react';

interface SocialButtonProps {
  icon: React.ReactNode;
  href: string;
  label?: string; // Optional label for stats like "1.2k"
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-center justify-center transition-all duration-200 ${label ? 'bg-[#7a4a10]/40 rounded-full pr-3 pl-1 py-1 hover:bg-[#7a4a10]/60' : 'w-10 h-10 md:w-12 md:h-12 hover:scale-110'}`}
    >
      <div className={`${label ? 'w-8 h-8 md:w-10 md:h-10' : 'w-full h-full'} flex items-center justify-center transition-transform duration-200 ${!label && 'group-hover:scale-110'}`}>
        {icon}
      </div>
      
      {label && (
        <span className="ml-2 text-[#F4D03F] font-comic font-bold text-sm md:text-base tracking-wide leading-none group-hover:text-white transition-colors">
          {label}
        </span>
      )}
    </a>
  );
};

export default SocialButton;
