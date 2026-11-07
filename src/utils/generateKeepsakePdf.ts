import { jsPDF } from 'jspdf';
import { EVENT_DETAILS, THANKSGIVING_PILLARS } from '../data/content';

/**
 * Loads an image from a URL and converts it to a data URL for jsPDF embedding
 */
async function loadImageAsDataUrl(url: string): Promise<string | null> {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

export async function downloadKeepsakePdf(): Promise<void> {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Colors
  const burgundy = [74, 14, 31]; // #4A0E1F
  const gold = [201, 162, 75]; // #C9A24B
  const ivory = [250, 246, 236]; // #FAF6EC
  const darkInk = [43, 43, 43]; // #2B2B2B
  const champ = [239, 228, 200]; // #EFE4C8

  // Page Background
  doc.setFillColor(ivory[0], ivory[1], ivory[2]);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Decorative Outer Borders
  doc.setDrawColor(burgundy[0], burgundy[1], burgundy[2]);
  doc.setLineWidth(1.8);
  doc.rect(8, 8, pageWidth - 16, pageHeight - 16, 'S');

  // Inner Gold Fillet Border
  doc.setDrawColor(gold[0], gold[1], gold[2]);
  doc.setLineWidth(0.6);
  doc.rect(11, 11, pageWidth - 22, pageHeight - 22, 'S');

  // Corner Gold Squares
  const corners = [
    [11, 11],
    [pageWidth - 11, 11],
    [11, pageHeight - 11],
    [pageWidth - 11, pageHeight - 11],
  ];
  doc.setFillColor(gold[0], gold[1], gold[2]);
  corners.forEach(([cx, cy]) => {
    doc.circle(cx, cy, 1.4, 'F');
  });

  // Top Crest Box
  doc.setFillColor(burgundy[0], burgundy[1], burgundy[2]);
  doc.roundedRect(pageWidth / 2 - 12, 16, 24, 10, 2, 2, 'F');
  doc.setTextColor(gold[0], gold[1], gold[2]);
  doc.setFont('times', 'bold');
  doc.setFontSize(10);
  doc.text('E · I', pageWidth / 2, 22.5, { align: 'center' });

  // Eyebrow
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(gold[0], gold[1], gold[2]);
  doc.text('COMMEMORATIVE THANKSGIVING PROGRAM & MEMENTO', pageWidth / 2, 32, { align: 'center' });

  // Title
  doc.setFont('times', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(burgundy[0], burgundy[1], burgundy[2]);
  doc.text('THE TRIUMPH OF EZIOKWUBUNDU I', pageWidth / 2, 40, { align: 'center' });

  // Subtitle
  doc.setFont('times', 'italic');
  doc.setFontSize(9.5);
  doc.setTextColor(darkInk[0], darkInk[1], darkInk[2]);
  doc.text('A life of integrity · A journey of grace · A testimony of gratitude', pageWidth / 2, 45, { align: 'center' });

  // Thin Gold Divider
  doc.setDrawColor(gold[0], gold[1], gold[2]);
  doc.setLineWidth(0.4);
  doc.line(pageWidth / 2 - 35, 48, pageWidth / 2 + 35, 48);

  // Attempt to embed portrait
  const portraitData = await loadImageAsDataUrl('/images/hero.webp');
  let currentY = 52;
  if (portraitData) {
    const imgWidth = 36;
    const imgHeight = 36;
    const imgX = pageWidth / 2 - imgWidth / 2;
    
    // Gold Frame around image
    doc.setDrawColor(gold[0], gold[1], gold[2]);
    doc.setLineWidth(0.8);
    doc.rect(imgX - 1, currentY - 1, imgWidth + 2, imgHeight + 2, 'S');
    
    try {
      doc.addImage(portraitData, 'WEBP', imgX, currentY, imgWidth, imgHeight);
      currentY += imgHeight + 4;
    } catch {
      // Fallback if WEBP unsupported by jsPDF direct add
      currentY += 4;
    }
  }

  // Honoree Details
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(gold[0], gold[1], gold[2]);
  doc.text('IN HONOUR OF', pageWidth / 2, currentY + 3, { align: 'center' });

  doc.setFont('times', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(burgundy[0], burgundy[1], burgundy[2]);
  doc.text(EVENT_DETAILS.honoree.toUpperCase(), pageWidth / 2, currentY + 10, { align: 'center' });

  doc.setFont('times', 'italic');
  doc.setFontSize(11);
  doc.setTextColor(gold[0], gold[1], gold[2]);
  doc.text('Eziokwubundu I ("Truth is Life")', pageWidth / 2, currentY + 15, { align: 'center' });

  // Date Plaque
  doc.setFillColor(champ[0], champ[1], champ[2]);
  doc.setDrawColor(gold[0], gold[1], gold[2]);
  doc.setLineWidth(0.4);
  doc.roundedRect(pageWidth / 2 - 38, currentY + 19, 76, 7.5, 3.5, 3.5, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(burgundy[0], burgundy[1], burgundy[2]);
  doc.text(EVENT_DETAILS.dateFormatted, pageWidth / 2, currentY + 24, { align: 'center' });

  currentY += 33;

  // Order of Celebration Events
  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(burgundy[0], burgundy[1], burgundy[2]);
  doc.text('ORDER OF THANKSGIVING CELEBRATION', pageWidth / 2, currentY, { align: 'center' });

  doc.setDrawColor(gold[0], gold[1], gold[2]);
  doc.setLineWidth(0.3);
  doc.line(25, currentY + 2, pageWidth - 25, currentY + 2);

  currentY += 7;

  const orderOfEvents = [
    { time: '03:30 PM', event: 'Guest Arrival, Red Carpet Reception & Sacred Prelude' },
    { time: '04:00 PM', event: 'Opening Thanksgiving Prayer & Hymn: "Amazing Grace"' },
    { time: '04:20 PM', event: 'The Man & The Name: Reflection on Eziokwubundu ("Truth is Life")' },
    { time: '04:45 PM', event: 'The Testimony of Grace: From the Hospital Valley to Miraculous Recovery' },
    { time: '05:15 PM', event: 'Family Reflections, Kinship Tributes & Mentorship Acknowledgements' },
    { time: '05:45 PM', event: 'Lighting the Altar of Gratitude & Praise to God' },
    { time: '06:15 PM', event: 'Grand Banquet Dinner, Toasts & Joyous Celebration' },
    { time: '07:30 PM', event: 'Closing Benediction & Doxology: "To God Be The Glory"' },
  ];

  doc.setFontSize(8);
  orderOfEvents.forEach((item) => {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(burgundy[0], burgundy[1], burgundy[2]);
    doc.text(item.time, 25, currentY);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(darkInk[0], darkInk[1], darkInk[2]);
    doc.text(item.event, 48, currentY);
    currentY += 5.2;
  });

  currentY += 3;

  // The 5 Pillars of Thanksgiving
  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(burgundy[0], burgundy[1], burgundy[2]);
  doc.text('WE GIVE THANKS FOR', pageWidth / 2, currentY, { align: 'center' });

  doc.setDrawColor(gold[0], gold[1], gold[2]);
  doc.setLineWidth(0.3);
  doc.line(25, currentY + 2, pageWidth - 25, currentY + 2);

  currentY += 7;

  THANKSGIVING_PILLARS.forEach((pillar) => {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(gold[0], gold[1], gold[2]);
    doc.text(`${pillar.number}.`, 25, currentY);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(burgundy[0], burgundy[1], burgundy[2]);
    doc.text(pillar.title + ':', 32, currentY);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(darkInk[0], darkInk[1], darkInk[2]);
    const desc = doc.splitTextToSize(pillar.description, pageWidth - 80);
    doc.text(desc, 68, currentY);

    currentY += 5.5;
  });

  currentY += 4;

  // Bottom Commemorative Box
  doc.setFillColor(burgundy[0], burgundy[1], burgundy[2]);
  doc.roundedRect(20, currentY, pageWidth - 40, 20, 2, 2, 'F');

  doc.setFont('times', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(gold[0], gold[1], gold[2]);
  doc.text('TO GOD BE THE GLORY, NOW AND ALWAYS', pageWidth / 2, currentY + 7, { align: 'center' });

  doc.setFont('times', 'italic');
  doc.setFontSize(8);
  doc.setTextColor(ivory[0], ivory[1], ivory[2]);
  doc.text('"Today, we celebrate a man. Today, we honour a journey. Today, we give all glory to God."', pageWidth / 2, currentY + 12, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.5);
  doc.setTextColor(gold[0], gold[1], gold[2]);
  doc.text('Website experience & official memento created by SUNEXUS', pageWidth / 2, currentY + 17, { align: 'center' });

  // Save/Download PDF file
  doc.save('The_Triumph_of_Eziokwubundu_I_Program_Memento.pdf');
}
