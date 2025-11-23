import React, { useEffect, useState } from 'react';
import { X, Bell, ExternalLink, ArrowRight } from 'lucide-react';

interface NotificationProps {
  title: string;
  message: string;
  duration?: number; // Auto-dismiss duration in ms. If 0, it stays until dismissed manually.
  onClose: () => void;
  actionLink?: string;
  actionLabel?: string;
}

const Notification: React.FC<NotificationProps> = ({ 
  title, 
  message, 
  duration = 10000, 
  onClose,
  actionLink,
  actionLabel
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const enterTimer = setTimeout(() => setIsVisible(true), 500);

    let dismissTimer: ReturnType<typeof setTimeout>;
    if (duration > 0) {
      dismissTimer = setTimeout(() => {
        handleClose();
      }, duration);
    }

    return () => {
      clearTimeout(enterTimer);
      if (dismissTimer) clearTimeout(dismissTimer);
    };
  }, [duration]);

  const handleClose = () => {
    setIsClosing(true);
    setIsVisible(false);
    // Wait for animation to finish before unmounting
    setTimeout(onClose, 600);
  };

  const isExternal = actionLink && (actionLink.startsWith('http') || actionLink.startsWith('www'));

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isExternal && actionLink?.startsWith('#')) {
      e.preventDefault();
      const targetId = actionLink.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        handleClose(); // Dismiss notification after action is taken
      }
    }
  };

  return (
    <div 
      className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] max-w-[90vw] w-full md:w-[400px] transition-all duration-500 cubic-bezier(0.68, -0.55, 0.265, 1.55) transform ${
        isVisible && !isClosing 
          ? 'translate-y-0 opacity-100 translate-x-0' 
          : 'translate-y-20 opacity-0 translate-x-10'
      }`}
    >
      <div className="bg-[#FFD700] border-4 border-[#8B5A2B] rounded-2xl shadow-[8px_8px_0_rgba(139,69,19,0.4)] p-4 flex gap-4 items-start relative overflow-hidden group">
        
        {/* Shine effect */}
        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-shine"></div>
        
        {/* Icon */}
        <div className="bg-[#8B5A2B] p-2.5 rounded-xl text-[#F4D03F] shrink-0 relative z-10 shadow-inner">
          <Bell size={24} className="group-hover:animate-[wiggle_1s_ease-in-out_infinite]" />
        </div>
        
        {/* Content */}
        <div className="flex-1 relative z-10">
          <div className="flex justify-between items-start">
            <h3 className="font-comic text-[#8B5A2B] text-xl uppercase tracking-wide leading-none mb-1.5 drop-shadow-sm pt-1">{title}</h3>
            <button 
              onClick={handleClose}
              className="text-[#8B5A2B]/70 hover:text-[#5C3A10] hover:scale-110 transition-transform -mt-1 -mr-1 p-1"
              aria-label="Close notification"
            >
              <X size={20} strokeWidth={3} />
            </button>
          </div>
          
          <p className="text-[#5C3A10] font-bold text-sm leading-snug mb-3 opacity-90">
            {message}
          </p>

          {actionLink && (
            <a 
              href={actionLink} 
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              onClick={handleLinkClick}
              className="inline-flex items-center gap-1.5 bg-[#064e3b] text-[#4ade80] px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-[#065f46] hover:scale-105 transition-all shadow-[2px_2px_0_#042f2e]"
            >
              {actionLabel || "Check it out"} 
              {isExternal ? <ExternalLink size={12} /> : <ArrowRight size={12} />}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;