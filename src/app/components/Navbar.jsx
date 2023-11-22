'use client'
import { useState } from 'react'
import Link from 'next/link'
import { IoIosSearch } from "react-icons/io"
import { VscColorMode } from "react-icons/vsc"
import { IoIosLogIn } from "react-icons/io"
import './nav.css'

export default function Navbar() {
  const [isShowingSearch, setIsShowingSearch] = useState(false)
  const onSearch = () => {
  }
  const handleSearchClick = (e) => {
    e.stopPropagation()
    setIsShowingSearch(!isShowingSearch)
  }
  return (
    <nav>
      <Link className='nav-link home' href={'/'}>Home</Link>
      <div style={{display: 'flex', flexGrow: 1, justifyContent: 'end', height: '100%', alignItems: 'center'}}>
        <div className={`${isShowingSearch ? 'hidden' : 'nav-link-container'}`}>
          <Link className='nav-link' href={'/post'}>Post</Link>
          <Link className='nav-link' href={'/tutorial'}>Tutorial</Link>
          <Link className='nav-link' href={'/discuss'}>Discuss</Link>
          <Link className='nav-link' href={'/question'}>Question</Link>
          <Link className='nav-link' href={'/author'}>Author</Link>
        </div>
        <div className={`search-box ${isShowingSearch ? 'input-show' : ''}`}>
          <input className={`search-input ${isShowingSearch ? '' : 'hidden'}`} />
          <div className="search-icon" onClick={handleSearchClick}>
            <IoIosSearch className={`nav-icon ${isShowingSearch ? 'icon-black' : ''}`}/>
          </div>
        </div>
      </div>
      <VscColorMode size="1.5rem" className="nav-icon"/>
      <Link className="nav-icon authen-icon" href={'/login'}><IoIosLogIn size="1.5rem" /></Link>
    </nav>
  )
}
