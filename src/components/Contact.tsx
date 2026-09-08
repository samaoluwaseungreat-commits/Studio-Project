import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Instagram, Twitter, CheckCircle2 } from 'lucide-react';
import React, { useState, type ChangeEvent, type FormEvent } from 'react';

export function Contact() {
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    faculty: '',
    date: '',
    budget: '',
    phone: '',
    email: '',
    additional: ''
  });

  const whatsappNumber = '2348145653433';

  const fields = [
    { name: 'name', label: 'Full Name', type: 'text', width: 'full', required: true },
    { name: 'position', label: 'Position Contesting For', type: 'text', width: 'half', required: true },
    { name: 'faculty', label: 'Faculty / Department', type: 'text', width: 'half' },
    { name: 'date', label: 'Election Date', type: 'text', width: 'half' },
    { name: 'budget', label: 'Estimated Budget', type: 'text', width: 'half' },
    { name: 'phone', label: 'WhatsApp / Phone', type: 'tel', width: 'half', required: true },
    { name: 'email', label: 'Email', type: 'email', width: 'half' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const generateWhatsAppMessage = () => {
    const lines = [
      '🏛️ *CANDIDATE CAMPAIGN INQUIRY*',
      '━━━━━━━━━━━━━━━━━━━━',
      `👤 *Candidate:* ${formData.name || 'Not specified'}`,
      `🎯 *Position:* ${formData.position || 'Not specified'}`,
      `🏢 *Faculty / Dept:* ${formData.faculty || 'Not specified'}`,
      `📅 *Election Date:* ${formData.date || 'Not specified'}`,
      `💰 *Estimated Budget:* ${formData.budget || 'Not specified'}`,
      `📱 *WhatsApp / Phone:* ${formData.phone || 'Not specified'}`,
      `✉️ *Email:* ${formData.email || 'Not specified'}`,
      '',
      '📝 *Campaign Vision & Needs:*',
      formData.additional.trim() ? formData.additional : 'Ready to discuss strategy and branding.',
      '━━━━━━━━━━━━━━━━━━━━',
      '_Sent via Studio Campaign Website_'
    ];
    return lines.join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Please enter your name.');
      return;
    }

    const message = generateWhatsAppMessage();
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    setSubmitted(true);
    window.open(waUrl, '_blank');
  };

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
            className="text-white/60 text-lg mb-8 max-w-md font-light"
          >
            Tell us what you're running for, what you want your campaign to represent, and what you need help building.
          </motion.p>

          {/* Direct Social / Quick Connect Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4 pt-4 border-t border-white/10"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">Direct Connect</p>
            <div className="flex flex-wrap gap-3">
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-4 py-2.5 rounded-full text-xs font-medium flex items-center gap-2 hover:bg-white/10 hover:border-brand-purple/40 text-white transition-all"
              >
                <MessageCircle size={15} className="text-emerald-400" />
                <span>WhatsApp (+234 814 565 3433)</span>
              </a>
              <a 
                href="https://instagram.com/the_sama_great"
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-4 py-2.5 rounded-full text-xs font-medium flex items-center gap-2 hover:bg-white/10 hover:border-brand-purple/40 text-white transition-all"
              >
                <Instagram size={15} className="text-pink-400" />
                <span>@the_sama_great</span>
              </a>
              <a 
                href="https://x.com/d_SamaGreat"
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-4 py-2.5 rounded-full text-xs font-medium flex items-center gap-2 hover:bg-white/10 hover:border-brand-purple/40 text-white transition-all"
              >
                <Twitter size={15} className="text-sky-400" />
                <span>@d_SamaGreat</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="lg:w-1/2"
        >
          <form className="glass p-8 md:p-12 rounded-2xl border-white/5 space-y-8" onSubmit={handleSubmit}>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">Candidate Intake Form</span>
              <span className="text-[11px] text-emerald-400 flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Direct to WhatsApp
              </span>
            </div>

            <div className="flex flex-wrap -mx-3 gap-y-8">
              {fields.map((field) => (
                <div key={field.name} className={`px-3 ${field.width === 'full' ? 'w-full' : 'w-full md:w-1/2'}`}>
                  <div className="relative">
                    <input
                      type={field.type}
                      id={field.name}
                      required={field.required}
                      value={(formData as Record<string, string>)[field.name]}
                      onChange={handleChange}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none transition-colors duration-300 focus:border-brand-purple peer placeholder-transparent text-sm"
                      placeholder={field.label}
                    />
                    <label 
                      htmlFor={field.name}
                      className={`absolute left-0 transition-all duration-300 pointer-events-none
                        ${focused === field.name || (formData as Record<string, string>)[field.name] ? '-top-5 text-xs text-brand-purple' : 'top-2 text-sm text-white/40 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-5 peer-focus:text-xs peer-focus:text-brand-purple'}
                      `}
                    >
                      {field.label} {field.required ? '*' : ''}
                    </label>
                  </div>
                </div>
              ))}
              
              <div className="w-full px-3">
                 <div className="relative">
                    <textarea
                      id="additional"
                      rows={4}
                      value={formData.additional}
                      onChange={handleChange}
                      onFocus={() => setFocused('additional')}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none transition-colors duration-300 focus:border-brand-purple peer placeholder-transparent resize-none text-sm"
                      placeholder="Additional Information"
                    ></textarea>
                    <label 
                      htmlFor="additional"
                      className={`absolute left-0 transition-all duration-300 pointer-events-none
                        ${focused === 'additional' || formData.additional ? '-top-5 text-xs text-brand-purple' : 'top-2 text-sm text-white/40 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-5 peer-focus:text-xs peer-focus:text-brand-purple'}
                      `}
                    >
                      Campaign Vision & Additional Details
                    </label>
                  </div>
              </div>

            </div>

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>WhatsApp opened with your candidate details!</span>
                </div>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold hover:text-white"
                >
                  Click here to resend
                </a>
              </div>
            )}

            <button type="submit" className="w-full group relative inline-flex items-center justify-center px-8 py-5 text-lg font-semibold text-brand-white transition-all duration-300 hover:scale-[1.02] mt-4">
              <span className="absolute inset-0 rounded-xl bg-brand-purple/20 border border-brand-purple/50 group-hover:bg-brand-purple group-hover:shadow-[0_0_30px_rgba(165,0,242,0.6)] transition-all duration-300"></span>
              <span className="relative flex items-center gap-3">
                Send Inquiry to WhatsApp <ArrowRight className="text-brand-gold group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
