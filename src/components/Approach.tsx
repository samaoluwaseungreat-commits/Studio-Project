import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Approach() {
  const typical = ['Picture', 'Flyer', 'Post'];
  const ours = ['Candidate', 'Positioning', 'Story', 'Identity', 'Content', 'Campaign'];

  return (
    <section className="relative py-32 bg-[#08070A] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            We don't start with the design.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-2xl mx-auto text-lg"
          >
            Design without strategy is just decoration. We build the foundation first, ensuring every visual decision serves the campaign's objective.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center justify-between">
          
          {/* Typical */}
          <div className="w-full lg:w-[40%] glass p-10 rounded-2xl border-white/5">
            <h3 className="text-sm font-medium tracking-widest text-white/40 uppercase mb-12 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/20"></span> Typical Campaign
            </h3>
            <div className="flex flex-wrap items-center gap-4 opacity-50">
              {typical.map((step, i) => (
                <div key={step} className="flex items-center gap-4">
                  <span className="text-lg font-display text-white/80">{step}</span>
                  {i < typical.length - 1 && <ArrowRight size={16} className="text-white/30" />}
                </div>
              ))}
            </div>
          </div>

          {/* VS */}
          <div className="hidden lg:flex flex-col items-center justify-center opacity-30">
            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white"></div>
            <span className="my-4 text-xs font-mono tracking-widest">VS</span>
            <div className="w-[1px] h-12 bg-gradient-to-t from-transparent to-white"></div>
          </div>

          {/* Ours */}
          <div className="w-full lg:w-[50%] p-10 rounded-2xl bg-brand-purple/5 border border-brand-purple/20 relative">
             <div className="absolute inset-0 bg-brand-purple/10 blur-2xl rounded-2xl pointer-events-none"></div>
            <h3 className="text-sm font-medium tracking-widest text-brand-gold uppercase mb-12 flex items-center gap-2 relative z-10">
              <span className="w-2 h-2 rounded-full bg-brand-gold text-glow-gold"></span> Our Approach
            </h3>
            <div className="flex flex-wrap items-center gap-y-6 gap-x-4 relative z-10">
              {ours.map((step, i) => (
                <motion.div 
                  key={step} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15 + 0.3 }}
                  className="flex items-center gap-4"
                >
                  <span className={`text-xl font-display font-medium ${i === ours.length - 1 ? 'text-brand-purple text-glow-purple font-bold text-2xl' : 'text-white'}`}>{step}</span>
                  {i < ours.length - 1 && <ArrowRight size={18} className="text-brand-gold/60" />}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
