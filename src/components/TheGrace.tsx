import React from 'react';
import { Heart, Sun, Activity, CheckCircle2 } from 'lucide-react';

export const TheGrace: React.FC = () => {
  return (
    <section id="grace" aria-label="The Grace of God" className="py-24 px-4 sm:px-6 bg-[#EFE4C8] text-[#2B2B2B]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-[#A37E31] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              <Sun size={14} />
              <span>The Grace of God</span>
            </div>

            <h2 className="font-serif text-[#4A0E1F] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              When hope found a reason to celebrate.
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#2B2B2B]/85 font-light leading-relaxed">
              <p>
                What once seemed like an insurmountable, overwhelming valley has now blossomed into an enduring altar of
                thanksgiving and joy.
              </p>

              <p>
                Jude&rsquo;s courageous turnaround through illness and miraculous restoration is a living testament to his family,
                kinsmen, and community of the tangible reality of God&rsquo;s mercy, the miraculous potency of collective prayer,
                and the fragile sacredness of human existence.
              </p>

              <p>
                Day by day, as healing poured through his body, the fear that once gripped the hospital corridor melted into
                gratitude. The tubes were removed, eyes opened with clarity, voice returned with warmth, and laughter once again filled
                the room.
              </p>

              <p>
                Today, we do not gather simply to remember a painful or difficult experience. We assemble in celebration of the
                magnificent gift of life, the triumph of faith over fear, the precious joy of being together, and the sacred privilege
                to stand together and give thanks.
              </p>
            </div>

            {/* Milestones of Restoration */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-8">
              <div className="p-3.5 bg-white/80 rounded-xl border border-[#C9A24B]/30 shadow-xs">
                <div className="flex items-center gap-1.5 text-[#4A0E1F] font-serif font-bold text-xs mb-1">
                  <CheckCircle2 size={13} className="text-[#C9A24B]" />
                  <span>The Turning Point</span>
                </div>
                <p className="text-[11px] text-[#2B2B2B]/75 leading-relaxed">
                  Vitals stabilized against all odds, surprising medical teams with supernatural recovery.
                </p>
              </div>

              <div className="p-3.5 bg-white/80 rounded-xl border border-[#C9A24B]/30 shadow-xs">
                <div className="flex items-center gap-1.5 text-[#4A0E1F] font-serif font-bold text-xs mb-1">
                  <Heart size={13} className="text-[#C9A24B]" />
                  <span>Loving Presence</span>
                </div>
                <p className="text-[11px] text-[#2B2B2B]/75 leading-relaxed">
                  Unbroken vigil of loved ones, holding hands in quiet solidarity and unceasing hope.
                </p>
              </div>

              <div className="p-3.5 bg-white/80 rounded-xl border border-[#C9A24B]/30 shadow-xs">
                <div className="flex items-center gap-1.5 text-[#4A0E1F] font-serif font-bold text-xs mb-1">
                  <Activity size={13} className="text-[#C9A24B]" />
                  <span>Renewed Vigor</span>
                </div>
                <p className="text-[11px] text-[#2B2B2B]/75 leading-relaxed">
                  Returning on his feet with vitality, sound mind, and a heart brimming with praise.
                </p>
              </div>
            </div>

            {/* Section Quote */}
            <div className="border-t border-[#C9A24B]/40 pt-5 mt-2">
              <blockquote className="font-serif italic text-lg sm:text-xl text-[#4A0E1F] font-semibold leading-relaxed">
                &ldquo;What a difference a day can make. What a testimony grace can write.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Photo Column */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center">
            <div className="relative group w-full max-w-md">
              {/* Outer Decorative Gold Frame */}
              <div className="absolute -inset-2.5 rounded-2xl border-2 border-[#C9A24B]/50 transform rotate-1 group-hover:rotate-0 transition-transform duration-500 pointer-events-none" />
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#C9A24B] bg-[#4A0E1F]">
                <img
                  src="/images/hope.webp"
                  alt="Bedside recovery and love: Hope and healing"
                  className="w-full h-auto object-cover max-h-[580px] transition-transform duration-700 group-hover:scale-102"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-[#C9A24B] text-[11px] uppercase tracking-[0.2em] font-medium">
                    Bedside Vigil · Hope Restored
                  </p>
                  <p className="text-white font-serif text-base sm:text-lg font-semibold tracking-wide">
                    Faith, Family & Healing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
