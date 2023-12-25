'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar  from './components/Navbar'
import { SearchContextProvider, ThemePickingContextProvider } from './providers/use-searching'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <SearchContextProvider>
        <ThemePickingContextProvider>
          <Navbar />
          <body className={inter.className}>{children}</body>
        </ThemePickingContextProvider>
      </SearchContextProvider>
    </html>
  )
}
