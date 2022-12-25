import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../../reducers/userSlice'
import { selectEntries, getAllEntries } from '../../reducers/notebookSlice'

import LastMovie from './LastMovie'
import Calendar from './Calendar'
import UserAvatar from '../../UserAvatar'
import NewEntryButton from './NewEntryButton'


const Notebook = () => {
  const entries = useSelector(selectEntries)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllEntries())
  }, [dispatch])

  if (entries.length === 0) return <NoEntriesMessage />
  return (
    <main className='font-fira-sans mt-28 sm:w-11/12 md:w-3/4 2xl:w-[1000px] mx-auto my-12 grid grid-cols-3 grid-rows-2'>
      <User user={user} />
      <LastMovie entry={entries.at(-1)} username={user.username}/>
      <div className='mx-auto py-8'>
        
        <NewEntryButton />
      </div>

      <Calendar entries={entries} username={user.username} />
    </main>
  )
}


const SettingsButton = () => {
  return (
    <button
      className='bg-gray-800 px-6 py-3 rounded text-stone-100 hover:bg-gray-900'
    >
      Settings
    </button>
  )
}


const User = ({user}) => {
  return (
    <div className='flex justify-center items-center text-white'>
      <UserAvatar user={user} width={80}/>
      <div className='mx-4'>
        <h2 className='py-4'>
          {user.username}
        </h2>
        <SettingsButton>Settings</SettingsButton>
      </div>
    </div> 
  )
}

const NoEntriesMessage = () => {
  return (
    <div className='mt-32 p-10 text-white h-screen'>
      <p className='border border-white text-center p-32 max-w-[900px] mx-auto'>
        You haven't logged any movies yet<br/>
        Search and press the pencil icon for logging a movie you've recently watched
      </p>
    </div>
  )
}

export default Notebook