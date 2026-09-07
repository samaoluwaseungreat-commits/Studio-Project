import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50"></div>
      
      {/* Fine grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="flex-1 space-y-6 mt-12 md:mt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex items-center gap-3 mb-2"
          >
            <span className="h-[1px] w-8 bg-brand-gold"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">A Premium Creative Studio</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[80px] font-display font-bold leading-[0.9] tracking-tighter text-white"
          >
            <span className="block text-white/90">YOUR CAMPAIGN</span>
            <span className="block text-white/90">DESERVES MORE</span>
            <span className="block text-brand-purple text-glow-purple">THAN A FLYER.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 max-w-xl font-light leading-relaxed"
          >
            We build the strategy, story, visual identity and digital communication behind student election campaigns.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="pt-4"
          >
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 glass rounded-full text-white hover:bg-white/10 transition-all border border-white/20 uppercase tracking-widest text-[11px] font-medium mt-4">
              Start My Campaign →
            </a>
          </motion.div>
        </div>

        {/* Campaign Visual Collage (Abstract representation) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="flex-1 relative w-full h-[500px] hidden md:block"
        >
          <div className="absolute top-1/4 right-0 w-64 h-80 glass rounded-xl overflow-hidden campaign-shadow rotate-3 transform-gpu">
             <img src="https://images.unsplash.com/photo-1542157585-ef20bbcce178?q=80&w=600&auto=format&fit=crop" alt="Candidate Portrait" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
          </div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-64 glass rounded-xl overflow-hidden campaign-shadow -rotate-6 transform-gpu border-brand-purple/30 bg-glow-purple">
            <div className="p-6 h-full flex flex-col justify-between">
              <div className="w-8 h-8 rounded-full bg-brand-purple/50"></div>
              <div className="space-y-2">
                <div className="w-full h-2 bg-white/20 rounded"></div>
                <div className="w-3/4 h-2 bg-white/20 rounded"></div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-10 w-40 h-12 glass rounded-full flex items-center px-4 gap-3 transform-gpu shadow-xl shadow-brand-gold/5 border-brand-gold/20">
            <div className="w-2 h-2 rounded-full bg-brand-gold text-glow-gold"></div>
            <span className="text-xs font-medium tracking-widest text-brand-gold">MANIFESTO</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
      </motion.div>
    </section>
  );
}
