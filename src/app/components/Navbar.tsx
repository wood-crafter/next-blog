'use client'
import { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import { IoIosSearch } from "react-icons/io"
import { VscColorMode } from "react-icons/vsc"
import { IoIosLogIn } from "react-icons/io"
import Navlink from './Navlink'
import { NAVLINKS , THEMES } from '../constant/index'
import { NavSearchingContext } from '../providers/use-searching'
import './nav.css'

export default function Navbar() {
  const { isNavSearching, setIsNavSearching, isThemePicking, setIsThemePicking } = useContext(NavSearchingContext)
  const handleSearchClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsNavSearching(!isNavSearching)
  }

  const handleThemeClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsThemePicking(!isThemePicking)
  }
  return (
    <div className='nav'>
      <Link className='nav-link home' href={'/'}>Home</Link>
      <div style={{display: 'flex', flexGrow: 1, justifyContent: 'end', height: '100%', alignItems: 'center'}}>
        {
          !isNavSearching &&
          <div className='nav-link-container'>
            <Navlink links={NAVLINKS}/>
          </div>
        }
        <div className={`search-box ${isNavSearching ? 'input-show' : ''}`}>
          {isNavSearching && <input className='search-input' onClick={(e) => {e.stopPropagation()} }/>}
          <div className="search-icon" onClick={handleSearchClick}>
            <IoIosSearch className={`nav-icon icon ${isNavSearching ? 'icon-black' : ''}`}/>
          </div>
        </div>
      </div>
      <div className="theme">
        <VscColorMode size="1.5rem" className="nav-icon" onClick={handleThemeClick}/>
        {isThemePicking && <div className='theme-container'>
          {THEMES.map(item => (
          <div className='theme-item'>{item.name}</div>
          ))}
        </div>}
      </div>
      <Link className="authen-icon" href={'/login'}><IoIosLogIn className="nav-icon" size="1.5rem" /></Link>
    </div>
  )
}
