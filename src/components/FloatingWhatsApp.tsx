import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber = '94776110005',
  defaultMessage = 'Hello Stratova, I would like to inquire about your services.',
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  // Automatically show greeting badge after a short delay on desktop
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasDismissed) {
        setShowTooltip(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [hasDismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
    setHasDismissed(true);
  };

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside 
      aria-label="WhatsApp Contact Support"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[999] flex items-end gap-3 select-none"
    >
      {/* Greeting Bubble / Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="hidden sm:flex items-center gap-3 bg-white text-stratova-dark px-4 py-3 rounded-2xl shadow-2xl border border-gray-100 max-w-xs relative group cursor-pointer"
            onClick={() => window.open(whatsappUrl, '_blank', 'noopener,noreferrer')}
          >
            {/* Pulsing online indicator */}
            <div className="relative flex shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] absolute inset-0 animate-ping opacity-75"></span>
            </div>

            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Stratova Support
              </span>
              <span className="text-sm font-medium text-stratova-dark leading-snug">
                Need assistance? Chat with us on WhatsApp!
              </span>
            </div>

            {/* Close / Dismiss button */}
            <button
              type="button"
              onClick={handleDismiss}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100 -mr-1"
              aria-label="Close message"
            >
              <X size={16} />
            </button>

            {/* Bubble Tail Pointing Right */}
            <div className="absolute right-[-6px] bottom-5 w-3 h-3 bg-white rotate-45 border-t border-r border-gray-100 pointer-events-none"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
        className="relative group"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Stratova on WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.65)] transform hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          onMouseEnter={() => !hasDismissed && setShowTooltip(true)}
        >
          {/* Official WhatsApp SVG Logo */}
          <svg
            className="w-8 h-8 md:w-9 md:h-9 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>

          {/* Online status green dot */}
          <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow">
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
          </span>
        </a>

        {/* Desktop Quick Tooltip on Hover when bubble isn't shown */}
        {!showTooltip && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="bg-stratova-dark text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
              Chat on WhatsApp
            </div>
            <div className="w-2 h-2 bg-stratova-dark rotate-45 -ml-1"></div>
          </div>
        )}
      </motion.div>
    </aside>
  );
};
