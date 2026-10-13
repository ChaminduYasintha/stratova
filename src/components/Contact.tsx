import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact = () => {
  return (
    <section id="contact" className="w-full flex flex-col relative overflow-hidden bg-white min-h-[100svh]">
      
      {/* Top Header Section (Dark Blue) */}
      <div className="w-full bg-stratova-dark relative">
        {/* Top Right Green Dots Pattern */}
        <div className="absolute top-12 right-12 md:right-24 grid grid-cols-4 gap-2 opacity-80 z-0">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-stratova-green"></div>
          ))}
        </div>

        <div className="container mx-auto pt-12 md:pt-16 pb-16 px-4 sm:px-8 md:px-16 lg:px-24 relative">

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-light text-stratova-blue mb-1 tracking-tight">GET</h2>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[0.9] mb-8">IN TOUCH</h2>
            
            {/* Three green dots */}
            <div className="flex gap-2">
              <div className="w-4 h-4 bg-stratova-green"></div>
              <div className="w-4 h-4 bg-stratova-green"></div>
              <div className="w-4 h-4 bg-stratova-green"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content (White) */}
      <div className="w-full bg-white flex-grow relative flex flex-col">
        <div className="container mx-auto pt-12 md:pt-16 pb-20 md:pb-24 px-4 sm:px-8 md:px-16 lg:px-24 flex-grow relative flex flex-col">
          <div className="max-w-4xl space-y-6 md:space-y-8 mb-12 md:mb-16">
            <p className="text-lg md:text-xl text-stratova-dark font-medium leading-relaxed text-justify">
              Partner with Stratova to unlock strategic opportunities and sustainable growth.
            </p>
            <p className="text-lg md:text-xl text-stratova-dark font-medium leading-relaxed text-justify">
              Connect with our team to explore bespoke advisory solutions, investment
              opportunities, and strategic partnerships designed to deliver measurable
              results for your company.
            </p>
          </div>

          <div className="w-full relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-stratova-dark italic mb-8 md:mb-12 text-left">
              CONTACT US
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full">
              {/* Sri Lanka */}
              <div className="flex flex-col gap-5 w-full">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-6 bg-stratova-green rounded-full shrink-0"></div>
                  <h4 className="text-xl sm:text-2xl font-black text-stratova-dark uppercase tracking-tight">
                    SRI LANKA
                  </h4>
                </div>

                <div className="flex flex-col gap-4 w-full">
                  <a 
                    href="tel:+940776110005" 
                    className="flex items-center gap-3 md:gap-4 group w-fit"
                  >
                    <div className="w-10 h-10 rounded-full bg-stratova-dark group-hover:bg-stratova-blue flex items-center justify-center text-white shrink-0 shadow-sm transition-colors">
                      <Phone size={18} fill="currentColor" />
                    </div>
                    <span className="text-sm md:text-base font-medium text-stratova-dark group-hover:text-stratova-blue transition-colors">
                      +94 077 611 0005
                    </span>
                  </a>

                  <a 
                    href="https://www.stratova.lk" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 md:gap-4 group w-fit"
                  >
                    <div className="w-10 h-10 rounded-full bg-stratova-dark group-hover:bg-stratova-blue flex items-center justify-center text-white shrink-0 shadow-sm transition-colors">
                      <Globe size={18} />
                    </div>
                    <span className="text-sm md:text-base font-medium text-stratova-dark group-hover:text-stratova-blue transition-colors">
                      www.stratova.lk
                    </span>
                  </a>

                  <a 
                    href="mailto:office@stratova.lk" 
                    className="flex items-center gap-3 md:gap-4 group w-fit"
                  >
                    <div className="w-10 h-10 rounded-full bg-stratova-dark group-hover:bg-stratova-blue flex items-center justify-center text-white shrink-0 shadow-sm transition-colors">
                      <Mail size={18} />
                    </div>
                    <span className="text-sm md:text-base font-medium text-stratova-dark group-hover:text-stratova-blue transition-colors">
                      office@stratova.lk
                    </span>
                  </a>

                  <div className="flex items-center gap-3 md:gap-4 text-left">
                    <div className="w-10 h-10 rounded-full bg-stratova-dark flex items-center justify-center text-white shrink-0 shadow-sm shrink-0">
                      <MapPin size={18} />
                    </div>
                    <span className="text-sm md:text-base font-medium text-stratova-dark leading-snug">
                      78, Havelock Road, Colombo 00500, Sri Lanka
                    </span>
                  </div>
                </div>
              </div>

              {/* Malaysia */}
              <div className="flex flex-col gap-5 w-full">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-6 bg-stratova-green rounded-full shrink-0"></div>
                  <h4 className="text-xl sm:text-2xl font-black text-stratova-dark uppercase tracking-tight">
                    MALAYSIA
                  </h4>
                </div>

                <div className="flex flex-col gap-4 w-full">
                  <a 
                    href="tel:+60126111219" 
                    className="flex items-center gap-3 md:gap-4 group w-fit"
                  >
                    <div className="w-10 h-10 rounded-full bg-stratova-dark group-hover:bg-stratova-blue flex items-center justify-center text-white shrink-0 shadow-sm transition-colors">
                      <Phone size={18} fill="currentColor" />
                    </div>
                    <span className="text-sm md:text-base font-medium text-stratova-dark group-hover:text-stratova-blue transition-colors">
                      +60 12-611 1219
                    </span>
                  </a>

                  <a 
                    href="mailto:vijayakumar.cpa@gmail.com" 
                    className="flex items-center gap-3 md:gap-4 group w-fit"
                  >
                    <div className="w-10 h-10 rounded-full bg-stratova-dark group-hover:bg-stratova-blue flex items-center justify-center text-white shrink-0 shadow-sm transition-colors">
                      <Mail size={18} />
                    </div>
                    <span className="text-sm md:text-base font-medium text-stratova-dark group-hover:text-stratova-blue transition-colors">
                      vijayakumar.cpa@gmail.com
                    </span>
                  </a>

                  <div className="flex items-center gap-3 md:gap-4 text-left">
                    <div className="w-10 h-10 rounded-full bg-stratova-dark flex items-center justify-center text-white shrink-0 shadow-sm shrink-0">
                      <MapPin size={18} />
                    </div>
                    <span className="text-sm md:text-base font-medium text-stratova-dark leading-snug">
                      Suite 612, Level 6, Block A3, Leisure Commerce Square, NO. 9, Jalan PJS 8/9, 46150 Petaling Jaya Selangor, Malaysia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Creative Uneven Static Green Dots Pattern - Absolute at Bottom Right */}
        <div className="hidden lg:block absolute bottom-0 right-0 z-0 pointer-events-none opacity-40">
          <div className="grid grid-cols-12 gap-4 md:gap-5 pb-8 pr-4 md:pr-8">
            {[...Array(192)].map((_, i) => {
              const row = Math.floor(i / 12);
              const col = i % 12;
              
              // A specific fixed pattern that dissolves towards the top-left (16x12)
              const pattern = [
                // Top very sparse rows
                [0,0,0,0,0,0,0,1,0,0,0,0],
                [0,0,0,1,0,0,0,0,0,1,0,0],
                [0,0,0,0,0,1,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,1,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,1,0],
                [0,0,0,0,1,0,0,0,1,0,0,0],
                [0,1,0,0,0,0,1,0,0,0,0,1],
                [0,0,0,1,0,0,0,0,0,1,0,0],
                // Middle gradually denser
                [0,0,0,1,0,0,0,1,0,0,0,1],
                [0,0,0,0,0,1,0,0,0,1,1,0],
                [0,1,0,0,1,0,0,1,0,0,1,1],
                [0,0,1,0,0,1,1,0,1,1,0,1],
                // Bottom dense
                [1,0,0,1,0,1,1,1,0,1,1,1],
                [0,1,1,0,1,1,1,1,1,1,1,1],
                [1,0,1,1,1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1,1,1,1,1],
              ];
              
              const val = pattern[row][col];
              
              if (val === 0) {
                return <div key={i} className="w-3 h-3 md:w-4 md:h-4"></div>;
              }

              // Add varying opacities to make it look dynamic
              const isFaded = (row + col) % 3 === 0;
              const isVeryFaded = (row * col) % 5 === 0;
              const opacityClass = isVeryFaded ? "opacity-20" : isFaded ? "opacity-40" : "opacity-80";

              return (
                <div key={i} className={`w-3 h-3 md:w-4 md:h-4 bg-stratova-green ${opacityClass}`}></div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};

