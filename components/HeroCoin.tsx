
import React from 'react';
import { TOKEN_IMAGE } from '../constants';

interface HeroCoinProps {
  imageUrl?: string;
}

const HeroCoin: React.FC<HeroCoinProps> = ({ imageUrl }) => {
  const displayImage = imageUrl || TOKEN_IMAGE;

  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] flex-shrink-0 flex items-center justify-center">
      {/* Floating Animation Wrapper */}
      <div className="w-full h-full animate-float">
        {/* Wiggle/Rotation Animation Wrapper */}
        <div className="w-full h-full animate-wiggle relative">
          
          {/* "Supreme" Glow Effect behind the image - Reduced intensity slightly for subtlety */}
          <div className="absolute inset-0 bg-[#FFD700] blur-[50px] opacity-40 rounded-full animate-pulse"></div>
          
          {/* Main Image */}
          <img 
            src={displayImage} 
            alt="Token Logo" 
            className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-500 cursor-pointer rounded-full"
          />

          {/* Shimmer Effect - Masked to Image to look like light reflecting off the coin */}
          <div 
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              maskImage: `url(${displayImage})`,
              WebkitMaskImage: `url(${displayImage})`,
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center'
            }}
          >
             <div className="absolute top-0 w-[60%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shine blur-[3px]"></div>
          </div>
          
          {/* Sparkling Overlay - Slower ping for subtlety */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-30 mix-blend-overlay">
            <div className="absolute top-[20%] right-[20%] w-6 h-6 bg-white rotate-45 blur-[2px] animate-[ping_4s_infinite]"></div>
            <div className="absolute bottom-[30%] left-[20%] w-4 h-4 bg-white rotate-45 blur-[2px] animate-[ping_5s_infinite_1s]"></div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroCoin;
