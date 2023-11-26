'use client'
import { useState } from 'react'
import Link from 'next/link'
import { IoIosSearch } from "react-icons/io"
import { VscColorMode } from "react-icons/vsc"
import { IoIosLogIn } from "react-icons/io"
import Navlink from './Navlink'
import { NAVLINKS, THEMES } from '../constant/index'
import './nav.css'

export default function Navbar() {
  const [isShowingSearch, setIsShowingSearch] = useState(false)
  const [isShowingTheme, setIsShowingTheme] = useState(false)
  const onSearch = () => {
  }
  const handleSearchClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsShowingSearch(!isShowingSearch)
  }

  const handleThemeClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsShowingTheme(!isShowingTheme)
  }
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
      <div className="theme">
        <VscColorMode size="1.5rem" className="nav-icon" onClick={handleThemeClick}/>
        {isShowingTheme && <div className='theme-container'>
          {THEMES.map(item => (
          <div>{item.name}</div>
          ))}
        </div>}
      </div>
      <Link className="authen-icon" href={'/login'}><IoIosLogIn className="nav-icon" size="1.5rem" /></Link>
    </nav>
  )
}
