import Link from 'next/link'
import './nav.css'
interface INavlink {
  path: string,
  title: string
}
interface IParams {
  links: INavlink[]
}

export default function Navlink(params: IParams) {
  const { links } = params
  return (
    <>
      {links.map(link => <Link className='nav-link' href={link.path}>{link.title}</Link>)}
    </>
  )
}
