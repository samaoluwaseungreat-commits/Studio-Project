import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [focused, setFocused] = useState<string | null>(null);

  const fields = [
    { name: 'name', label: 'Full Name', type: 'text', width: 'full' },
    { name: 'position', label: 'Position Contesting For', type: 'text', width: 'half' },
    { name: 'faculty', label: 'Faculty / Department', type: 'text', width: 'half' },
    { name: 'date', label: 'Election Date', type: 'text', width: 'half' },
    { name: 'budget', label: 'Estimated Budget', type: 'text', width: 'half' },
    { name: 'phone', label: 'WhatsApp / Phone', type: 'tel', width: 'half' },
    { name: 'email', label: 'Email', type: 'email', width: 'half' },
  ];

  return (
    <section id="contact" className="relative py-32 bg-[#050406] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[200px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <div className="lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight leading-none"
          >
            Ready to build <br/>
            <span className="text-brand-purple text-glow-purple">your campaign?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg mb-12 max-w-md font-light"
          >
            Tell us what you're running for, what you want your campaign to represent, and what you need help building.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="lg:w-1/2"
        >
          <form className="glass p-8 md:p-12 rounded-2xl border-white/5 space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-wrap -mx-3 gap-y-8">
              {fields.map((field) => (
                <div key={field.name} className={`px-3 ${field.width === 'full' ? 'w-full' : 'w-full md:w-1/2'}`}>
                  <div className="relative">
                    <input
                      type={field.type}
                      id={field.name}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none transition-colors duration-300 focus:border-brand-purple peer placeholder-transparent"
                      placeholder={field.label}
                    />
                    <label 
                      htmlFor={field.name}
                      className={`absolute left-0 transition-all duration-300 pointer-events-none
                        ${focused === field.name ? '-top-5 text-xs text-brand-purple' : 'top-2 text-sm text-white/40 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-5 peer-focus:text-xs peer-focus:text-brand-purple'}
                        peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs
                      `}
                    >
                      {field.label}
                    </label>
                  </div>
                </div>
              ))}
              
              <div className="w-full px-3">
                 <div className="relative">
                    <textarea
                      id="additional"
                      rows={4}
                      onFocus={() => setFocused('additional')}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none transition-colors duration-300 focus:border-brand-purple peer placeholder-transparent resize-none"
                      placeholder="Additional Information"
                    ></textarea>
                    <label 
                      htmlFor="additional"
                      className={`absolute left-0 transition-all duration-300 pointer-events-none
                        ${focused === 'additional' ? '-top-5 text-xs text-brand-purple' : 'top-2 text-sm text-white/40 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-5 peer-focus:text-xs peer-focus:text-brand-purple'}
                        peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs
                      `}
                    >
                      Additional Information
                    </label>
                  </div>
              </div>

            </div>

            <button type="submit" className="w-full group relative inline-flex items-center justify-center px-8 py-5 text-lg font-semibold text-brand-white transition-all duration-300 hover:scale-[1.02] mt-4">
              <span className="absolute inset-0 rounded-xl bg-brand-purple/20 border border-brand-purple/50 group-hover:bg-brand-purple group-hover:shadow-[0_0_30px_rgba(165,0,242,0.6)] transition-all duration-300"></span>
              <span className="relative flex items-center gap-3">
                Send Inquiry <ArrowRight className="text-brand-gold group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
