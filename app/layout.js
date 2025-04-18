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
  title: 'Five Elements Forwarding',
  description: 'Global freight services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${raleway.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
