import movieHelper from '../../utils/movieHelper'
import { UserSquare } from 'phosphor-react'


const Avatar = ({ path }) => {
  if (!path) return (
    <div className='w-28 h-[168px] bg-gray-300 flex justify-center items-center text-4xl text-gray-400'>
      <UserSquare/>
    </div>
  )
  return (
    <img
      alt='cast profile'
      src={movieHelper.getImgSrc(path, 'profile')}
      className='w-28 shadow-lg mx-auto aspect-auto'
    />
  )
}

const CastProfile = ({ person }) => {
  return (
    <figure className='text-center text-sm'>
      <Avatar path={person.profile_path}/>
      <span className='text-gray-800 block'>{person.name}</span>
      <span className='text-gray-600 text-xs'>{person.character}</span>
    </figure>
  )
}
  
const Cast = ({ movie }) => {
  const cast = movie.credits.cast

  return (
    <>
      <section className='overflow-y-auto h-[450px] grid grid-cols-4 mt-10 gap-3 mx-auto md:px-32'>
        {cast.map(person => (
          <CastProfile
            key={person.id}
            person={person}
          />
        ))}
      </section>
    </>
  )
}

export default Cast