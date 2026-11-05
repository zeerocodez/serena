import React from 'react';
import { ArrowUpRight, Compass } from 'lucide-react';

interface HeroProps {
  onExploreCollection: () => void;
  onBookFitting: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCollection, onBookFitting }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F5] border-b border-[#E7E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Brand Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#064E3B]">
              <span className="w-6 h-px bg-[#C5A059]" />
              <span>Victoria Island &bull; Lagos Atelier</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-[1.08] font-normal" style={{ textWrap: 'balance' }}>
              Serena Diamond Bespoke: <br />
              <span className="italic font-light text-[#064E3B]">Executive Elegance</span> Redefined.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 dark:text-[#A7C4B8] leading-relaxed max-w-xl font-normal">
              Precision-tailored corporate wear, royal bespoke Nigerian native attire (grand Agbadas, pure silk Iro & Buba, and Senator suits), and boardroom sheath dresses designed for modern African women in leadership. Handcrafted in our Victoria Island atelier from world-class Italian worsted wools, Japanese crepe, and pure mulberry silk.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreCollection}
                className="px-8 py-4 bg-[#064E3B] text-[#FAF9F5] hover:bg-[#04241B] transition-colors text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Explore The Collection</span>
                <ArrowUpRight className="w-4 h-4 text-[#F3E5AB]" />
              </button>

              <button
                onClick={onBookFitting}
                className="px-8 py-4 bg-transparent border border-stone-800 dark:border-[#C5A059] text-stone-900 dark:text-[#FAF9F6] hover:border-[#064E3B] hover:text-[#064E3B] dark:hover:text-[#34D399] transition-colors text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#C5A059]" />
                <span>Book Atelier Fitting</span>
              </button>
            </div>

            {/* Quiet Nigerian Executive Proof Strip (Adjacent to claim) */}
            <div className="pt-6 border-t border-[#E7E2D5] dark:border-[#164132] flex items-center gap-6 sm:gap-8 text-xs text-stone-500 dark:text-[#8FA69B] flex-wrap">
              <div>
                <span className="block font-serif text-xl font-bold text-stone-900 dark:text-[#FAF9F6] tabular-nums">48-Hr</span>
                <span>Lagos Island Dispatch</span>
              </div>
              <div className="w-px h-8 bg-stone-200 dark:bg-[#164132]" />
              <div>
                <span className="block font-serif text-xl font-bold text-stone-900 dark:text-[#FAF9F6] tabular-nums">100%</span>
                <span>Bespoke Fit Guarantee</span>
              </div>
              <div className="w-px h-8 bg-stone-200 dark:bg-[#164132]" />
              <div>
                <span className="block font-serif text-xl font-bold text-stone-900 dark:text-[#FAF9F6]">VI &bull; Ikoyi</span>
                <span>Private Showrooms</span>
              </div>
              <div className="w-px h-8 bg-stone-200 dark:bg-[#164132] hidden sm:block" />
              <div className="hidden sm:block">
                <span className="block font-serif text-xl font-bold text-[#064E3B] dark:text-[#34D399]">Agbada & Trad</span>
                <span>Bespoke Commissions</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-sm bg-stone-200 shadow-xl border border-stone-300">
                <img
                  src="/images/hero_executive_elegance_1790771201703.jpg"
                  alt="Serena Diamond Bespoke Nigerian Executive Woman in Emerald Power Suit"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                  }}
                />
                
                {/* Measured Contrast Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Atelier Tag */}
                <div className="absolute bottom-5 left-5 right-5 text-white flex items-end justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#F3E5AB]">
                      Collection 2026
                    </div>
                    <div className="font-serif text-lg font-medium text-white">
                      The Victoria Suite &bull; Lagos
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-stone-300 uppercase tracking-wider block">Ready to Wear</span>
                    <span className="text-xs font-semibold text-[#F3E5AB] font-mono tabular-nums">₦285,000</span>
                  </div>
                </div>

              </div>

              {/* Decorative Subtle Gold Frame Accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-[#C5A059] pointer-events-none -z-0" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
