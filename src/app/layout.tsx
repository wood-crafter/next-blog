'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar  from './components/Navbar'
import { NavSearchingContext, useIsNavSearching } from './providers/use-searching'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NavSearchingContext.Provider value={useIsNavSearching}>
        <Navbar />
        <body className={inter.className}>{children}</body>
      </NavSearchingContext.Provider>
    </html>
  )
}
