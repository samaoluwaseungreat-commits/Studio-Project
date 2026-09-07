import { motion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const steps = [
  'Discover', 'Position', 'Narrate', 'Direct', 'Produce', 'Build', 'Launch', 'Refine'
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate progress based on how much of the section has been scrolled
      const progress = 1 - (rect.bottom - viewportHeight / 2) / rect.height;
      
      if (progress >= 0 && progress <= 1) {
        const stepIndex = Math.min(
          Math.floor(progress * steps.length),
          steps.length - 1
        );
        setActiveStep(stepIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" className="relative py-32 bg-brand-bg overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-32">
        
        <div className="md:w-1/3 md:sticky md:top-32 h-fit">
          <h2 className="text-sm font-medium tracking-widest text-brand-gold mb-4 uppercase flex items-center gap-2">
            <span className="w-4 h-[1px] bg-brand-gold"></span> Process
          </h2>
          <p className="text-4xl font-display font-bold mb-6">
            The Campaign Timeline
          </p>
          <p className="text-white/50">
            A methodical approach to building your platform, from initial discovery to election day refinement.
          </p>
        </div>

        <div className="md:w-2/3 relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-[19px] top-4 bottom-4 w-[2px] bg-white/10 rounded-full"></div>
          
          {/* Active line progress */}
          <motion.div 
            className="absolute left-4 md:left-[19px] top-4 w-[2px] bg-brand-purple shadow-[0_0_10px_rgba(165,0,242,0.8)] rounded-full origin-top"
            initial={{ height: 0 }}
            animate={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          ></motion.div>

          <div className="space-y-16 md:space-y-32 py-12 relative z-10">
            {steps.map((step, i) => {
              const isActive = i <= activeStep;
              const isCurrent = i === activeStep;
              
              return (
                <div key={step} className="flex gap-8 items-center transition-opacity duration-500" style={{ opacity: isCurrent ? 1 : isActive ? 0.5 : 0.2 }}>
                  <div className="relative flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors duration-500 bg-brand-bg ${isActive ? 'border-brand-purple' : 'border-white/20'}`}>
                      {isActive && (
                        <motion.div 
                          layoutId="activeDot"
                          className="w-3 h-3 rounded-full bg-brand-gold"
                        ></motion.div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-sm font-mono text-brand-gold mb-1 block">0{i + 1}</span>
                    <h3 className={`text-3xl md:text-5xl font-display font-bold transition-colors duration-500 ${isCurrent ? 'text-white' : 'text-white/50'}`}>
                      {step}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
