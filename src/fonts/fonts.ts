import { Poppins, Noto_Sans } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})
