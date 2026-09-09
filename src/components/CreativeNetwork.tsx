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

      <div className="relative w-full max-w-[600px] h-[440px] md:h-[600px] flex items-center justify-center">
        {/* Continuous Glowing Ripple Waves Radiating from Core outward to the Network */}
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={`ripple-${index}`}
            className="absolute z-10 w-[280px] md:w-[480px] h-[280px] md:h-[480px] rounded-full pointer-events-none border border-brand-purple/60"
            style={{
              boxShadow: '0 0 35px rgba(165, 0, 242, 0.45), inset 0 0 20px rgba(165, 0, 242, 0.25)',
              background: 'radial-gradient(circle, rgba(165,0,242,0.12) 0%, rgba(165,0,242,0.03) 65%, transparent 85%)',
            }}
            initial={{ scale: 0.22, opacity: 0.9 }}
            animate={{
              scale: [0.22, 1.06],
              opacity: [0.9, 0],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: [0.22, 0.61, 0.36, 1],
              delay: index * 1.05,
            }}
          />
        ))}

        {/* Radial Energy Ray Pulses connecting Core to each Specialist */}
        {specialists.map((spec) => (
          <div
            key={`beam-${spec.name}`}
            className="absolute z-10 w-[280px] md:w-[480px] h-[280px] md:h-[480px] pointer-events-none"
            style={{ rotate: `${spec.angle}deg` }}
          >
            {/* Ambient track beam line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[140px] md:h-[240px] bg-gradient-to-t from-brand-purple/40 via-brand-purple/15 to-transparent"></div>
            
            {/* Outward pulsing energy spark */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-1.5 h-3.5 rounded-full bg-brand-purple shadow-[0_0_14px_#A500F2]"
              animate={{
                top: ['50%', '0%'],
                opacity: [0, 0.9, 0.9, 0],
                scale: [0.6, 1.3, 0.8],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeOut',
                delay: (spec.angle / 360) * 1.6,
              }}
            />
          </div>
        ))}

        {/* Core Studio with Cube Logo SVG */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative z-30 w-28 h-28 md:w-36 md:h-36 rounded-full glass border-2 border-brand-purple/60 bg-brand-bg/90 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(165,0,242,0.45)] backdrop-blur-xl group cursor-default"
        >
          {/* Inner ambient ring */}
          <div className="absolute inset-1.5 rounded-full border border-brand-purple/25 pointer-events-none"></div>

          {/* Cube Logo SVG */}
          <motion.div
            animate={{ 
              scale: [1, 1.06, 1],
              filter: [
                'drop-shadow(0 0 10px rgba(165,0,242,0.6))',
                'drop-shadow(0 0 22px rgba(165,0,242,0.95))',
                'drop-shadow(0 0 10px rgba(165,0,242,0.6))'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center justify-center text-brand-purple mb-1 md:mb-1.5"
          >
            <svg 
              viewBox="0 0 197.3 218.4" 
              className="w-9 h-9 md:w-12 md:h-12" 
              style={{ overflow: 'visible' }} 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <polygon fill="currentColor" points="197.3,52.2 197.3,186.4 130.5,158.1 130.5,79.6 73.8,55.6 73.8,0.3 74.3,0" />
                <polygon fill="currentColor" points="123.5,84.2 123.5,155.1 74.1,134.1 73.8,134 73.8,63.2" />
                <polygon fill="currentColor" points="123.5,162.7 123.5,218.4 0,166 0,32 0.2,31.9 66.8,60.2 66.8,138.5 71.4,140.6" />
              </g>
            </svg>
          </motion.div>

          <span className="text-[10px] md:text-xs font-bold tracking-[0.18em] uppercase text-brand-text/90">
            Studio Core
          </span>
          <span className="text-[8px] tracking-widest uppercase text-brand-purple/90 font-medium">
            Creative Hub
          </span>
        </motion.div>

        {/* Orbit Lines */}
        <div className="absolute w-[280px] md:w-[480px] h-[280px] md:h-[480px] rounded-full border border-brand-purple/20 border-dashed pointer-events-none animate-[spin_120s_linear_infinite]"></div>

        {/* Specialists */}
        {specialists.map((spec, i) => {
          const radiusClasses = "w-[280px] md:w-[480px] h-[280px] md:h-[480px]";
          
          return (
            <motion.div
              key={spec.name}
              className={`absolute z-20 ${radiusClasses} pointer-events-none`}
              style={{ rotate: `${spec.angle}deg` }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.5, duration: 1 }}
            >
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 glass px-3.5 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 border border-brand-text/15 hover:border-brand-purple/50 transition-colors shadow-lg bg-brand-bg/80"
                style={{ rotate: `-${spec.angle}deg` }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
                <span className="text-xs md:text-sm font-medium text-brand-text/90">{spec.name}</span>
              </div>
            </motion.div>
          );
        })}
        
        {/* Subtle Ambient Background Core Glow */}
        <div className="absolute w-[200px] h-[200px] rounded-full bg-brand-purple/15 blur-[60px] pointer-events-none -z-10"></div>

      </div>
    </section>
  );
}
