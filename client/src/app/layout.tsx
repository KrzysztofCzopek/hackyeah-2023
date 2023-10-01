import './globals.css'
import type { Metadata } from 'next'
import { Handjet } from 'next/font/google'

const font = Handjet({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rekrutozaur',
  description: 'Rekrutozaur - The game about decision making!',
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
