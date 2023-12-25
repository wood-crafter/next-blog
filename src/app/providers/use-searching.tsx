import { ReactNode, createContext, useContext, useState } from 'react'

export const NavSearchingContext = createContext<any>(null)
export const SearchContextProvider = ({ children }: any) => {
  const [isNavSearching, setIsNavSearching] = useState(false)
  const handleLayoutClick = () => {
    setIsNavSearching(false);
  }

  return (
    <NavSearchingContext.Provider value={{ isNavSearching, setIsNavSearching }}>
      <div className='layout-wrapper' onClick={handleLayoutClick} >{children}</div>
    </NavSearchingContext.Provider>
  )
}

export const ThemePickingContext = createContext<any>(null)
export const ThemePickingContextProvider = ({ children }: any) => {
  const [isThemePicking, setIsThemePicking] = useState(false)
  const handleLayoutClick = () => {
    setIsThemePicking(false);
  }

  return (
    <ThemePickingContext.Provider value={{ isThemePicking, setIsThemePicking }}>
      <div className='layout-wrapper' onClick={handleLayoutClick} >{children}</div>
    </ThemePickingContext.Provider>
  )
}
