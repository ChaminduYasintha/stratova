import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const Footer = () => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      href: 'https://wa.me/94776110005',
      icon: WhatsAppIcon,
      hoverClass: 'hover:bg-[#25D366] hover:border-[#25D366]',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/stratova_pvt_ltd/',
      icon: Instagram,
      hoverClass: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-[#dc2743]',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/stratova-private-limited/',
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

