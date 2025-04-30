import './globals.css'
import { Raleway, Inter } from 'next/font/google'

// Configure Raleway font
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-raleway',
  display: 'swap',
})

// Optional: For the Inter font
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Five Elements Forwarding | Global Freight & Logistics Services',
  description: 'Specialized in container logistics, import/export, airfreight, and LCL shipping. Your trusted logistics partner based in Dubai, delivering efficient freight solutions worldwide.',
  keywords: 'freight forwarding, global logistics, container shipping, import export, airfreight, LCL shipping, Dubai logistics, international shipping, freight services, cargo transportation, supply chain solutions, containerized cargo',
  authors: [{ name: 'Five Elements Forwarding' }],
  creator: 'Five Elements Forwarding',
  publisher: 'Five Elements Forwarding',
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  verification: {
    google: 'ba_kLuFW8Bq2opo4JOPlFXs1byZBqtZYPHDTnenuG6Q',
  },
  metadataBase: new URL('https://5elementsforwarding.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Five Elements Forwarding | Global Freight Solutions',
    description: 'Your trusted partner in international logistics. From ocean and airfreight to land transportation—delivering efficient, end-to-end freight solutions tailored for your business.',
    url: 'https://5elementsforwarding.com',
    siteName: 'Five Elements Forwarding',
    images: [
      {
        url: '/ship.png',
        width: 1200,
        height: 630,
        alt: 'Five Elements Forwarding - Global Freight Services',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Five Elements Forwarding | Global Freight Services',
    description: 'Specialized in container logistics, import/export, airfreight, and LCL shipping from Dubai.',
    images: ['/twitter-image.jpg'],
    creator: '@5elementsforwarding',
  },
  icons: {
    icon: '/favicon.ico',
    // Optional: Add additional icon sizes
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${raleway.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
