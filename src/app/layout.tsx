import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import { poppins } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: 'Trello Clon - devchallenges.io',
  description:
    'Trello Clon - Build with nextjs by Jonatha Marcelo Ruiz Silva'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
