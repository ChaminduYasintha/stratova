import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com',
      icon: Facebook,
      hoverClass: 'hover:bg-[#1877F2] hover:border-[#1877F2]',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com',
      icon: Instagram,
      hoverClass: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-[#dc2743]',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com',
      icon: Linkedin,
      hoverClass: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]',
    },
  ];

  return (
    <footer className="bg-stratova-dark text-white py-8 border-t border-white/10">
      <div className="container mx-auto px-8 md:px-16 flex flex-col items-center justify-center gap-4 text-center">
        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Stratova on ${item.name}`}
                className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${item.hoverClass}`}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        {/* Copyright & Powered by Code Hub */}
        <div className="text-gray-400 text-sm flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
          <span>© {new Date().getFullYear()} Stratova Private Limited. All Rights Reserved.</span>
          <span className="hidden sm:inline text-gray-600">•</span>
          <span>
            Powered by{' '}
            <a
              href="https://codehub.lk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Code Hub
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

