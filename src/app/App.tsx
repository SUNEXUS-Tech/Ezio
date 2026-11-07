/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TheMan } from '../components/TheMan';
import { TheJourney } from '../components/TheJourney';
import { TheGrace } from '../components/TheGrace';
import { TheLegacy } from '../components/TheLegacy';
import { Togetherness } from '../components/Togetherness';
import { Thanksgiving } from '../components/Thanksgiving';
import { Celebration } from '../components/Celebration';
import { Gallery } from '../components/Gallery';
import { TributesGuestbook } from '../components/TributesGuestbook';
import { Footer } from '../components/Footer';
import { KeepsakeModal } from '../components/KeepsakeModal';

export default function App() {
  const [isKeepsakeOpen, setIsKeepsakeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF6EC] text-[#2B2B2B] flex flex-col font-sans selection:bg-[#C9A24B] selection:text-[#4A0E1F]">
      {/* Fixed Navigation Bar with Ambient Audio Synth */}
      <Navbar
        onOpenKeepsake={() => setIsKeepsakeOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenKeepsake={() => setIsKeepsakeOpen(true)}
        />

        {/* Section: The Man (Beyond the Title) */}
        <TheMan />

        {/* Section: The Journey (A Difficult Chapter - Hospital ICU) */}
        <TheJourney />

        {/* Section: The Grace of God (Hope and Healing) */}
        <TheGrace />

        {/* Section: The Legacy (Generosity & Youth Empowerment) */}
        <TheLegacy />

        {/* Section: Life, Family & Togetherness */}
        <Togetherness />

        {/* Section: The Thanksgiving (All Glory Belongs to God) */}
        <Thanksgiving />

        {/* Section: The Celebration (Saturday, November 14, 2026) */}
        <Celebration
          onOpenKeepsake={() => setIsKeepsakeOpen(true)}
        />

        {/* Section: Photo Gallery with Lightbox */}
        <Gallery />

        {/* Section: Tributes & Guestbook */}
        <TributesGuestbook />
      </main>

      {/* Footer */}
      <Footer />

      {/* Commemorative Keepsake Modal */}
      <KeepsakeModal
        isOpen={isKeepsakeOpen}
        onClose={() => setIsKeepsakeOpen(false)}
      />
    </div>
  );
}
