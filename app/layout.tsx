import type { Metadata } from 'next'
import { Literata, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const literata = Literata({ 
  subsets: ["latin"],
  variable: "--font-literata",
  display: "swap",
});

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Praktijk Lombaerts | Kinesitherapie & Osteopathie Antwerpen',
  description: 'Ervaren kinesitherapie en osteopathie in Antwerpen. Behandeling van rug- en nekpijn, hoofdpijn, duizeligheid. Yves Lombaerts (sinds 1986) en Sebastien Lombaerts.',
  keywords: ['kinesitherapie', 'osteopathie', 'dry needling', 'endermologie', 'Antwerpen', 'rugpijn', 'nekpijn', 'hoofdpijn'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${literata.variable} ${playfairDisplay.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
