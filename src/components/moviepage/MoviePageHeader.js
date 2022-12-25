import movieHelper from "../../utils/movieHelper"

const MoviePageHeader = ({ movie }) => {
  const backdropPath = `url(${movieHelper.getImgSrc(movie.backdrop_path, 'original')})`

  return (
    <header
      className='
        h-[85vh] w-full bg-cover bg-center flex flex-col justify-center
        font-bold text-gray-200 text-5xl
        p-10 space-y-2
        '
    style={{ backgroundImage: backdropPath}}
    >
      <h1>
        {movie.title}
      </h1>
      <h2 className='text-xl'>
        {movieHelper.getReleaseYear(movie.release_date)} | {movie.runtime}mins
      </h2>
    </header>

  )
}

export default MoviePageHeader
