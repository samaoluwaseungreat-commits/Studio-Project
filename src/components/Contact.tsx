import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Instagram, 
  Twitter, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  ExternalLink,
  Mail
} from 'lucide-react';
import React, { useState, type ChangeEvent, type FormEvent } from 'react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf-tClT6pJfYw2UavItOR4Tyb_I3gqHc_keF9bWD-QHKmvMRQ/viewform?embedded=true';

export function Contact() {
  const whatsappNumber = '2348145653433';
  const studioEmail = 'thecubestudio01@gmail.com';
  
  const [activeTab, setActiveTab] = useState<'google' | 'interactive'>('google');
  
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);
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

  const fields = [
    { name: 'name', label: 'Full Name', type: 'text', width: 'full', required: true },
    { name: 'position', label: 'Position Contesting For', type: 'text', width: 'half', required: true },
    { name: 'faculty', label: 'Faculty / Department', type: 'text', width: 'half' },
    { name: 'date', label: 'Election Date', type: 'text', width: 'half' },
    { name: 'budget', label: 'Estimated Budget', type: 'text', width: 'half' },
    { name: 'phone', label: 'WhatsApp / Phone', type: 'tel', width: 'half', required: true },
    { name: 'email', label: 'Email', type: 'email', width: 'half' },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      formData.additional.trim() ? formData.additional : 'Ready to discuss campaign branding and strategy.',
      '━━━━━━━━━━━━━━━━━━━━',
      '_Sent via Cube Studio Official Website_'
    ];

    return lines.join('\n');
  };

  const handleSubmit = (e: FormEvent) => {
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
    <section id="contact" className="relative py-32 bg-brand-bg-alt overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[200px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column: Heading & Quick Connect */}
        <div className="lg:w-1/3">
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
            className="text-brand-text/60 text-lg mb-8 max-w-md font-light"
          >
            Tell us what you're running for, submit your campaign brief through our official form, or reach out directly on WhatsApp.
          </motion.p>

          {/* Direct Social / Quick Connect Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4 pt-4 border-t border-brand-text/10"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-brand-text/40 font-medium">Direct Connect</p>
            <div className="flex flex-wrap gap-3 flex-col">
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-3 hover:bg-brand-text/10 hover:border-brand-purple/40 text-brand-text transition-all w-fit"
              >
                <MessageCircle size={18} className="text-emerald-400" />
                <span>WhatsApp (+234 814 565 3433)</span>
              </a>
              <a 
                href={`mailto:${studioEmail}`}
                className="glass px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-3 hover:bg-brand-text/10 hover:border-brand-purple/40 text-brand-text transition-all w-fit"
              >
                <Mail size={18} className="text-brand-purple" />
                <span>{studioEmail}</span>
              </a>
              <a 
                href="https://instagram.com/cube_studio_official"
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-3 hover:bg-brand-text/10 hover:border-brand-purple/40 text-brand-text transition-all w-fit"
              >
                <Instagram size={18} className="text-pink-400" />
                <span>@cube_studio_official</span>
              </a>
              <a 
                href="https://x.com/CubeStudio01"
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-3 hover:bg-brand-text/10 hover:border-brand-purple/40 text-brand-text transition-all w-fit"
              >
                <Twitter size={18} className="text-brand-text/80" />
                <span>X (@CubeStudio01)</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Client Intake Form / Google Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="lg:w-2/3 w-full"
        >
          <div className="glass rounded-3xl border-brand-text/10 w-full bg-brand-text/5 shadow-2xl overflow-hidden flex flex-col">
            
            {/* Header / Mode Switcher */}
            <div className="p-4 md:px-8 border-b border-brand-text/10 flex flex-wrap items-center justify-between gap-3 bg-brand-text/5">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('google')}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                    activeTab === 'google'
                      ? 'bg-brand-purple text-white shadow-[0_0_15px_rgba(165,0,242,0.4)]'
                      : 'text-brand-text/60 hover:text-brand-text'
                  }`}
                >
                  <svg className="w-3.5 h-3.5 text-[#7248B9]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"/>
                  </svg>
                  <span>Official Google Form</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('interactive')}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                    activeTab === 'interactive'
                      ? 'bg-brand-purple text-white shadow-[0_0_15px_rgba(165,0,242,0.4)]'
                      : 'text-brand-text/60 hover:text-brand-text'
                  }`}
                >
                  <MessageCircle size={14} className={activeTab === 'interactive' ? 'text-emerald-300' : 'text-emerald-400'} />
                  <span>WhatsApp Inquiry Form</span>
                </button>
              </div>

              <div className="text-[11px] text-brand-text/50 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Direct Studio Intake
              </div>
            </div>

            {/* Tab 1: Google Form Embedded View */}
            {activeTab === 'google' && (
              <div className="w-full flex-1 min-h-[680px] relative flex flex-col">
                <div className="w-full h-full flex flex-col">
                  <iframe
                    src={GOOGLE_FORM_URL}
                    width="100%"
                    height="1420"
                    className="w-full h-[1420px] max-h-[920px] md:max-h-[1420px] border-0 rounded-b-3xl bg-white"
                    title="Candidate Intake Google Form"
                  >
                    Loading…
                  </iframe>
                  <div className="p-3.5 bg-brand-bg-alt border-t border-brand-text/10 flex flex-wrap justify-between items-center text-xs text-brand-text/50 px-6 gap-2">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      Live Google Form Intake
                    </span>
                    <a
                      href={GOOGLE_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-purple flex items-center gap-1 transition-colors"
                    >
                      Open form in new tab <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Direct Interactive Candidate Intake Form to WhatsApp */}
            {activeTab === 'interactive' && (
              <form className="p-6 md:p-10 space-y-8" onSubmit={handleSubmit}>
                <div className="flex items-center justify-between border-b border-brand-text/10 pb-4">
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
                          className="w-full bg-transparent border-b border-brand-text/20 py-2 text-brand-text outline-none transition-colors duration-300 focus:border-brand-purple peer placeholder-transparent text-sm"
                          placeholder={field.label}
                        />
                        <label 
                          htmlFor={field.name}
                          className={`absolute left-0 transition-all duration-300 pointer-events-none
                            ${focused === field.name || (formData as Record<string, string>)[field.name] ? '-top-5 text-xs text-brand-purple' : 'top-2 text-sm text-brand-text/40 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-5 peer-focus:text-xs peer-focus:text-brand-purple'}
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
                        rows={3}
                        value={formData.additional}
                        onChange={handleChange}
                        onFocus={() => setFocused('additional')}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-transparent border-b border-brand-text/20 py-2 text-brand-text outline-none transition-colors duration-300 focus:border-brand-purple peer placeholder-transparent resize-none text-sm"
                        placeholder="Additional Information"
                      ></textarea>
                      <label 
                        htmlFor="additional"
                        className={`absolute left-0 transition-all duration-300 pointer-events-none
                          ${focused === 'additional' || formData.additional ? '-top-5 text-xs text-brand-purple' : 'top-2 text-sm text-brand-text/40 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-5 peer-focus:text-xs peer-focus:text-brand-purple'}
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
                      className="underline font-semibold hover:text-brand-text"
                    >
                      Click here to resend
                    </a>
                  </div>
                )}

                <button type="submit" className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-brand-text transition-all duration-300 hover:scale-[1.01]">
                  <span className="absolute inset-0 rounded-xl bg-brand-purple/20 border border-brand-purple/50 group-hover:bg-brand-purple group-hover:shadow-[0_0_30px_rgba(165,0,242,0.6)] transition-all duration-300"></span>
                  <span className="relative flex items-center gap-3">
                    Send Inquiry to WhatsApp <ArrowRight className="text-brand-gold group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
              </form>
            )}

          </div>
        </motion.div>

      </div>
    </section>
  );
}
