import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectMovie, getDetails } from '../../reducers/movieSlice'

import MoviePageHeader from './MoviePageHeader'
import AddEntryButton from '../AddEntryButton'
import WatchlistButton from './WatchlistButton'
import InfoTabs from './InfoTabs'


const Moviepage = ({ handleAddEntryDialog }) => {
  const movie = useSelector(selectMovie)
  const id = useParams().id
  const dispatch = useDispatch()
  
  console.log(movie)
  useEffect(() => {
    dispatch(getDetails(id))
  }, [dispatch, id])


  if (!movie) return 'loading...'

  return (
    <div className='font-fira-sans'>
      <MoviePageHeader movie={movie} />
      <main
        className='mb-20 mx-auto px-4 py-8 bg-white shadow text-gray-800
          md:w-4/5 md:-mt-14 md:rounded
          max-w-[1000px]
          '
      >
        <section className='text-center space-y-6'>
            <h3 className='text-lg font-bold'>{movie.title}</h3>
            <h4>
              {movie.genres.map(g =>
                <span key={g.name}>{g.name} </span>)}
            </h4>
            <AddEntryButton
              onClick={handleAddEntryDialog}
              className='mx-auto text-2xl text-sky-400'
            />
            <WatchlistButton
              movie={movie}
              className='mx-auto text-2xl ml-3 text-sky-400'
            />
            <p className='text-gray-600 mx-auto max-w-[500px]'>{movie.overview}</p>
            <p className='p-4 text-sm'>
              Directed by 
              <Link className='bg-sky-400 p-2 mx-2 text-white hover:bg-sky-500'>{movie.credits.crew.find(p => p.job === 'Director').name}</Link>
            </p>
        </section>
        <InfoTabs movie={movie} />
      </main>
      
    </div>
  )
}

export default Moviepage