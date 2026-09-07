import { motion } from 'motion/react';

export function CreativeNetwork() {
  const specialists = [
    { name: 'Strategy', angle: 0 },
    { name: 'Design', angle: 60 },
    { name: 'Photography', angle: 120 },
    { name: 'Videography', angle: 180 },
    { name: 'Copywriting', angle: 240 },
    { name: 'Motion', angle: 300 },
  ];

  return (
    <section className="relative py-32 bg-brand-bg overflow-hidden flex flex-col items-center">
      <div className="text-center mb-32 z-10 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-light mb-4"
        >
          One creative direction. <br/>
          <span className="font-bold text-brand-purple text-glow-purple">A network of specialists.</span>
        </motion.h2>
      </div>

      <div className="relative w-full max-w-[600px] h-[400px] md:h-[600px] flex items-center justify-center">
        {/* Core Studio */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="absolute z-20 w-32 h-32 rounded-full glass border-brand-purple/40 bg-brand-purple/10 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(165,0,242,0.3)]"
        >
          <div className="w-12 h-12 rounded-full bg-brand-purple mb-2 relative overflow-hidden">
             {/* Abstract representation of founder/core */}
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple to-brand-gold/50 opacity-80 mix-blend-screen"></div>
          </div>
          <span className="text-xs font-bold tracking-widest uppercase">Studio Core</span>
        </motion.div>

        {/* Orbit Lines */}
        <div className="absolute w-[280px] md:w-[480px] h-[280px] md:h-[480px] rounded-full border border-white/5 border-dashed pointer-events-none animate-[spin_120s_linear_infinite]"></div>

        {/* Specialists */}
        {specialists.map((spec, i) => {
          const radiusClasses = "w-[280px] md:w-[480px] h-[280px] md:h-[480px]";
          
          return (
            <motion.div
              key={spec.name}
              className={`absolute ${radiusClasses} pointer-events-none`}
              style={{ rotate: `${spec.angle}deg` }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.5, duration: 1 }}
            >
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 glass px-4 py-2 rounded-full flex items-center gap-2"
                style={{ rotate: `-${spec.angle}deg` }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
                <span className="text-sm font-medium">{spec.name}</span>
              </div>
            </motion.div>
          );
        })}
        
        {/* Subtle Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <defs>
             <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stopColor="#A500F2" stopOpacity="0.5" />
               <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
             </linearGradient>
          </defs>
          <motion.circle 
            cx="50%" 
            cy="50%" 
            r="30" 
            fill="none" 
            stroke="url(#lineGrad)" 
            strokeWidth="1"
            initial={{ r: 30 }}
            animate={{ r: ["10%", "40%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="opacity-0 mix-blend-screen"
            style={{ animation: 'pulse-ring 4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite' }}
          />
        </svg>

      </div>
    </section>
  );
}
