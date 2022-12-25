import { Link } from 'react-router-dom'

import MoviePoster from '../MoviePoster'
import movieHelper from '../../utils/movieHelper'

const Result = ({ movie, handleAddEntry }) => {
  return (
    <div className='bg-white flex mx-auto my-7 p-7 space-x-4 rounded shadow-md md:w-1/2 lg:w-3/4 lg:mx-auto'>
      <MoviePoster size='md' path={movie.poster_path} className='shaddow-md w-24 bg-gray-200 text-center bg-'/>
      <div className=''>
        <Link
          className='block text-sky-600 text-lg font-semibold'
          to={`/movie/${movie.id}`}
        >
          {movie.title}
        </Link>
        <h3 className='text-gray-700'>{movieHelper.getReleaseYear(movie.release_date)}</h3>

      </div>
    </div>
  )
}

const SearchResults = ({ results }) => {
  if (!results) return 'Loading'
  return (
    <main className='mt-32'>
      {results.map(movie =>
        <Result key={movie.id} movie={movie}/>
      )}
    </main>
    
  )
}

export default SearchResults