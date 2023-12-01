'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar  from './components/Navbar'
import { SearchContextProvider } from './providers/use-searching'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <SearchContextProvider>
        <Navbar />
        <body className={inter.className}>{children}</body>
      </SearchContextProvider>
    </html>
  )
}
