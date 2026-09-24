import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Footer } from './Footer';

export const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const navItems = [
    { name: 'Home', href: isHome ? '#' : '/#' },
    { 
      name: 'About', 
      href: isHome ? '#about' : '/#about',
      subItems: [
        { name: 'About Us', href: isHome ? '#about' : '/#about' },
        { name: 'Vision | Mission', href: isHome ? '#vision' : '/#vision' },
        { name: 'Values', href: isHome ? '#values' : '/#values' },
        { name: 'Why Us', href: isHome ? '#why-choose-us' : '/#why-choose-us' },
      ]
    },
    { 
      name: 'Services', 
      href: isHome ? '#services' : '/#services',
      subItems: [
        { name: 'Core Services', href: isHome ? '#services' : '/#services' },
        { name: 'Support Services', href: isHome ? '#support-services' : '/#support-services' }
      ]
    },
    { name: 'Investment Opportunities', href: '/investments', isRouterLink: true },
    { name: 'Leadership', href: isHome ? '#leadership' : '/#leadership' },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ];

  const toggleMobileSubMenu = (name: string, e: React.MouseEvent) => {
    if (navItems.find(item => item.name === name)?.subItems) {
      e.preventDefault();
      setMobileSubMenuOpen(mobileSubMenuOpen === name ? null : name);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <nav style={{ willChange: 'transform', transform: 'translateZ(0)' }} className={`fixed top-0 left-0 w-full z-[200] transition-all duration-1000 ${scrolled ? 'py-2 md:py-3 shadow-md' : 'py-4 md:py-5'}`}>
        
        {/* Background Layer to prevent mix-blend-mode bugs in browsers */}
        <div className={`absolute inset-0 transition-all duration-1000 -z-10 ${scrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent'}`}></div>

        <div className="container mx-auto px-8 md:px-24 flex justify-between items-center">
          <Link to="/" className="flex items-center h-16 md:h-20 transition-all duration-300 hover:scale-105 bg-transparent">
            <img src="/Transparent_logo.png" alt="Stratova" className="h-full w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-6 items-center">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.isRouterLink ? (
                  <Link to={item.href} className="flex items-center gap-1 text-lg font-semibold tracking-wide text-stratova-dark hover:text-stratova-blue transition-colors py-2">
                    {item.name}
                  </Link>
                ) : (
                  <a href={item.href} className="flex items-center gap-1 text-lg font-semibold tracking-wide text-stratova-dark hover:text-stratova-blue transition-colors py-2">
                    {item.name}
                    {item.subItems && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                  </a>
                )}
                {item.subItems && (
                  <div className="absolute left-0 top-full mt-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
                      {item.subItems.map(subItem => (
                        <a key={subItem.name} href={subItem.href} className="block px-5 py-3 text-lg font-medium text-stratova-dark hover:bg-blue-50 hover:text-stratova-blue transition-colors">
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-stratova-dark p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-2 border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name} className="w-full flex flex-col items-center">
                {item.isRouterLink ? (
                  <Link
                    to={item.href}
                    className="flex items-center justify-center gap-2 text-xl font-semibold text-stratova-dark hover:text-stratova-blue transition-colors px-8 py-3 w-full text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center justify-center gap-2 text-xl font-semibold text-stratova-dark hover:text-stratova-blue transition-colors px-8 py-3 w-full text-center"
                    onClick={(e) => {
                      if (item.subItems) {
                        toggleMobileSubMenu(item.name, e);
                      } else {
                        setIsMenuOpen(false);
                      }
                    }}
                  >
                    {item.name}
                    {item.subItems && (
                      <ChevronDown size={20} className={`transition-transform duration-300 ${mobileSubMenuOpen === item.name ? 'rotate-180' : ''}`} />
                    )}
                  </a>
                )}
                
                {/* Mobile Submenu */}
                {item.subItems && mobileSubMenuOpen === item.name && (
                  <div className="flex flex-col items-center w-full bg-gray-50/80 py-2">
                    {item.subItems.map(subItem => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="text-lg font-medium text-gray-600 hover:text-stratova-blue transition-colors px-8 py-3 w-full text-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};
