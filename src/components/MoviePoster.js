import movieHelper from '../utils/movieHelper'

const MoviePoster = ({ className, size, width, path }) => {
  return (
    <img
      alt='poster'
      src={movieHelper.getImgSrc(path, size)}
      className={className}
      width={width}
    />
  )
}

export default MoviePoster