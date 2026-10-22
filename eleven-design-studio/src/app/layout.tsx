import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Anton, Instrument_Serif, Poppins } from 'next/font/google';
import '@/styles/theme.css';
import './globals.css';

// theme.css maps these to --font-display / --font-accent / --font-body.
const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--next-font-anton',
});
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--next-font-instrument-serif',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--next-font-poppins',
});

export const metadata: Metadata = {
  title: 'Eleven Design Studio',
  description: 'Exhibition stall design, fabrication and brand experiences — New Delhi.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${instrumentSerif.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
