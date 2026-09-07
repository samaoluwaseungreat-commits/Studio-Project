import { motion } from 'motion/react';

const services = [
  { id: '01', title: 'STRATEGY', desc: 'We define the core message, target audience, and positioning to ensure your campaign resonates and stands out.' },
  { id: '02', title: 'STORY', desc: 'Crafting a compelling narrative that gives voters a reason to care and believe in your vision for the future.' },
  { id: '03', title: 'IDENTITY', desc: 'Designing a premium, memorable visual identity that commands attention and communicates confidence.' },
  { id: '04', title: 'CONTENT', desc: 'Producing high-impact digital and physical assets, from manifestos to social media campaigns.' },
  { id: '05', title: 'PRODUCTION', desc: 'Executing the strategy with precision, ensuring every touchpoint reflects the premium quality of your campaign.' }
];

export function Services() {
  return (
    <section id="services" className="relative py-32 bg-brand-bg overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24 md:w-1/2">
          <h2 className="text-sm font-medium tracking-widest text-brand-gold mb-4 uppercase flex items-center gap-2">
            <span className="w-4 h-[1px] bg-brand-gold"></span> Services
          </h2>
          <p className="text-3xl md:text-5xl font-display font-light text-white/90">
            A complete campaign system, engineered for impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-brand-purple/0 group-hover:bg-brand-purple/5 transition-colors duration-500 rounded-2xl blur-xl"></div>
              <div className="relative">
                <span className="text-7xl font-display font-bold text-white/5 group-hover:text-brand-purple/20 transition-colors duration-500 block mb-6">
                  {service.id}
                </span>
                <h3 className="text-2xl font-display font-semibold text-white/90 mb-4 group-hover:text-brand-purple transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/50 font-light leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-8 w-0 h-[1px] bg-brand-purple group-hover:w-12 transition-all duration-500 shadow-[0_0_8px_rgba(165,0,242,0.8)]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
