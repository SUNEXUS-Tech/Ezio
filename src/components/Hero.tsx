import React, { useState, useEffect } from 'react';
import { Calendar, ChevronDown, Heart, Sparkles, BookOpen } from 'lucide-react';
import { EVENT_DETAILS } from '../data/content';

interface HeroProps {
  onOpenKeepsake: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenKeepsake }) => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-11-14T16:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Celebration Welcome and Introduction"
      className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-4 pt-16 sm:pt-20 pb-6 sm:pb-8 overflow-hidden bg-[#4A0E1F]"
    >
      {/* Background Graphic / Photo Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(74, 14, 31, 0.72) 0%, rgba(59, 10, 24, 0.88) 60%, rgba(53, 10, 22, 0.98) 100%), url('/images/hero.webp')`,
        }}
      />

      {/* Subtle Warm Decorative Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A24B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Card Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Heraldic Medallion Motif */}
        <div className="inline-flex items-center gap-2 mb-2.5 sm:mb-3 px-3.5 py-1 rounded-full border border-[#C9A24B]/40 bg-[#3B0A18]/60 backdrop-blur-sm text-[#C9A24B] text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
          <Sparkles size={13} className="text-[#E0BE6C]" />
          <span>A Solemn & Joyous Family Thanksgiving</span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-serif text-[#FAF6EC] font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide uppercase leading-tight mb-2 sm:mb-3 drop-shadow-md">
          THE TRIUMPH OF
          <br />
          <span className="text-gold-gradient font-serif">EZIOKWUBUNDU I</span>
        </h1>

        {/* Core Subtitle */}
        <p className="font-sans text-[#FAF6EC]/90 text-xs sm:text-sm md:text-base max-w-2xl font-light tracking-wide mb-4 sm:mb-5 leading-relaxed">
          {EVENT_DETAILS.subtitle}
        </p>

        {/* Honoree Box */}
        <div className="w-full max-w-xl mx-auto py-3.5 sm:py-4 px-5 sm:px-6 rounded-xl border border-[#C9A24B]/35 bg-[#3B0A18]/70 backdrop-blur-md shadow-2xl mb-4 sm:mb-5">
          <p className="text-[10px] sm:text-xs text-[#FAF6EC]/70 uppercase tracking-[0.25em] font-medium mb-0.5">
            In honour of
          </p>
          <p className="font-serif text-[#FAF6EC] text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-gold-gradient">
            {EVENT_DETAILS.honoree}
          </p>
          <p className="text-[11px] sm:text-xs text-[#C9A24B] font-serif tracking-[0.2em] uppercase mt-0.5">
            Eziokwubundu I
          </p>
          <div className="w-12 h-px bg-[#C9A24B]/50 mx-auto my-2" />
          <p className="font-serif italic text-sm sm:text-base text-[#FAF6EC]/90 tracking-wide">
            &ldquo;To God be the glory.&rdquo;
          </p>
        </div>

        {/* Date Plaque */}
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-[#C9A24B] bg-[#4A0E1F]/80 text-[#FAF6EC] text-xs sm:text-sm tracking-[0.18em] font-medium mb-4 sm:mb-5">
          <Calendar size={14} className="text-[#C9A24B]" />
          <span>{EVENT_DETAILS.dateFormatted}</span>
        </div>

        {/* Countdown Timer */}
        <div className="mb-4 sm:mb-5 w-full max-w-md">
          <p className="text-[10px] sm:text-xs text-[#C9A24B] uppercase tracking-[0.2em] font-medium mb-2">
            Countdown to the Celebration
          </p>
          <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((unit, idx) => (
              <div
                key={idx}
                className="bg-[#3B0A18]/80 border border-[#C9A24B]/30 rounded-lg p-2 sm:p-2.5 text-center backdrop-blur-sm"
              >
                <span className="block font-serif text-lg sm:text-xl font-bold text-[#FAF6EC]">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#C9A24B]">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 w-full">
          <a
            href="#man"
            className="px-5 py-2.5 rounded-full bg-[#C9A24B] text-[#4A0E1F] font-semibold text-xs sm:text-sm tracking-wide hover:bg-[#E0BE6C] transition-all shadow-lg hover:shadow-[#C9A24B]/20"
          >
            Explore the Testimony
          </a>

          <button
            onClick={onOpenKeepsake}
            className="px-5 py-2.5 rounded-full border border-[#C9A24B] text-[#FAF6EC] font-medium text-xs sm:text-sm tracking-wide hover:bg-[#C9A24B]/20 transition-all flex items-center gap-2 shadow-md"
          >
            <BookOpen size={14} className="text-[#C9A24B]" />
            <span>Program Keepsake (PDF)</span>
          </button>

          <a
            href="#tributes"
            className="px-4 py-2.5 rounded-full border border-white/20 text-[#FAF6EC]/80 hover:text-white font-normal text-xs sm:text-sm tracking-wide hover:bg-white/10 transition-all flex items-center gap-1.5"
          >
            <Heart size={14} className="text-[#C9A24B]" />
            <span>Leave a Tribute</span>
          </a>
        </div>
      </div>

      {/* Scroll Down Cue */}
      <a
        href="#man"
        className="relative z-10 mt-4 sm:mt-5 inline-flex flex-col items-center gap-1 text-[#C9A24B] hover:text-[#E0BE6C] transition-colors focus:outline-none"
        aria-label="Scroll down to explore story"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Scroll to explore</span>
        <ChevronDown size={16} className="animate-bounce text-[#C9A24B]" />
      </a>
    </section>
  );
};
