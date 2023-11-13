import { Manrope } from 'next/font/google'
import '@component/styles/global.css'

const manrope = Manrope({
  weight: ['200', '300', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.className}>
      <body id="next-body">{children}</body>
    </html>
  )
}
