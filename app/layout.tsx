import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'
import Cursor from '@/components/ui/Cursor'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const dm = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Humaniti AI — AI Agency That Thinks Like a Human',
  description:
    'Humaniti AI builds intelligent automation systems, AI agents, and growth infrastructure for forward-thinking businesses. Stop hiring. Start automating.',
  keywords: ['AI agency', 'AI automation', 'AI agents', 'business automation', 'Humaniti AI'],
  openGraph: {
    title: 'Humaniti AI',
    description: 'AI automation infrastructure for ambitious businesses.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${dm.variable} ${jetbrains.variable}`}>
      <body>
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
