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
  const { isNavSearching, setIsNavSearching } = useIsNavSearching()
  return (
    <html lang="en">
      <NavSearchingContext.Provider value={{ isNavSearching, setIsNavSearching }} >
        <Navbar />
        <body className={inter.className}>{children}</body>
      </NavSearchingContext.Provider>
    </html>
  )
}
