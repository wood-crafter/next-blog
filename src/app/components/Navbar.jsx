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
      <Link href={'/'}>Home</Link>
      <Link href={'/'}>Post</Link>
      <Link href={'/tutorial'}>Tutorial</Link>
      <Link href={'/'}>Discuss</Link>
      <Link href={'/'}>Question</Link>
      <Link href={'/'}>Author</Link>
      <VscColorMode className="nav-icon"/>
      <div className="search-box">
        <input className="search-input" />
        <div className="search-icon">
          <IoIosSearch />
        </div>
      </div>
      <IoIosLogIn className="nav-icon"/>
    </nav>
  )
}
