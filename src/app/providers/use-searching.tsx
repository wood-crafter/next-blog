import { createContext, useCallback, useContext, useState } from 'react'

export const NavSearchingContext = createContext<any>(null)
export const useIsNavSearching = () => {
  const { isNavSearching, setIsNavSearching } = useContext(NavSearchingContext)

  return { isNavSearching, setIsNavSearching }
}