import logo from '../assets/tmdb-logo.svg'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='bg-white text-gray-700 w-full py-8 space-x-24 text-center text-sm align-middle'>
      <Link to='/' className='hover:underline'>Home</Link>
      <a className='hover:underline'>About Me</a>
      <a className='hover:underline'>Github</a>
      <span>
        Powered by <a href='https://www.themoviedb.org/'>
            <img alt='tmdb logo' src={logo} width={90} className='inline ml-1'/>
          </a>
        </span>
    </footer>
  )
}

export default Footer