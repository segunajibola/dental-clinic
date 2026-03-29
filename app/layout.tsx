import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2563eb',
}

export const metadata: Metadata = {
  title: 'SmileCraft Dental Clinic | Premium Dental Care in Lekki, Lagos',
  description:
    'SmileCraft Dental Clinic offers world-class dental services in Lekki, Lagos. Teeth whitening, implants, braces, Invisalign, root canal, and more at affordable prices.',
  keywords:
    'dental clinic Lekki Lagos, dentist Lekki, teeth whitening Lagos, dental implants Lagos, braces Lagos, orthodontist Lekki, best dentist Lagos Nigeria',
  authors: [{ name: 'SmileCraft Dental Clinic' }],
  openGraph: {
    title: 'SmileCraft Dental Clinic | Premium Dental Care in Lekki, Lagos',
    description:
      'Experience world-class dental care at SmileCraft. Located in Lekki Phase 1, Lagos. Book your appointment today.',
    type: 'website',
    locale: 'en_NG',
    siteName: 'SmileCraft Dental Clinic',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmileCraft Dental Clinic | Lekki, Lagos',
    description: 'Premium dental care in the heart of Lekki, Lagos.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
