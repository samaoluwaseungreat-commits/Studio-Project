import { motion } from 'motion/react';
import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'School Presidency',
    tag: 'The Mandate Campaign',
    image: '/assets/911 SAMA.jpg',
    desc: 'A complete identity overhaul focusing on transparency and progressive leadership.',
    link: 'https://www.behance.net/oluwasesama' // Fallback to general profile for now since a specific one wasn't provided for this
  },
  {
    title: 'Department Vice Presidency',
    tag: 'The Future Campaign',
    image: '/assets/Manifesto.jpg',
    desc: 'Strategic positioning and content production for a data-driven academic campaign.',
    link: 'https://www.behance.net/gallery/243232471/ELLA-Campaign-Brand-design'
  }
];

export function Portfolio() {
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section id="work" className="relative py-32 bg-brand-bg-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-sm font-medium tracking-widest text-brand-gold mb-4 uppercase flex items-center gap-2">
              <span className="w-4 h-[1px] bg-brand-gold"></span> Portfolio
            </h2>
            <p className="text-4xl md:text-6xl font-display font-bold">
              Campaigns that <span className="text-brand-purple text-glow-purple">win.</span>
            </p>
          </div>
          <a href="https://www.behance.net/oluwasesama" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-brand-purple transition-colors flex items-center gap-2 group cursor-pointer">
            View All Work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {projects.map((project, i) => (
            <motion.a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-brand-text/5">
                <div className="absolute inset-0 bg-brand-purple/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10"></div>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col items-center justify-center">
                   <div className="w-12 h-12 rounded-full border border-brand-gold/50 flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                     <span className="text-brand-gold text-2xl font-light">+</span>
                   </div>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">{project.tag}</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-brand-purple transition-colors">{project.title}</h3>
              <p className="text-brand-text/50 text-sm">{project.desc}</p>
            </motion.a>
          ))}
        </div>

        {/* Before / After */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-4">The Value of Visual Communication</h3>
            <p className="text-brand-text/50">Drag the slider to see the difference strategy makes.</p>
          </div>

          <div 
            ref={sliderRef}
            className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden cursor-ew-resize bg-black border border-brand-text/10 shadow-[0_0_50px_rgba(165,0,242,0.1)]"
            onMouseDown={() => setIsDragging(true)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Bottom) */}
            <div className="absolute inset-0">
               <img src="/assets/WIF fnl.jpg" alt="After Design" className="w-full h-full object-cover" />
               <div className="absolute top-6 right-6 px-4 py-1 glass rounded-full">
                 <span className="text-xs font-bold tracking-widest text-brand-purple">AFTER</span>
               </div>
            </div>

            {/* Before Image (Top, Clipped) */}
            <div 
              className="absolute inset-0 border-r-2 border-brand-gold bg-brand-bg-alt overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img src="/assets/WIF 01.jpg" alt="Before Design" className="absolute top-0 left-0 w-full h-full object-cover opacity-50" style={{ width: `${100 / (sliderPos / 100)}%` }} />
              <div className="absolute top-6 left-6 px-4 py-1 glass rounded-full z-10">
                 <span className="text-xs font-bold tracking-widest text-brand-text/50">BEFORE</span>
               </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.8)] -translate-x-1/2 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-8 h-8 bg-brand-bg border-2 border-brand-gold rounded-full flex items-center justify-center shadow-xl">
                 <div className="flex gap-1">
                   <div className="w-0.5 h-3 bg-brand-gold"></div>
                   <div className="w-0.5 h-3 bg-brand-gold"></div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
