import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1d4ed8',
}

export const metadata: Metadata = {
  title: 'All Smiles Dental Clinic | Putting a Smile on your Face | Lekki, Lagos',
  description:
    'All Smiles Dental Clinic — established 2016. World-class dental care in Lekki, Lagos. Teeth whitening, implants, braces, Invisalign, veneers, root canal and more. Two branches: Oniru & Chevron.',
  keywords:
    'dental clinic Lekki Lagos, dentist Lekki, All Smiles Dental Clinic, teeth whitening Lagos, dental implants Lagos, braces Lagos, orthodontist Lekki, best dentist Lagos Nigeria, Oniru dentist, Chevron dentist, veneers Lagos, root canal Lagos',
  authors: [{ name: 'All Smiles Dental Clinic' }],
  openGraph: {
    title: 'All Smiles Dental Clinic | Putting a Smile on your Face',
    description:
      'Putting a Smile on your Face since 2016. Experience world-class dental care at All Smiles — Lekki (Oniru) & Chevron, Lagos.',
    type: 'website',
    locale: 'en_NG',
    siteName: 'All Smiles Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Smiles Dental Clinic | Lekki, Lagos',
    description: 'Putting a Smile on your Face. Premium dental care — Oniru & Chevron branches.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
