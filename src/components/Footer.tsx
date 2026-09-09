export function Footer() {
  return (
    <footer className="relative bg-brand-bg pt-32 pb-12 overflow-hidden border-t border-brand-text/5">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          
          <div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-brand-text/30 uppercase tracking-[0.2em]">Studio Ethos</span>
              <span className="text-sm font-light italic text-brand-text/70">"Built for candidates who intend to be remembered."</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 mb-12 md:mb-0 order-first md:order-last">
            <span className="text-[10px] text-brand-text/30 uppercase tracking-[0.2em]">Current Status</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[11px] font-bold text-brand-gold">Accepting Campaigns</span>
            </div>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold tracking-[0.2em] text-brand-text/30 uppercase mb-2">Services</span>
              <a href="#" className="text-sm text-brand-text/50 hover:text-brand-text transition-colors">Strategy</a>
              <a href="#" className="text-sm text-brand-text/50 hover:text-brand-text transition-colors">Branding</a>
              <a href="#" className="text-sm text-brand-text/50 hover:text-brand-text transition-colors">Storytelling</a>
              <a href="#" className="text-sm text-brand-text/50 hover:text-brand-text transition-colors">Content</a>
              <a href="#" className="text-sm text-brand-text/50 hover:text-brand-text transition-colors">Production</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold tracking-[0.2em] text-brand-text/30 uppercase mb-2">Connect</span>
              <a 
                href="https://wa.me/2348145653433" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-brand-text/50 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              >
                WhatsApp (+234 814 565 3433)
              </a>
              <a 
                href="mailto:thecubestudio01@gmail.com" 
                className="text-sm text-brand-text/50 hover:text-brand-purple transition-colors"
              >
                thecubestudio01@gmail.com
              </a>
              <a 
                href="https://instagram.com/cube_studio_official" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-brand-text/50 hover:text-pink-400 transition-colors"
              >
                Instagram (@cube_studio_official)
              </a>
              <a 
                href="https://x.com/CubeStudio01" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-brand-text/50 hover:text-brand-text transition-colors"
              >
                X (@CubeStudio01)
              </a>
              <a href="#contact" className="text-sm text-brand-text/50 hover:text-brand-text transition-colors">
                Candidate Intake Form
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-text/10 gap-4">
          <p className="text-xs text-brand-text/30">
            &copy; {new Date().getFullYear()} Cube Studio. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-brand-text/30">
            <a href="#" className="hover:text-brand-text transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-text transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
