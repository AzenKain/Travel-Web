
import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Travel Website',
  description: 'TR clone',
  icons:{
    icon:['vimeo.png?v=4'],
    apple:['vimeo.png?v=4']
  }
} 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
