import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <svg viewBox="0 0 197.3 218.4" className="w-8 h-8 text-brand-text group-hover:text-brand-purple transition-colors" style={{ overflow: 'visible' }} xmlns="http://www.w3.org/2000/svg">
              <g>
                <polygon fill="currentColor" points="197.3,52.2 197.3,186.4 130.5,158.1 130.5,79.6 73.8,55.6 73.8,0.3 74.3,0" />
                <polygon fill="currentColor" points="123.5,84.2 123.5,155.1 74.1,134.1 73.8,134 73.8,63.2" />
                <polygon fill="currentColor" points="123.5,162.7 123.5,218.4 0,166 0,32 0.2,31.9 66.8,60.2 66.8,138.5 71.4,140.6" />
              </g>
            </svg>
            <span className="font-display font-bold text-xl tracking-tight text-brand-text">
              Cube Studio
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[11px] uppercase tracking-[0.2em] font-medium text-brand-text/60 hover:text-brand-text transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-purple transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(165,0,242,0.8)]"></span>
                  </a>
                </li>
              ))}
            </ul>
            
            <button
              onClick={toggleTheme}
              className="p-2 text-brand-text/60 hover:text-brand-text transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#contact"
              className="px-6 py-2.5 glass rounded-full text-brand-text hover:bg-brand-text/10 transition-all border border-brand-text/20 uppercase tracking-widest text-[11px] font-medium"
            >
              Build My Campaign →
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-brand-text/60 hover:text-brand-text transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="text-brand-text p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-brand-bg/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-display font-medium text-brand-text/80 hover:text-brand-text"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 px-8 py-4 rounded-full bg-brand-purple text-white font-bold"
          >
            Build My Campaign →
          </a>
        </motion.div>
      )}
    </>
  );
}
