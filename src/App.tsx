/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';

import { About } from './components/About';
import { CoreValues } from './components/CoreValues';
import { Services } from './components/Services';
import { Team } from './components/Team';
// import { Leadership } from './components/Leadership';
import { Clients } from './components/Clients';
// import { Projects } from './components/Projects';
import { Partnerships } from './components/Partnerships';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Vision', href: '#about' },
    { name: 'Values', href: '#values' },
    { name: 'Services', href: '#services-1' },
    { name: 'Team', href: '#team' },
    // { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-8 flex justify-between items-center">
          <a href="#" className="flex items-center h-16 md:h-20 transition-all duration-300 hover:scale-105">
            <img src="/STRATOVA LOGO.png" alt="Stratova" className="h-full w-auto object-contain" />
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item, index) => (
              <a key={item.name} href={item.href} className={`text-sm font-bold ${!scrolled && navItems.length - 1 === index ? "text-white" : "text-stratova-dark" } hover:text-stratova-blue transition-colors`}>
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-stratova-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-6 border-t border-gray-100">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-xl font-bold text-stratova-dark hover:text-stratova-blue transition-colors px-8 py-2 w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <About />
        <CoreValues />
        <Services />
        <Team />
        {/* <Leadership /> */}
        <Clients />
        {/* <Projects /> */}
        <Partnerships />
        <WhyChooseUs />
        <Contact />
      </main>
    </div>
  );
}
