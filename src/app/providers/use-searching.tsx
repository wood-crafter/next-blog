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
