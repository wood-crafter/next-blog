import Link from 'next/link'
import { IoIosSearch } from "react-icons/io"
import { VscColorMode } from "react-icons/vsc"
import { IoIosLogIn } from "react-icons/io"
import './nav.css'

export default function Navbar() {
  const onSearch = () => {
  }
  return (
    <nav>
      <Link className='nav-link home' href={'/'}>Home</Link>
      <Link className='nav-link' href={'/post'}>Post</Link>
      <Link className='nav-link' href={'/tutorial'}>Tutorial</Link>
      <Link className='nav-link' href={'/discuss'}>Discuss</Link>
      <Link className='nav-link' href={'/question'}>Question</Link>
      <Link className='nav-link' href={'/author'}>Author</Link>
      <VscColorMode size="1.5rem" className="nav-icon"/>
      <div className="search-box">
        <input className="search-input hidden" />
        <div className="search-icon">
          <IoIosSearch className="nav-icon"/>
        </div>
      </div>
      <IoIosLogIn size="1.5rem" className="nav-icon authen-icon"/>
    </nav>
  )
}
