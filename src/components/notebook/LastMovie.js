import { Link } from 'react-router-dom'
import MoviePoster from '../MoviePoster'
import Rating from '../Rating'

const LastMovie = ({ entry, username }) => {
  return (
    <aside className='row-span-2 col-span-2 flex bg-white rounded-md p-8 shadow lg:w-3/4 lg:mx-auto'>
      <MoviePoster className='w-1/2 rounded shadow' path={entry.posterPath} size='lg' />
      <article className='relative text-center flex flex-col justify-start ml-4 w-1/2'>
        <h2 className='font-bold text-2xl bg-gray-600 w-full p-2 text-white'>
          Last watched
        </h2>
        <h3 className='font-semibold text-xl my-4'>
          <Link to={`/notebook/${username}/${entry.id}`} className='hover:underline hover:decoration-orange-500 hover:decoration-2'>
            {entry.movieTitle}
          </Link>
        </h3>
        <div className='text-gray-500 my-4 sm:hidden lg:block h-24 overflow-y-auto'>{entry.content}</div>
        <div className='text-gray-900 text-sm'>you felt: <strong>{entry.feeling}</strong></div>
        <div className='absolute left-1/2 -bottom-6 text-2xl'>
          <Rating rating={entry.rating} />
        </div>
      </article>
    </aside>
  )
}

export default LastMovie