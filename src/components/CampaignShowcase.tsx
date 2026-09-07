import { motion } from "motion/react";

const images = [
  "911 SAMA.jpg",
  "A Stand.jpg",
  "April is here.jpg",
  "ASATT.jpg",
  "B2S.jpg",
  "Democracy.jpg",
  "DoI.jpg",
  "Hand Ill.jpg",
  "HPN MAY.jpg",
  "June.jpg",
  "LEEE II.jpg",
  "MDT is YOU.jpg",
  "Sama 4 President.jpg",
  "SAMA on SET.jpg",
  "Ella 4 VP.jpg",
  "LO4F fnl.jpg",
  "Manifesto.jpg",
  "Thank You msg.jpg",
  "WIF 01.jpg",
  "WIF fnl.jpg"
];

// Duplicate the array so it scrolls infinitely without gaps
const marqueeImages = [...images, ...images];

export function CampaignShowcase() {
  return (
    <section className="py-24 bg-[#08070A] relative overflow-hidden" id="campaigns">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col items-center text-center">
          <span className="uppercase text-[11px] tracking-[0.2em] text-brand-gold mb-4 block">Electoral Campaigns</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">The Winning Mandate</h2>
          <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
            Highlighting our successful creative direction for high-stakes faculty and departmental elections. 
            From the deep purple presidential campaign to the vibrant green vice-presidential vision, we crafted bold identities that inspire action.
          </p>
        </div>
      </div>
      
      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden flex">
        {/* Left and Right Gradients for smooth fade out */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#08070A] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#08070A] to-transparent z-10 pointer-events-none" />
        
        {/* 
          Using w-max and padding right on items ensures the total width is exactly 
          N * (item_width + padding). This makes translateX(-50%) mathematically perfect.
        */}
        <div className="flex w-max animate-marquee py-4 items-center hover:[animation-play-state:paused]">
          {marqueeImages.map((img, idx) => (
            <div 
              key={idx} 
              className="relative flex-none w-[280px] h-[380px] pr-6"
            >
              <div className="w-full h-full rounded-xl overflow-hidden campaign-shadow border border-white/5 group bg-[#111]">
                <img 
                  src={`/assets/${img}`} 
                  alt={`Campaign Flyer - ${img}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to a placeholder pattern if the user hasn't moved the image yet
                    e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop";
                    e.currentTarget.classList.add('opacity-30', 'grayscale');
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
