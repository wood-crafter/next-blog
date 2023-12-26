import { ReactNode, createContext, useContext, useState } from 'react'

export const NavSearchingContext = createContext<any>(null)
export const SearchContextProvider = ({ children }: any) => {
  const [isNavSearching, setIsNavSearching] = useState(false)
  const [isThemePicking, setIsThemePicking] = useState(false)
  const handleLayoutClick = () => {
    setIsNavSearching(false);
    setIsThemePicking(false);
  }

  return (
    <NavSearchingContext.Provider value={{ isNavSearching, setIsNavSearching, isThemePicking, setIsThemePicking }}>
      <div onClick={handleLayoutClick} >{children}</div>
    </NavSearchingContext.Provider>
  )
}
