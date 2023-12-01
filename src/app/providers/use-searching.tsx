import { ReactNode, createContext, useContext, useState } from 'react'

export const NavSearchingContext = createContext<any>(null)
export const SearchContextProvider = ({ children }: any) => {
  const [isNavSearching, setIsNavSearching] = useState(false)

  return (
    <NavSearchingContext.Provider value={{ isNavSearching, setIsNavSearching }}>
      {children}
    </NavSearchingContext.Provider>
  )
}
