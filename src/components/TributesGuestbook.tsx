import React, { useState, useEffect } from 'react';
import { Heart, MessageSquare, Send, Sparkles, User, Award, CheckCircle } from 'lucide-react';
import { INITIAL_TRIBUTES } from '../data/content';
import { Tribute } from '../types';

export const TributesGuestbook: React.FC = () => {
  const [tributes, setTributes] = useState<Tribute[]>([]);
  const [author, setAuthor] = useState('');
  const [relationship, setRelationship] = useState('Family');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const saved = localStorage.getItem('ezio_tributes');
    if (saved) {
      try {
        setTributes(JSON.parse(saved));
      } catch {
        setTributes(INITIAL_TRIBUTES);
      }
    } else {
      setTributes(INITIAL_TRIBUTES);
    }

    const savedLikes = localStorage.getItem('ezio_tribute_likes');
    if (savedLikes) {
      try {
        setLikedMap(JSON.parse(savedLikes));
      } catch {
        // Ignore parse error
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;

    const newTribute: Tribute = {
      id: `t-${Date.now()}`,
      author: author.trim(),
      relationship,
      date: 'Just now',
      message: message.trim(),
      likes: 1,
    };

    const updated = [newTribute, ...tributes];
    setTributes(updated);
    localStorage.setItem('ezio_tributes', JSON.stringify(updated));

    setAuthor('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleToggleLike = (id: string) => {
    const isLiked = likedMap[id];
    const newLikedMap = { ...likedMap, [id]: !isLiked };
    setLikedMap(newLikedMap);
    localStorage.setItem('ezio_tribute_likes', JSON.stringify(newLikedMap));

    const updated = tributes.map((t) => {
      if (t.id === id) {
        return {
          ...t,
          likes: isLiked ? t.likes - 1 : t.likes + 1,
        };
      }
      return t;
    });
    setTributes(updated);
    localStorage.setItem('ezio_tributes', JSON.stringify(updated));
  };

  return (
    <section id="tributes" aria-label="Tributes & Guestbook" className="py-24 px-4 sm:px-6 bg-[#FAF6EC] text-[#2B2B2B]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[#C9A24B] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            <MessageSquare size={14} />
            <span>Tributes &amp; Well Wishes</span>
          </div>

          <h2 className="font-serif text-[#4A0E1F] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Words of Honour &amp; Thanksgiving
          </h2>

          <p className="text-sm sm:text-base text-[#2B2B2B]/80 font-light leading-relaxed">
            Leave a congratulatory note, a scripture, or a personal prayer of thanksgiving for Jude Ifeanyi Anwukah (Eziokwubundu I).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tribute Submission Form */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-[#C9A24B]/40 shadow-lg sticky top-24">
            <div className="flex items-center gap-2 text-[#4A0E1F] font-serif font-bold text-lg mb-2">
              <Sparkles size={18} className="text-[#C9A24B]" />
              <span>Leave a Tribute or Prayer</span>
            </div>
            <p className="text-xs text-[#2B2B2B]/70 mb-5">
              Your words of joy and encouragement will be treasured by the family.
            </p>

            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center animate-fadeIn">
                <CheckCircle size={28} className="text-emerald-600 mx-auto mb-1.5" />
                <p className="font-serif font-semibold text-sm">Thank You for Your Blessing!</p>
                <p className="text-xs text-emerald-700 mt-1">
                  Your tribute has been added to the guestbook and preserved with love.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A0E1F] mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="e.g. Chief John Okafor"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#C9A24B]/30 focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] text-sm bg-[#FAF6EC]/40 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A0E1F] mb-1">
                    Your Relationship / Association
                  </label>
                  <select
                    value={relationship}
                    onChange={(e) => setRelationship(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#C9A24B]/30 focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] text-sm bg-white outline-none cursor-pointer"
                  >
                    <option value="Immediate Family">Immediate Family</option>
                    <option value="Extended Family">Extended Family</option>
                    <option value="Lifelong Friend">Lifelong Friend</option>
                    <option value="Community & Mentee">Community & Mentee</option>
                    <option value="Colleague / Associate">Colleague / Associate</option>
                    <option value="Church & Fellowship">Church & Fellowship</option>
                    <option value="Well Wisher">Well Wisher</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A0E1F] mb-1">
                    Your Message, Prayer or Testimony
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your heartfelt congratulations, praise to God, or memory here..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#C9A24B]/30 focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B] text-sm bg-[#FAF6EC]/40 outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#4A0E1F] text-[#FAF6EC] font-serif font-semibold text-xs sm:text-sm tracking-wide hover:bg-[#3B0A18] border border-[#C9A24B] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Send size={14} className="text-[#C9A24B]" />
                  <span>Publish Tribute to Guestbook</span>
                </button>
              </form>
            )}
          </div>

          {/* Tributes Stream */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#C9A24B]/30">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#4A0E1F]">
                Celebration Messages ({tributes.length})
              </span>
              <span className="text-xs text-[#A37E31] font-medium">
                Preserved for Jude Ifeanyi Anwukah
              </span>
            </div>

            <div className="space-y-4 max-h-[780px] overflow-y-auto pr-1">
              {tributes.map((tribute) => {
                const isLiked = likedMap[tribute.id];
                return (
                  <div
                    key={tribute.id}
                    className="bg-white rounded-xl p-5 border border-[#C9A24B]/30 shadow-xs hover:border-[#C9A24B]/70 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#FAF6EC] border border-[#C9A24B]/40 flex items-center justify-center text-[#4A0E1F]">
                          <User size={13} />
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-[#4A0E1F] text-sm leading-none">
                            {tribute.author}
                          </h4>
                          <span className="text-[10px] text-[#C9A24B] uppercase tracking-wider font-semibold">
                            {tribute.relationship}
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] text-[#2B2B2B]/50">{tribute.date}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#2B2B2B]/85 leading-relaxed font-light mb-3">
                      &ldquo;{tribute.message}&rdquo;
                    </p>

                    <div className="flex items-center justify-end">
                      <button
                        onClick={() => handleToggleLike(tribute.id)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition-all ${
                          isLiked
                            ? 'bg-rose-50 text-rose-600 font-medium'
                            : 'text-[#2B2B2B]/50 hover:text-rose-600 hover:bg-rose-50/50'
                        }`}
                        title="Amen & Bless this Tribute"
                      >
                        <Heart size={13} className={isLiked ? 'fill-rose-500 text-rose-500' : ''} />
                        <span>{tribute.likes}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
