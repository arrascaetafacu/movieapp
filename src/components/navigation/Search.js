import { useState } from 'react'
import { MagnifyingGlass } from 'phosphor-react'

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState('')
  const handleSearch = (event) => {
    event.preventDefault()
    const query = search.split(' ').join('+')
    onSearch(query)
  }

  return (
    <div className='bg-gray-200 rounded-sm px-2 py-1 text-gray-700 w-2/5'>
      <form className='flex justify-between' onSubmit={handleSearch}>
        <input
          type='search'
          className='bg-gray-200 p-1.5 w-4/5 focus:outline-none'
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
        <button
          type='submit'
          className='bg-transparent border-0 mx-3 hover:scale-110'
        >
          <MagnifyingGlass size={22} />
        </button>
      </form>
    </div>
  )
}

export default Search