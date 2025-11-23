import React, { useState, useEffect } from 'react';

interface ClickEffect {
  id: number;
  x: number;
  y: number;
  rotation: number;
}

const ClickEffects: React.FC = () => {
  const [clicks, setClicks] = useState<ClickEffect[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const id = Date.now() + Math.random();
      const rotation = Math.random() * 40 - 20; // Random rotation between -20deg and 20deg
      
      // Use clientX/Y for fixed positioning relative to viewport
      const newClick = { id, x: e.clientX, y: e.clientY, rotation };
      
      setClicks(prev => [...prev, newClick]);

      // Remove the effect after animation finishes
      setTimeout(() => {
        setClicks(prev => prev.filter(c => c.id !== id));
      }, 600);
    };

    // Use capture phase to ensure we catch clicks even on buttons
    window.addEventListener('click', handleClick, true);
    return () => window.removeEventListener('click', handleClick, true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes popFadeOut {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0.5) rotate(var(--tw-rotate));
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -150%) scale(1.2) rotate(var(--tw-rotate));
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -250%) scale(1.4) rotate(var(--tw-rotate));
          }
        }
        .animate-pop-fade {
          animation: popFadeOut 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .text-shadow-outline {
          text-shadow: -2px -2px 0 #064e3b, 2px -2px 0 #064e3b, -2px 2px 0 #064e3b, 2px 2px 0 #064e3b;
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
        {clicks.map(click => (
          <div
            key={click.id}
            className="absolute will-change-transform"
            style={{ 
              left: click.x, 
              top: click.y
            }}
          >
            <div 
                className="font-comic font-black text-4xl md:text-5xl text-[#4ade80] text-shadow-outline select-none whitespace-nowrap animate-pop-fade"
                style={{ '--tw-rotate': `${click.rotation}deg` } as React.CSSProperties}
            >
                $SPE
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ClickEffects;