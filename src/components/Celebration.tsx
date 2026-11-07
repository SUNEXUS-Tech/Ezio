import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Share2, Sparkles, Check, Download, BookOpen } from 'lucide-react';
import { EVENT_DETAILS } from '../data/content';

interface CelebrationProps {
  onOpenKeepsake: () => void;
}

export const Celebration: React.FC<CelebrationProps> = ({ onOpenKeepsake }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'The Triumph of Eziokwubundu I',
      text: 'Join us in celebrating a life of integrity, faith, and miraculous restoration for Jude Ifeanyi Anwukah on Saturday, November 14, 2026.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled or unsupported
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const generateIcsCalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//The Triumph of Eziokwubundu I//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'SUMMARY:The Triumph of Eziokwubundu I, Jude Ifeanyi Anwukah Thanksgiving',
      'DESCRIPTION:A solemn and joyous thanksgiving celebration in honour of Jude Ifeanyi Anwukah (Eziokwubundu I). Celebrating a life of integrity, faith, and testimony of gratitude.',
      'LOCATION:Grand Thanksgiving Ballroom & Celebration Center',
      'DTSTART:20261114T160000Z',
      'DTEND:20261114T210000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Triumph_of_Eziokwubundu_I.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="celebration" aria-label="The Celebration" className="py-24 px-4 sm:px-6 bg-[#4A0E1F] text-[#FAF6EC] relative overflow-hidden">
      {/* Decorative Warm Golden Ring */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border border-[#C9A24B]/20 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-[#C9A24B] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
              <Sparkles size={14} />
              <span>The Celebration</span>
            </div>

            <h2 className="font-serif text-[#FAF6EC] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              Celebrating life. <br />
              <span className="text-gold-gradient">Giving thanks. Sharing joy.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#FAF6EC]/90 font-light leading-relaxed mb-6">
              A special thanksgiving celebration and fellowship in honour of{' '}
              <strong className="text-[#C9A24B] font-semibold">{EVENT_DETAILS.honoree}</strong>,{' '}
              <span className="font-serif italic">{EVENT_DETAILS.titleHonorific}</span>.
            </p>

            {/* Event Details Card */}
            <div className="p-6 rounded-2xl bg-[#3B0A18]/80 border border-[#C9A24B]/40 shadow-xl mb-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#4A0E1F] border border-[#C9A24B] flex items-center justify-center text-[#C9A24B] shrink-0">
                  <Calendar size={16} />
                </div>
                <div>
                  <span className="text-[10px] text-[#C9A24B] uppercase tracking-wider block font-medium">Date</span>
                  <span className="font-serif font-bold text-sm sm:text-base text-[#FAF6EC]">
                    {EVENT_DETAILS.dateFormatted}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#4A0E1F] border border-[#C9A24B] flex items-center justify-center text-[#C9A24B] shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <span className="text-[10px] text-[#C9A24B] uppercase tracking-wider block font-medium">Time</span>
                  <span className="text-xs sm:text-sm text-[#FAF6EC]/90 font-medium">
                    {EVENT_DETAILS.time}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#4A0E1F] border border-[#C9A24B] flex items-center justify-center text-[#C9A24B] shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[10px] text-[#C9A24B] uppercase tracking-wider block font-medium">Location</span>
                  <span className="text-xs sm:text-sm text-[#FAF6EC]/90 font-medium">
                    {EVENT_DETAILS.venue}
                  </span>
                  <span className="text-[11px] text-[#FAF6EC]/60 block">{EVENT_DETAILS.address}</span>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#FAF6EC]/80 font-light leading-relaxed mb-6">
              An evening dedicated to boundless gratitude, quiet reflection, sacred fellowship, and the supreme glory of God.
            </p>

            {/* Inscription Quote */}
            <div className="border-t border-[#C9A24B]/40 pt-4 mb-8">
              <p className="font-serif text-lg sm:text-xl font-bold text-[#C9A24B]">
                The Triumph of Eziokwubundu I
              </p>
              <p className="text-xs sm:text-sm text-[#FAF6EC]/80 mt-1">
                A journey remembered. A life celebrated. A testimony preserved.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenKeepsake}
                className="px-6 py-2.5 rounded-full bg-[#C9A24B] text-[#4A0E1F] font-semibold text-xs sm:text-sm tracking-wide hover:bg-[#E0BE6C] transition-all shadow-md flex items-center gap-2"
              >
                <BookOpen size={15} />
                <span>Download Program Keepsake (PDF)</span>
              </button>

              <button
                onClick={generateIcsCalendar}
                className="px-4 py-2.5 rounded-full border border-[#C9A24B]/60 hover:border-[#C9A24B] text-[#FAF6EC] hover:bg-[#C9A24B]/10 text-xs sm:text-sm font-medium tracking-wide transition-all flex items-center gap-1.5"
                title="Download .ics calendar event"
              >
                <Download size={14} className="text-[#C9A24B]" />
                <span>Add to Calendar</span>
              </button>

              <button
                onClick={handleShare}
                className="px-4 py-2.5 rounded-full border border-white/20 hover:border-white/40 text-[#FAF6EC]/80 hover:text-white text-xs sm:text-sm font-medium tracking-wide transition-all flex items-center gap-1.5"
              >
                {copiedLink ? <Check size={14} className="text-emerald-400" /> : <Share2 size={14} />}
                <span>{copiedLink ? 'Link Copied!' : 'Share Event'}</span>
              </button>
            </div>
          </div>

          {/* Photo Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-2 rounded-2xl border border-[#C9A24B]/40 pointer-events-none" />
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#C9A24B] bg-[#3B0A18]">
                <img
                  src="/images/celebration.webp"
                  alt="Life Celebrated, Eziokwubundu I"
                  className="w-full h-auto object-cover max-h-[580px] group-hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-[#C9A24B] text-[10px] uppercase tracking-[0.25em] font-semibold mb-1">
                    Photo · Life Celebrated
                  </p>
                  <p className="font-serif text-white font-bold text-base sm:text-lg">
                    Joy & Thanksgiving
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
