'use client'
import { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import { IoIosSearch } from "react-icons/io"
import { VscColorMode } from "react-icons/vsc"
import { IoIosLogIn } from "react-icons/io"
import Navlink from './Navlink'
import { NAVLINKS } from '../constant/index'
import { useIsNavSearching } from '../providers/use-setting'
import './nav.css'

export default function Navbar() {
  const { isNavSearching, setIsNavSearching } = useIsNavSearching()
  const [isShowingSearch, setIsShowingSearch] = useState(false)
  const onSearch = () => {
  }
  const handleSearchClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsShowingSearch(!isShowingSearch)
    setIsNavSearching('Show me on log')
  }
  useEffect(() => {
    console.info(isNavSearching)
  }, [isNavSearching])
  return (
    <nav>
      <Link className='nav-link home' href={'/'}>Home</Link>
      <div style={{display: 'flex', flexGrow: 1, justifyContent: 'end', height: '100%', alignItems: 'center'}}>
        {
          !isShowingSearch &&
          <div className='nav-link-container'>
            <Navlink links={NAVLINKS}/>
          </div>
        }
        <div className={`search-box ${isShowingSearch ? 'input-show' : ''}`}>
          {isShowingSearch && <input className='search-input'/>}
          <div className="search-icon" onClick={handleSearchClick}>
            <IoIosSearch className={`nav-icon icon ${isShowingSearch ? 'icon-black' : ''}`}/>
          </div>
        </div>
      </div>
      <VscColorMode size="1.5rem" className="nav-icon"/>
      <Link className="authen-icon" href={'/login'}><IoIosLogIn className="nav-icon" size="1.5rem" /></Link>
    </nav>
  )
}
