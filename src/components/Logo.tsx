import React from 'react';

export const Logo = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center ${className}`}>
    <img
      src="/STRATOVA LOGO.png"
      alt="Stratova Logo"
      className="w-full h-full object-contain"
    />
  </div>
);
