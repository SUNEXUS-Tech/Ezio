import React, { useState } from 'react';
import { X, Printer, Download, Sparkles, CheckCircle2, Clock, Calendar } from 'lucide-react';
import { EVENT_DETAILS, THANKSGIVING_PILLARS } from '../data/content';
import { downloadKeepsakePdf } from '../utils/generateKeepsakePdf';

interface KeepsakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeepsakeModal: React.FC<KeepsakeModalProps> = ({ isOpen, onClose }) => {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    try {
      setIsGeneratingPdf(true);
      await downloadKeepsakePdf();
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (err) {
      console.error('Error generating keepsake PDF:', err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const programSchedule = [
    { time: '03:30 PM', title: 'Arrival & Sacred Prelude', desc: 'Red carpet reception, arrival of guests, ambient hymn prelude' },
    { time: '04:00 PM', title: 'Opening Thanksgiving Prayer', desc: 'Opening prayer of gratitude & congregational praise' },
    { time: '04:20 PM', title: 'The Man & The Name', desc: 'Reflection on "Eziokwubundu", Truth is Life & character of integrity' },
    { time: '04:45 PM', title: 'The Testimony of Grace', desc: 'Documenting the season of illness and God’s miraculous restoration' },
    { time: '05:15 PM', title: 'Family & Kinship Tributes', desc: 'Heartfelt words from children, relatives, and mentees' },
    { time: '05:45 PM', title: 'Altar of Praise', desc: 'Lighting candles of thanksgiving and songs of adoration to God' },
    { time: '06:15 PM', title: 'Banquet & Reception', desc: 'Communion of joy, cutting of celebratory cake, and toasts' },
    { time: '07:30 PM', title: 'Benediction & Doxology', desc: 'Closing blessings: "To God Be The Glory"' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-[#FAF6EC] rounded-2xl shadow-2xl border-4 border-[#C9A24B] p-6 sm:p-10 my-8 text-center text-[#2B2B2B] max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="no-print absolute top-4 right-4 w-9 h-9 rounded-full bg-[#4A0E1F]/10 hover:bg-[#4A0E1F]/20 flex items-center justify-center text-[#4A0E1F] transition-colors"
          aria-label="Close Keepsake"
        >
          <X size={20} />
        </button>

        {/* Heraldic Header */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#C9A24B] bg-[#4A0E1F] text-[#C9A24B] mb-3 shadow-md">
          <span className="font-serif font-bold text-lg">E·I</span>
        </div>

        <p className="text-[11px] uppercase tracking-[0.25em] text-[#C9A24B] font-semibold mb-1">
          Commemorative Celebration Keepsake &amp; Memento
        </p>

        <h2 className="font-serif text-[#4A0E1F] text-2xl sm:text-3xl font-bold tracking-wide uppercase mb-1">
          {EVENT_DETAILS.title}
        </h2>

        <p className="text-xs text-[#2B2B2B]/70 tracking-widest uppercase mb-4">
          A life of integrity · A journey of grace · A testimony of gratitude
        </p>

        <div className="w-24 h-px bg-[#C9A24B] mx-auto my-3" />

        {/* Portrait Thumbnail */}
        <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-[#C9A24B] shadow-md mb-3 bg-[#4A0E1F]">
          <img
            src="/images/hero.webp"
            alt="Jude Ifeanyi Anwukah"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <p className="text-[11px] uppercase tracking-[0.2em] text-[#A37E31] font-medium">
          In honour of
        </p>
        <p className="font-serif text-[#4A0E1F] text-2xl sm:text-3xl font-bold text-gold-gradient">
          {EVENT_DETAILS.honoree}
        </p>
        <p className="text-xs font-serif tracking-[0.2em] text-[#C9A24B] font-semibold mt-0.5 uppercase">
          Eziokwubundu I
        </p>

        {/* Date Plaque */}
        <div className="my-4 inline-block py-1.5 px-6 rounded-full border border-[#C9A24B] bg-[#EFE4C8]/80 text-[#4A0E1F] font-serif text-xs sm:text-sm font-semibold tracking-wider">
          <Calendar size={13} className="inline mr-1.5 text-[#C9A24B]" />
          {EVENT_DETAILS.dateFormatted}
        </div>

        {/* Action Bar (Top Quick Download) */}
        <div className="no-print my-5 p-4 rounded-xl bg-gradient-to-r from-[#4A0E1F] via-[#3B0A18] to-[#4A0E1F] text-[#FAF6EC] border border-[#C9A24B]/40 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
          <div className="text-left">
            <p className="font-serif font-bold text-sm text-[#C9A24B]">
              Download Official Program PDF Memento
            </p>
            <p className="text-[11px] text-[#FAF6EC]/80">
              Formatted archival PDF keepsake with order of events &amp; thanksgiving scripture.
            </p>
          </div>

          <button
            onClick={handleDownloadPdf}
            disabled={isGeneratingPdf}
            className="px-5 py-2.5 rounded-full bg-[#C9A24B] hover:bg-[#E0BE6C] text-[#4A0E1F] font-serif font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-2 shrink-0 cursor-pointer disabled:opacity-50"
          >
            {isGeneratingPdf ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-[#4A0E1F] border-t-transparent rounded-full animate-spin" />
                <span>Preparing PDF...</span>
              </>
            ) : downloadSuccess ? (
              <>
                <CheckCircle2 size={15} className="text-emerald-800" />
                <span>Downloaded!</span>
              </>
            ) : (
              <>
                <Download size={15} />
                <span>Download PDF Memento</span>
              </>
            )}
          </button>
        </div>

        {/* Program Schedule Preview */}
        <div className="my-5 text-left bg-white/80 p-5 rounded-xl border border-[#C9A24B]/30 shadow-xs">
          <div className="flex items-center gap-2 text-[#4A0E1F] font-serif font-bold text-sm mb-3 border-b border-[#C9A24B]/20 pb-2">
            <Clock size={16} className="text-[#C9A24B]" />
            <span>Celebration Program Order of Events</span>
          </div>

          <div className="space-y-2.5">
            {programSchedule.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs">
                <span className="font-serif font-bold text-[#4A0E1F] shrink-0 w-16 text-[11px]">
                  {item.time}
                </span>
                <div>
                  <strong className="text-[#4A0E1F] font-semibold block">{item.title}</strong>
                  <span className="text-[#2B2B2B]/75 text-[11px] leading-tight block">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative & Scripture */}
        <div className="my-4 text-xs sm:text-sm text-[#2B2B2B]/85 font-light leading-relaxed max-w-lg mx-auto space-y-2 text-left bg-white/60 p-4 rounded-xl border border-[#C9A24B]/20">
          <p>
            <strong>&ldquo;Eziokwu bu ndu&rdquo;</strong> (Truth is Life): We celebrate a man of integrity, compassion,
            and quiet generosity who has invested unceasingly in youth and family.
          </p>
          <p>
            When devastating illness threatened, prayers prevailed and divine mercy restored his breath and health.
          </p>
          <p className="italic text-[#4A0E1F] font-medium text-center pt-1 font-serif text-xs sm:text-sm">
            &ldquo;Today, we celebrate a man. Today, we honour a journey. Today, we give all glory to God.&rdquo;
          </p>
        </div>

        {/* Bottom Inscription */}
        <div className="pt-4 border-t border-[#C9A24B]/40 text-center">
          <p className="font-serif text-base sm:text-lg font-bold text-[#4A0E1F]">
            TO GOD BE THE GLORY, NOW AND ALWAYS.
          </p>
          <p className="text-[10px] text-[#2B2B2B]/60 uppercase tracking-widest mt-1">
            Website experience &amp; commemorative memento created by SUNEXUS
          </p>
        </div>

        {/* Actions (Hidden on Print) */}
        <div className="no-print mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleDownloadPdf}
            disabled={isGeneratingPdf}
            className="px-5 py-2.5 rounded-full bg-[#4A0E1F] text-[#FAF6EC] font-serif font-semibold text-xs tracking-wide hover:bg-[#3B0A18] border border-[#C9A24B] transition-all flex items-center gap-2 shadow-md cursor-pointer"
          >
            <Download size={14} className="text-[#C9A24B]" />
            <span>Download PDF Memento</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-full border border-[#C9A24B]/60 hover:border-[#C9A24B] text-xs font-medium text-[#4A0E1F] hover:bg-[#C9A24B]/10 transition-all flex items-center gap-1.5"
          >
            <Printer size={14} className="text-[#A37E31]" />
            <span>Print / Save as PDF</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-[#2B2B2B]/30 hover:border-[#2B2B2B] text-xs font-medium text-[#2B2B2B] transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
