import { Eye, EyeSlash } from 'phosphor-react'
import { selectWatchlist, createItem, removeItem, getWatchlist } from '../../reducers/watchlistSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'


const WatchlistButton = ({ movie, className }) => {
  const watchlist = useSelector(selectWatchlist)
  const dispatch = useDispatch()
  const itemOnWatchlist = watchlist.find(item => item.movieId === movie.id.toString())
  
  useEffect(() => {
    dispatch(getWatchlist())
  }, [dispatch])

  const addToWatchlist = () => {
    const item = {
      title: movie.title,
      releaseDate: movie.release_date,
      posterPath: movie.poster_path,
      movieId: movie.id.toString(),
    }

    dispatch(createItem(item))
  }

  const removeFromWatchlist = () => {
    dispatch(removeItem(itemOnWatchlist._id))
  }

  if (itemOnWatchlist) {
    return (
      <button className={className} onClick={removeFromWatchlist}>
        <EyeSlash />
      </button>
    )
  }

  return (
    <button className={className} onClick={addToWatchlist}>
      <Eye />
    </button>
  )
}

export default WatchlistButton