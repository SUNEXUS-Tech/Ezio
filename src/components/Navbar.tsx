import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Menu, X, BookOpen, Sparkles } from 'lucide-react';
import { hymnAudio } from '../utils/audioSynth';

interface NavbarProps {
  onOpenKeepsake: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenKeepsake }) => {
  const [isPlayingMusic, setIsPlayingMusic] = useState(() => hymnAudio.getIsPlaying());
  const [volume, setVolume] = useState(0.7);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        'hero',
        'man',
        'journey',
        'grace',
        'legacy',
        'together',
        'thanks',
        'celebration',
        'gallery',
        'tributes',
      ];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDrawerOpen]);

  const handleToggleMusic = async () => {
    try {
      const playing = await hymnAudio.toggle();
      setIsPlayingMusic(playing);
    } catch (err) {
      console.error('Audio toggle error', err);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    hymnAudio.setVolume(val);
  };

  const navLinks = [
    { name: 'The Man', href: '#man', id: 'man', label: 'His Identity & Heritage' },
    { name: 'The Journey', href: '#journey', id: 'journey', label: 'The Difficult Chapter (ICU)' },
    { name: 'The Grace', href: '#grace', id: 'grace', label: 'Miraculous Healing' },
    { name: 'The Legacy', href: '#legacy', id: 'legacy', label: 'Generosity & Mentorship' },
    { name: 'Togetherness', href: '#together', id: 'together', label: 'Family, Love & Community' },
    { name: 'Thanksgiving', href: '#thanks', id: 'thanks', label: 'All Glory Belongs to God' },
    { name: 'The Celebration', href: '#celebration', id: 'celebration', label: 'Event Details & Schedule' },
    { name: 'Photo Gallery', href: '#gallery', id: 'gallery', label: 'Memories & Moments' },
    { name: 'Tributes', href: '#tributes', id: 'tributes', label: 'Guestbook & Testimonies' },
  ];

  const handleNavClick = (href: string) => {
    setIsDrawerOpen(false);
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#240611]/98 backdrop-blur-md shadow-lg shadow-black/50 py-2 sm:py-2.5 border-b border-[#C9A24B]/35'
            : 'bg-[#300B18]/95 backdrop-blur-md shadow-md shadow-black/40 py-2.5 sm:py-3 border-b border-[#C9A24B]/25'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
          {/* 1. Brand Identity Text (No circular E-I logo) */}
          <a
            href="#hero"
            className="flex flex-col text-left group transition-opacity hover:opacity-95 focus:outline-none min-w-0 select-none"
            aria-label="The Triumph of Eziokwubundu I Homepage"
          >
            <span className="font-serif font-bold text-base sm:text-lg tracking-wide text-gold-gradient truncate leading-tight group-hover:brightness-110 transition-all">
              Eziokwubundu I
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#FAF6EC]/75 tracking-[0.2em] uppercase font-medium truncate leading-none mt-0.5">
              Jude Ifeanyi Anwukah
            </span>
          </a>

          {/* Right Controls: 2. Circular Music Player & 3. Hamburger Menu */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            {/* 2. Circular Music Play/Pause Control */}
            <div className="relative">
              <button
                onClick={handleToggleMusic}
                onMouseEnter={() => setShowVolumeSlider(true)}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C9A24B]/50 ${
                  isPlayingMusic
                    ? 'border border-[#C9A24B] bg-[#C9A24B]/25 text-[#FAF6EC] shadow-sm shadow-[#C9A24B]/30 ring-2 ring-[#C9A24B]/40'
                    : 'border border-[#C9A24B]/50 hover:border-[#C9A24B] bg-[#300B18] text-[#C9A24B] hover:text-[#FAF6EC] hover:bg-[#C9A24B]/15'
                }`}
                title={isPlayingMusic ? 'Pause Sacred Hymn' : 'Play Sacred Hymn'}
                aria-label={isPlayingMusic ? 'Pause Sacred Hymn' : 'Play Sacred Hymn'}
              >
                {isPlayingMusic ? (
                  <Pause size={15} className="fill-[#C9A24B] text-[#C9A24B]" />
                ) : (
                  <Play size={15} className="fill-[#C9A24B] text-[#C9A24B] ml-0.5" />
                )}
              </button>

              {/* Volume Slider Popover on hover */}
              {showVolumeSlider && (
                <div
                  onMouseEnter={() => setShowVolumeSlider(true)}
                  onMouseLeave={() => setShowVolumeSlider(false)}
                  className="absolute right-0 top-full mt-2 p-2.5 bg-[#240611] border border-[#C9A24B]/40 rounded-xl shadow-2xl flex items-center gap-2.5 z-50 min-w-[140px] backdrop-blur-md"
                >
                  <button
                    onClick={() => {
                      const newVol = volume > 0 ? 0 : 0.7;
                      setVolume(newVol);
                      hymnAudio.setVolume(newVol);
                    }}
                    className="text-[#C9A24B] hover:text-[#FAF6EC] transition-colors p-0.5"
                    aria-label={volume === 0 ? 'Unmute' : 'Mute'}
                    title={volume === 0 ? 'Unmute' : 'Mute'}
                  >
                    {volume === 0 ? <VolumeX size={15} /> : <Volume2 size={15} />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-20 accent-[#C9A24B] h-1.5 cursor-pointer bg-[#300B18] rounded"
                    aria-label="Hymn volume"
                  />
                </div>
              )}
            </div>

            {/* 3. Hamburger Menu Icon Button */}
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#C9A24B]/50 hover:border-[#C9A24B] bg-[#300B18] hover:bg-[#C9A24B]/15 text-[#C9A24B] hover:text-[#FAF6EC] flex items-center justify-center transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C9A24B]/50"
              aria-label={isDrawerOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              title={isDrawerOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isDrawerOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Navigation Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 flex justify-end"
          onClick={() => setIsDrawerOpen(false)}
        >
          {/* Slide-over Drawer Panel */}
          <div
            className="w-full max-w-sm sm:max-w-md bg-[#240611] border-l border-[#C9A24B]/30 h-full flex flex-col justify-between p-6 sm:p-8 shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#C9A24B]/20">
                <div className="flex flex-col text-left">
                  <span className="font-serif text-[#C9A24B] font-bold text-lg sm:text-xl tracking-wide">
                    Eziokwubundu I
                  </span>
                  <span className="text-[10px] text-[#FAF6EC]/70 tracking-[0.2em] uppercase font-medium">
                    Jude Ifeanyi Anwukah
                  </span>
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-9 h-9 rounded-full border border-[#C9A24B]/40 hover:border-[#C9A24B] text-[#C9A24B] hover:text-[#FAF6EC] flex items-center justify-center transition-colors focus:outline-none"
                  aria-label="Close Menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Ceremony Motto */}
              <div className="my-4 px-3 py-1.5 rounded-lg bg-[#300B18] border border-[#C9A24B]/25 flex items-center gap-2 text-xs text-[#C9A24B]">
                <Sparkles size={13} className="text-[#E0BE6C] flex-shrink-0" />
                <span className="italic font-serif text-[#FAF6EC]/90 text-[11px] sm:text-xs">
                  &ldquo;A Solemn & Joyous Family Thanksgiving&rdquo;
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1.5 mt-5" aria-label="Drawer Navigation Links">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.href)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                        isActive
                          ? 'bg-[#C9A24B]/20 text-[#FAF6EC] border border-[#C9A24B]/40'
                          : 'text-[#FAF6EC]/85 hover:text-[#FAF6EC] hover:bg-[#300B18]/70 border border-transparent'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span
                          className={`font-serif text-sm sm:text-base tracking-wide transition-colors ${
                            isActive
                              ? 'text-[#C9A24B] font-bold'
                              : 'group-hover:text-[#C9A24B]'
                          }`}
                        >
                          {link.name}
                        </span>
                        <span className="text-[10px] text-[#FAF6EC]/60 tracking-wider">
                          {link.label}
                        </span>
                      </div>
                      <span
                        className={`text-xs transition-transform group-hover:translate-x-1 ${
                          isActive ? 'text-[#C9A24B]' : 'text-[#C9A24B]/50'
                        }`}
                      >
                        →
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-6 mt-6 border-t border-[#C9A24B]/20 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsDrawerOpen(false);
                  onOpenKeepsake();
                }}
                className="w-full py-3 px-4 rounded-full bg-[#C9A24B] text-[#300B18] font-semibold text-xs sm:text-sm hover:bg-[#E0BE6C] transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/40"
              >
                <BookOpen size={16} />
                <span>Program Keepsake (PDF)</span>
              </button>

              <p className="text-center text-[10px] text-[#FAF6EC]/50 uppercase tracking-widest mt-1">
                Saturday, November 14, 2026
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
