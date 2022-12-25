import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWatchlist, selectWatchlist, removeItem } from '../../reducers/watchlistSlice'
import AddEntryButton from '../AddEntryButton'
import { X, CaretCircleDown} from 'phosphor-react'
import { Link } from 'react-router-dom'
import { getDetails } from '../../reducers/movieSlice'

const descendingOrder = 1
const ascendingOrder = -1
const PRIORITIES = {
  '-1': 'Low',
  '0': 'Normal',
  '1': 'High'
}

const Watchlist = ({ handleAddEntryDialog }) => {
  const [filter, setFilter] = useState('title')
  const [order, setOrder] = useState(ascendingOrder)
  const watchlist = useSelector(selectWatchlist)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWatchlist())
  }, [dispatch])

  const handleSetFilter = (param) => {
    if (filter === param) {
      if (order === ascendingOrder) setOrder(descendingOrder)
      else setOrder(ascendingOrder)
    } else {
      setFilter(param)
      setOrder(ascendingOrder)
    }
  }

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id))
  }

  const handleCreateEntry = (movieId) => {
    dispatch(getDetails(movieId))
    handleAddEntryDialog()
  }

  const itemsToShow = [...watchlist].sort((a, b) => {
    if (a[filter] < b[filter]) return order
    if (a[filter] > b[filter]) return order * -1
    return 0
  })

  return (
    <main className='font-fira-sans h-screen text-center mt-32 mb-24 w-full md:w-4/5 lg:w-3/5 bg-white rounded mx-auto'>
      <h1 className='text-2xl bg-gray-600 text-white py-2'>Watchlist</h1>
      <div>
        <div className='grid grid-cols-5 items-center py-3 bg-sky-500 text-white'>
          <span>#</span>
          <span className='cursor-pointer' onClick={() => handleSetFilter('title')}><CaretCircleDown className='inline mr-0.5' />title</span>
          <span className='cursor-pointer' onClick={() => handleSetFilter('year')}><CaretCircleDown className='inline mr-0.5' />release</span>
          <span className='cursor-pointer' onClick={() => handleSetFilter('priority')}>Priority</span>
          <span>actions</span>
        </div>
        {itemsToShow.map((item, index) => (
          <div className='grid grid-cols-5 items-center py-3' key={item._id}>
            <span>{index}</span>
            <Link to={`/movie/${item.movieId}`}>{item.movieTitle}</Link>
            <span>{item.year}</span>
            <span>{PRIORITIES[item.priority.toString()]}</span>
            <div className='mx-auto text-lg flex space-x-1'>
              <AddEntryButton onClick={() => handleCreateEntry(item.movieId)} className='inline-block'/>
              <button onClick={() => handleRemoveItem(item._id)}>
                <X className='inline-block' />

              </button>
            </div>
            
          </div>
        ))}
      </div>
    </main>
  )
}

export default Watchlist

