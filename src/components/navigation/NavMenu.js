import { Link, useNavigate } from 'react-router-dom'
import Button from '../Button'
import LoggedUserMenu from './LoggedUserMenu'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../reducers/userSlice'


const NavMenu = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem('loggedUser')
    navigate('/')
  }

  if (!user) {
    return (
      <div className='flex space-x-4 items-center'>
          <Button>
            <Link to='/signup'>Sign up</Link>
          </Button>
          <Link to='/login'>Login</Link>
      </div>
    )
  }

  return (
    <LoggedUserMenu user={user} handleLogout={handleLogout} />
  )
}

export default NavMenu