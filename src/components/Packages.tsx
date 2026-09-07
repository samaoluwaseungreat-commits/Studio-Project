import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

const packages = [
  {
    name: 'PRESENCE',
    desc: 'Look like a candidate.',
    features: ['Logo & Campaign Mark', 'Color Palette & Typography', 'Social Media Templates', 'Basic Poster Design'],
    recommended: false
  },
  {
    name: 'CAMPAIGN',
    desc: 'Build the campaign.',
    features: ['Everything in Narrative', 'Full Digital Strategy', 'Video Production', 'Website / Landing Page', 'Campaign Management Support'],
    recommended: true
  },
  {
    name: 'NARRATIVE',
    desc: 'Give people a reason to care.',
    features: ['Everything in Presence', 'Core Story & Messaging', 'Manifesto Design', 'Custom Photography', 'Copywriting'],
    recommended: false
  }
];

export function Packages() {
  return (
    <section id="packages" className="relative py-32 bg-brand-bg overflow-hidden border-t border-white/5">
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Engagement Levels
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50"
          >
            Select the scope that matches your ambition.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative p-8 rounded-2xl group transition-all duration-500 hover:-translate-y-2 ${
                pkg.recommended 
                  ? 'bg-white/5 border border-brand-purple/50 shadow-[0_0_40px_rgba(165,0,242,0.15)] hover:shadow-[0_0_60px_rgba(165,0,242,0.25)] z-10 md:-mt-8 md:mb-8' 
                  : 'glass hover:bg-white/10'
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-gold rounded-full">
                  <span className="text-[10px] font-bold tracking-widest text-brand-bg uppercase">Recommended</span>
                </div>
              )}
              
              <h3 className={`text-2xl font-display font-bold mb-2 ${pkg.recommended ? 'text-brand-purple text-glow-purple' : 'text-white'}`}>
                {pkg.name}
              </h3>
              <p className="text-sm text-white/50 mb-8 pb-8 border-b border-white/10">"{pkg.desc}"</p>
              
              <ul className="space-y-4 mb-12">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={18} className={pkg.recommended ? 'text-brand-purple mt-0.5 shrink-0' : 'text-white/30 mt-0.5 shrink-0'} />
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`w-full py-4 rounded-xl text-sm font-semibold flex justify-center items-center gap-2 transition-all duration-300 ${
                  pkg.recommended
                    ? 'bg-brand-purple text-white hover:bg-brand-purple/90 shadow-[0_0_20px_rgba(165,0,242,0.4)]'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                Inquire <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
