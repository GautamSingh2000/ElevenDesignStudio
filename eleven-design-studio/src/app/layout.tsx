import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import { Anton, Instrument_Serif, Poppins } from 'next/font/google';
import '@/styles/theme.css';
import './globals.css';

const anton = Anton({ subsets: ['latin'], weight: '400', display: 'swap' });
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

// Inline style beats the :root fallbacks in theme.css regardless of stylesheet order.
const fontVars = {
  '--font-display': anton.style.fontFamily,
  '--font-accent': instrumentSerif.style.fontFamily,
  '--font-body': poppins.style.fontFamily,
} as CSSProperties;

export const metadata: Metadata = {
  title: 'Eleven Design Studio',
  description: 'Exhibition stall design, fabrication and brand experiences — New Delhi.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" style={fontVars}>
      <body>{children}</body>
    </html>
  );
}
