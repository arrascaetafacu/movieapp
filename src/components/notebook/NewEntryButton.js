import { PencilSimpleLine } from 'phosphor-react'

const NewEntryButton = () => {
  return (
    <button
      className='flex h-20 rounded-md overflow-hidden shadow hover:scale-110 transition-transform'>
      <div className='px-3 h-full flex items-center text-white bg-orange-500 shadow-md'>
        new entry
      </div>
      <div className='bg-white h-full flex items-center px-2'>
        <PencilSimpleLine size={20} weight='fill' className={'text-orange-500'}/>
      </div>
    </button>
  )
}

export default NewEntryButton