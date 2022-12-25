import { Link } from 'react-router-dom'
import Search from './Search'
import NavMenu from './NavMenu'
import { FilmSlate } from 'phosphor-react'


const Navigation = ({ onSearch }) => {
  return (
    <nav className='font-fira-sans px-12 bg-white shadow-sm fixed top-0 flex justify-around items-center h-16 w-full z-20 text-md text-gray-800 2xl:px-64'>
      <h1 className='hidden md:block'>
        <Link to='/'><FilmSlate size={22} className='inline' /> movies</Link>
      </h1>
      <Search onSearch={onSearch} />
      <NavMenu />
    </nav>
  )
}

export default Navigation