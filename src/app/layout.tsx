import type { Metadata } from 'next'
import Script from 'next/script'
import { Montserrat, Roboto } from 'next/font/google'

import './globals.css'
 
const roboto = Roboto({
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  subsets: ['latin'],
  display: 'swap'
})

const montserrat = Montserrat({
  weight: '400',
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'heffay.dev | Full Stack Development',
  description: 'heffay.dev is a full stack development site that uses modern tech stacks to create a range of applications and websites.',
}

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html
      className={`${roboto.variable} ${montserrat.variable} antialiased`}
      lang='en'
    >
      <body>
        {children}
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="beforeInteractive"
        />
      </body>
    </html>
  )
}
