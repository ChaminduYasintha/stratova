import React from 'react';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Contact = () => {
  return (
    <section id="contact" className="w-full min-h-screen flex flex-col md:flex-row relative overflow-hidden bg-white">
      {/* Background Graphics */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top Right Light Blue Triangle */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-stratova-blue transform origin-top-right -rotate-45 translate-x-1/4 -translate-y-1/4"></div>
        {/* Bottom Right Dark Blue Triangle */}
        <div className="absolute bottom-0 right-0 w-2/3 h-full bg-stratova-dark transform origin-bottom-right rotate-45 translate-x-1/4 translate-y-1/4"></div>
      </div>

      {/* Left Content */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-10">
        <h2 className="text-6xl md:text-8xl font-black text-stratova-dark tracking-tight mb-12">CONTACT US</h2>
        
        <p className="text-xl text-stratova-dark font-medium leading-relaxed mb-8">
          We welcome the opportunity to discuss how Stratova can support your
          business, investment, or development initiatives.
        </p>
        <p className="text-xl text-stratova-dark font-medium leading-relaxed mb-16">
          Get in touch with our team to explore tailored solutions and strategic
          partnerships.
        </p>

        <div className="space-y-6 md:space-y-8">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-stratova-blue flex items-center justify-center text-white flex-shrink-0">
              <Phone size={20} className="md:w-6 md:h-6" fill="currentColor" />
            </div>
            <span className="text-lg md:text-2xl font-bold text-stratova-dark">+94 774 488 505</span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-stratova-blue flex items-center justify-center text-white flex-shrink-0">
              <Mail size={20} className="md:w-6 md:h-6" />
            </div>
            <span className="text-lg md:text-2xl font-bold text-stratova-dark">office@stratova.lk</span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-stratova-blue flex items-center justify-center text-white flex-shrink-0">
              <Globe size={20} className="md:w-6 md:h-6" />
            </div>
            <span className="text-lg md:text-2xl font-bold text-stratova-dark">www.stratova.lk</span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-stratova-blue flex items-center justify-center text-white flex-shrink-0">
              <MapPin size={20} className="md:w-6 md:h-6" />
            </div>
            <span className="text-lg md:text-2xl font-bold text-stratova-dark">78, Havelock Road, Colombo 00500, Sri Lanka</span>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative z-10 mt-16 md:mt-0 p-8 md:p-12">
        <div className="w-full max-w-lg bg-stratova-dark p-8 md:p-12 rounded-xl shadow-[0_20px_50px_rgba(10,17,40,0.5)] border border-stratova-blue/30 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white mb-2">Send an Inquiry</h3>
          <p className="text-white/70 mb-8">Fill out the form below and we will get back to you shortly.</p>
          
          <form className="space-y-6 flex flex-col" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input type="text" id="name" className="w-full bg-transparent border-b-2 border-white/30 text-white px-2 py-3 mb-1 focus:outline-none focus:border-stratova-blue placeholder-white/40 font-medium transition-colors" placeholder="Full Name" required />
            </div>
            
            <div className="relative">
               <input type="email" id="email" className="w-full bg-transparent border-b-2 border-white/30 text-white px-2 py-3 mb-1 focus:outline-none focus:border-stratova-blue placeholder-white/40 font-medium transition-colors" placeholder="Email Address" required />
            </div>

            <div className="relative">
               <textarea id="message" rows={4} className="w-full bg-transparent border-b-2 border-white/30 text-white px-2 py-3 mb-1 focus:outline-none focus:border-stratova-blue placeholder-white/40 font-medium resize-none transition-colors" placeholder="Your Message" required></textarea>
            </div>

            <button type="submit" className="w-full bg-stratova-blue text-white font-bold tracking-wide text-lg rounded px-4 py-4 mt-6 hover:bg-[#156e9c] transition-all transform hover:-translate-y-1 shadow-lg ring-2 ring-transparent focus:ring-white">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
