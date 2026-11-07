import { GalleryItem, Tribute } from '../types';

export const EVENT_DETAILS = {
  title: 'THE TRIUMPH OF EZIOKWUBUNDU I',
  subtitle: 'A life of integrity. A journey of grace. A testimony of gratitude.',
  honoree: 'Jude Ifeanyi Anwukah',
  titleHonorific: 'Eziokwubundu I',
  dateFormatted: 'SATURDAY · NOVEMBER 14, 2026',
  dateIso: '2026-11-14T16:00:00',
  theme: 'To God Be The Glory',
  venue: 'Grand Thanksgiving Sanctuary & Banquet Ballroom',
  address: 'Celebration Pavilion & Family Gathering Centre',
  time: '4:00 PM GMT+1 (Arrival & Red Carpet Reception at 3:30 PM)',
  quote: 'To God be the glory.',
  subQuote: 'A good name is a legacy. A generous heart is a blessing.',
};

export const INITIAL_TRIBUTES: Tribute[] = [
  {
    id: 't-1',
    author: 'Nneka Anwukah',
    relationship: 'Family',
    date: 'Recent',
    message:
      'Seeing you standing tall today, healthy, smiling, and strong in the Lord is the greatest miracle our family could have ever prayed for. Eziokwubundu, you are truly a living testimony of God’s unfailing mercy and grace.',
    likes: 24,
  },
  {
    id: 't-2',
    author: 'Chinedu & Family',
    relationship: 'Extended Family',
    date: 'Recent',
    message:
      'Your generosity has touched every corner of our lineage. When life was uncertain, your prayers and the prayers of many lifted you up. We celebrate your triumphant return to health and strength!',
    likes: 18,
  },
  {
    id: 't-3',
    author: 'Dr. Emeka O.',
    relationship: 'Lifelong Friend & Colleague',
    date: 'Recent',
    message:
      'Jude, you have always been a man whose word is his bond, truly Eziokwubundu ("Truth is Life"). Watching God pull you back from the brink of the valley has strengthened all our faith. God alone deserves this praise.',
    likes: 31,
  },
  {
    id: 't-4',
    author: 'Youth Mentorship Beneficiaries',
    relationship: 'Community & Mentees',
    date: 'Recent',
    message:
      'Daddy Jude, thank you for believing in the next generation and opening doors for countless young people. Your life is preserved for a mighty purpose. Happy Thanksgiving and long life in vibrant health!',
    likes: 27,
  },
  {
    id: 't-5',
    author: 'Elder Kalu M.',
    relationship: 'Church & Fellowship',
    date: 'Recent',
    message:
      'What the enemy meant for despair, God turned into a monumental testimony! You shall live to declare the wonderful works of the Lord in peace, sound mind, and continuous celebration.',
    likes: 19,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-man-1',
    title: 'The Man of Integrity',
    category: 'The Man Behind the Name',
    categorySlug: 'the-man-behind-the-name',
    imageSrc: '/images/man.webp',
    caption: 'Jude Ifeanyi Anwukah, standing in regal dignity with walking cane in traditional ceremonial attire.',
    dateOrEra: 'Eziokwubundu I',
  },
  {
    id: 'g-man-2',
    title: 'Regal Majesty & Honour',
    category: 'The Man Behind the Name',
    categorySlug: 'the-man-behind-the-name',
    imageSrc: '/images/hero.webp',
    caption: 'Adorned in custom gold and burgundy regal attire, reflecting a character rooted in honesty and warmth.',
    dateOrEra: 'Commemorative Portrait',
  },
  {
    id: 'g-journey-1',
    title: 'The Hospital ICU Battle',
    category: 'A Difficult Chapter',
    categorySlug: 'a-difficult-chapter',
    imageSrc: '/images/journey.webp',
    caption: 'A season that tested the strength of the body and courage of faith. Frighteningly close to the end, yet God held his breath.',
    dateOrEra: 'The Season of Battle',
  },
  {
    id: 'g-hope-1',
    title: 'Bedside Love & answered Prayer',
    category: 'Hope and Healing',
    categorySlug: 'hope-and-healing',
    imageSrc: '/images/hope.webp',
    caption: 'When hope found a reason to smile. Loved ones stood by his side as strength returned day by day through God’s divine intervention.',
    dateOrEra: 'Restoration & Healing',
  },
  {
    id: 'g-hope-2',
    title: 'The Grace of Divine Mercy',
    category: 'Hope and Healing',
    categorySlug: 'hope-and-healing',
    imageSrc: '/images/grace.webp',
    caption: 'What once seemed like an overwhelming valley has transformed into an eternal altar of thanksgiving.',
    dateOrEra: 'Divine Mercy',
  },
  {
    id: 'g-legacy-1',
    title: 'Generosity That Inspires Generations',
    category: 'Family and Togetherness',
    categorySlug: 'family-and-togetherness',
    imageSrc: '/images/man.webp',
    caption: 'A pillar to extended family and youth within the community, always investing in opportunity and belonging.',
    dateOrEra: 'Community Impact',
  },
  {
    id: 'g-celebration-1',
    title: 'A Life Celebrated & Restored',
    category: 'Life Celebrated',
    categorySlug: 'life-celebrated',
    imageSrc: '/images/celebration.webp',
    caption: 'Giving thanks for the gift of life, the fellowship of family, and another glorious chapter written by God.',
    dateOrEra: 'Saturday, Nov 14, 2026',
  },
];

export const THANKSGIVING_PILLARS = [
  {
    number: '01',
    title: 'The Gift of Life',
    description: 'Every breath is a sacred testament. We praise God for preserving life when medical wisdom acknowledged its limits.',
  },
  {
    number: '02',
    title: 'The Strength to Endure',
    description: 'The fortitude given to Jude, his wife, and loved ones to stand resilient through long nights in intensive care.',
  },
  {
    number: '03',
    title: 'Grace That Carried Him',
    description: 'A miraculous turnaround that turned anguish into triumph, bringing renewed vitality, clear speech, and robust strength.',
  },
  {
    number: '04',
    title: 'Family & Friends Who Stood Firm',
    description: 'The unbreakable bond of kinship, heartfelt intercession across continents, and unwavering presence at the bedside.',
  },
  {
    number: '05',
    title: 'The Opportunity of Another Chapter',
    description: 'Celebrating not merely survival, but the privilege of continuing a life of profound purpose, mentorship, and joy.',
  },
];
