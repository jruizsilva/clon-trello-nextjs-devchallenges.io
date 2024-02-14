import type { Metadata } from 'next'
import { Poppins, Noto_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

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
