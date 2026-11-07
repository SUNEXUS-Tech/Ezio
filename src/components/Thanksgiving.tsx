import React, { useState, useEffect } from 'react';
import { Flame, Sparkles, Check } from 'lucide-react';
import { THANKSGIVING_PILLARS } from '../data/content';

export const Thanksgiving: React.FC = () => {
  const [candlesLit, setCandlesLit] = useState<number>(142);
  const [hasLitCandle, setHasLitCandle] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem('ezio_candles_lit');
    if (saved) {
      setCandlesLit(parseInt(saved, 10));
    }
    const alreadyLit = localStorage.getItem('ezio_user_lit_candle');
    if (alreadyLit === 'true') {
      setHasLitCandle(true);
    }
  }, []);

  const handleLightCandle = () => {
    if (hasLitCandle) return;
    const newCount = candlesLit + 1;
    setCandlesLit(newCount);
    setHasLitCandle(true);
    localStorage.setItem('ezio_candles_lit', newCount.toString());
    localStorage.setItem('ezio_user_lit_candle', 'true');
  };

  return (
    <section id="thanks" aria-label="The Thanksgiving" className="py-24 px-4 sm:px-6 bg-[#FAF6EC] text-[#2B2B2B]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#C9A24B] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            <Sparkles size={14} />
            <span>The Thanksgiving · All Glory Belongs to God</span>
          </div>

          <h2 className="font-serif text-[#4A0E1F] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            A heart full of gratitude.
          </h2>

          <p className="text-base sm:text-lg text-[#2B2B2B]/85 font-light leading-relaxed mb-4">
            There are profound moments when ordinary words simply pale in comparison to what the human spirit feels.
            For Jude, his loving family, and everyone whose path has crossed with his, this celebration is such a sacred moment.
          </p>

          <p className="font-serif font-semibold text-[#4A0E1F] text-lg sm:text-xl">
            We give thanks for:
          </p>
        </div>

        {/* Thanksgiving Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {THANKSGIVING_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl p-5 border border-[#C9A24B]/30 shadow-sm hover:shadow-md transition-all ${
                idx === THANKSGIVING_PILLARS.length - 1 ? 'sm:col-span-2 sm:max-w-md sm:mx-auto w-full' : ''
              }`}
            >
              <div className="flex items-start gap-3.5">
                <span className="font-serif text-[#C9A24B] font-bold text-lg leading-none mt-0.5">
                  {pillar.number}.
                </span>
                <div>
                  <h3 className="font-serif font-bold text-[#4A0E1F] text-base mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2B2B2B]/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Candle of Gratitude */}
        <div className="max-w-xl mx-auto p-6 rounded-2xl bg-gradient-to-b from-[#FAF0D7] to-[#EFE4C8] border border-[#C9A24B]/40 text-center shadow-lg mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#4A0E1F] text-[#C9A24B] mb-3 shadow-md">
            <Flame size={24} className={hasLitCandle ? 'text-amber-400 animate-pulse' : 'text-[#C9A24B]'} />
          </div>

          <h4 className="font-serif font-bold text-lg text-[#4A0E1F] mb-1">
            Light a Candle of Gratitude
          </h4>
          <p className="text-xs sm:text-sm text-[#2B2B2B]/80 max-w-sm mx-auto mb-4">
            Join the family in lighting a virtual candle to thank the Lord for Jude&rsquo;s restored health and continued life.
          </p>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleLightCandle}
              disabled={hasLitCandle}
              className={`px-5 py-2.5 rounded-full font-serif text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2 transition-all shadow-md ${
                hasLitCandle
                  ? 'bg-[#3B0A18] text-[#FAF6EC] cursor-default'
                  : 'bg-[#C9A24B] text-[#4A0E1F] hover:bg-[#E0BE6C] hover:scale-102 cursor-pointer'
              }`}
            >
              {hasLitCandle ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span>Your Candle is Burning in Praise</span>
                </>
              ) : (
                <>
                  <Flame size={14} />
                  <span>Light a Candle of Praise</span>
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-[#A37E31] uppercase tracking-wider font-semibold mt-3">
            {candlesLit} Prayers & Candles Offered
          </p>
        </div>

        {/* Closing Inscription */}
        <div className="text-center pt-4 border-t border-[#C9A24B]/30">
          <p className="text-sm sm:text-base text-[#2B2B2B]/80 mb-2">
            Today, we celebrate with joyful and humble hearts, acknowledging that every good and perfect gift comes from above.
          </p>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#4A0E1F] tracking-wide mt-2">
            &ldquo;To God be the glory, now and always.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};
