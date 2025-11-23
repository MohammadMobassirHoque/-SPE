import React from 'react';

interface SocialButtonProps {
  icon: React.ReactNode;
  href: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-200"
    >
      {icon}
    </a>
  );
};

export default SocialButton;