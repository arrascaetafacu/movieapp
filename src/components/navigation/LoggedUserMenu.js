import { Link } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from "react"
import { Notebook, User, TelevisionSimple, SignOut } from 'phosphor-react'
import UserAvatar from '../../UserAvatar'
import { CaretDown } from 'phosphor-react'

const UserProfile= ({ user }) => {
  return (
    <div className='flex items-center space-x-1'>
      <UserAvatar user={user} width={40} />
      <span>{user.username} <CaretDown className='inline py-1'/></span>
    </div>
  )
}

const LoggedUserMenu = ({ user, handleLogout }) => {
  return (
    <Menu as='div' className='relative'>
      <Menu.Button>
        <UserProfile user={user} />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className='bg-white absolute top-16 right-0 flex flex-col items-start
          px-12 py-10 shadow-lg rounded w-[250px]'
        >
          <Menu.Item>
            {({ active }) => (
              <Link className={`flex items-center text-gray-700 my-4 ${active && 'underline decoration-orange-400 decoration-2'}`} to={'/profile'}>
                <User size={22} className={`text-gray-700 mr-1 ${active && 'text-orange-400'}`} />
                Profile
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link className={`flex items-center text-gray-700 my-4 ${active && 'underline decoration-orange-400 decoration-2'}`} to={'/notebook'}>
                <Notebook size={22} className={`text-gray-700 mr-1 ${active && 'text-orange-400'}`} />
                Notebook
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link className={`flex items-center text-gray-700 my-4 ${active && 'underline decoration-orange-400 decoration-2'}`} to={'/watchlist'}>
                <TelevisionSimple size={22} className={`text-gray-700 mr-1 ${active && 'text-orange-400'}`} />
                Watchlist
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button 
                className={`flex items-center text-gray-600 my-4 ${active && 'underline decoration-orange-400 decoration-2'}`}
                onClick={handleLogout}
              >
                 <SignOut size={22} className={`text-gray-600 mr-1 ${active && 'text-orange-400'}`} />
                Log out
              </button>   
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default LoggedUserMenu