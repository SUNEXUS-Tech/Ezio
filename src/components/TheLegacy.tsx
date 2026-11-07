import React from 'react';
import { GraduationCap, HeartHandshake, Users, Sparkles } from 'lucide-react';

export const TheLegacy: React.FC = () => {
  const legacyPillars = [
    {
      icon: <GraduationCap className="text-[#C9A24B]" size={22} />,
      title: 'Youth & Education',
      tagline: 'Opening Doors of Opportunity',
      description:
        'Sponsoring schooling, educational requirements, and apprenticeships for young relatives and community members who dreamed of a brighter tomorrow.',
    },
    {
      icon: <Users className="text-[#C9A24B]" size={22} />,
      title: 'Extended Family Pillar',
      tagline: 'Kinsman of Steadfast Support',
      description:
        'A dependable beacon during family meetings, communal deliberations, and times of need. Standing tall as a pillar for brothers, sisters, and cousins.',
    },
    {
      icon: <HeartHandshake className="text-[#C9A24B]" size={22} />,
      title: 'Quiet Benevolence',
      tagline: 'Giving Without Fanfare',
      description:
        'A generous heart that delights in giving in secret. Touching lives, settling medical bills, and easing hardships with no expectation of praise.',
    },
  ];

  return (
    <section id="legacy" aria-label="The Legacy of Generosity" className="py-24 px-4 sm:px-6 bg-[#FAF6EC] text-[#2B2B2B]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#C9A24B] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            <Sparkles size={14} />
            <span>The Legacy</span>
          </div>

          <h2 className="font-serif text-[#4A0E1F] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            His generosity is part of his story.
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#2B2B2B]/85 font-light leading-relaxed">
            <p>
              A person&rsquo;s true impact is not measured only by what they achieve, but by the lives they influence,
              the burdens they lift, and the smiles they restore.
            </p>
            <p>
              Jude&rsquo;s generosity and deep personal investment in young people, especially within his extended family
              and ancestral community, form a foundational pillar of the triumph we celebrate today.
            </p>
            <p>
              His willingness to support others speaks of a life that values people, fosters opportunity, and protects the
              future of the next generation. The sea of love surrounding him today is a mirror of the many lives he has quietly touched.
            </p>
          </div>
        </div>

        {/* Legacy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {legacyPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl p-6 border border-[#C9A24B]/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-lg bg-[#4A0E1F]/5 border border-[#C9A24B]/40 flex items-center justify-center mb-4 group-hover:bg-[#4A0E1F] transition-colors">
                {pillar.icon}
              </div>

              <h3 className="font-serif text-lg font-bold text-[#4A0E1F] mb-1">
                {pillar.title}
              </h3>

              <p className="text-xs font-medium text-[#C9A24B] uppercase tracking-wider mb-3">
                {pillar.tagline}
              </p>

              <p className="text-xs sm:text-sm text-[#2B2B2B]/75 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Legacy Banner with Heroic Inscription */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#4A0E1F] via-[#3B0A18] to-[#4A0E1F] text-center text-[#FAF6EC] border border-[#C9A24B]/40 shadow-xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C9A24B] font-semibold mb-2">
            Enduring Testament
          </p>
          <blockquote className="font-serif italic text-xl sm:text-2xl md:text-3xl text-gold-gradient font-bold leading-relaxed max-w-2xl mx-auto">
            &ldquo;The greatest legacy is the good we leave in other lives.&rdquo;
          </blockquote>
          <p className="mt-3 text-xs sm:text-sm text-[#FAF6EC]/70 tracking-wide">
            In honour of Jude Ifeanyi Anwukah · Eziokwubundu I
          </p>
        </div>
      </div>
    </section>
  );
};
