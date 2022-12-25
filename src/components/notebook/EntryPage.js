import { Link, useParams, useNavigate } from 'react-router-dom'
import notebookService from '../../services/notebook'
import { useEffect, useState } from 'react'
import { Trash, PencilSimple } from 'phosphor-react'
import MoviePoster from '../MoviePoster'
import Rating from '../Rating'
import Button from '../Button'
import { useSelector } from 'react-redux'
import { selectUser } from '../../reducers/userSlice'


const EntryPage = () => {
  const [notebookEntry, setNotebookEntry] = useState(null)
  const user = useSelector(selectUser)
  const id = useParams().entryId
  const navigate = useNavigate()


  useEffect(() => {
    notebookService.setToken(user.token)
    notebookService
      .getOne(id)
      .then(returnedEntry => setNotebookEntry(returnedEntry))
    }, [user, id])


  const deleteEntry = async () => {
    notebookService.setToken(user.token)
    await notebookService.remove(notebookEntry.id)
    navigate('/notebook')

  }

  if (!(notebookEntry && user)) {
    return <h1>Entries can only be seen by their author</h1>
  }

  return (
    <main className='relative my-32 flex justify-center items-center bg-white rounded shadow-md md:w-3/5 2xl:w-[800px] mx-auto min-h-[500px]'>
      <PosterSection
        posterPath={notebookEntry.posterPath}
        feeling={notebookEntry.feeling}
        deleteEntry={deleteEntry}
      />
      <ContentSection
        movieTitle={notebookEntry.movieTitle}
        movieId={notebookEntry.movieId}
        content={notebookEntry.content}
        rating={notebookEntry.rating}
        date={notebookEntry.date}
      />
    </main>
  )
}


const PosterSection = ({ feeling, posterPath , deleteEntry }) => {
  return (
  <section className='flex flex-col justify-center items-center font-light text-center p-12'>
      <MoviePoster className='mt-2 mx-auto' size='md' path={posterPath}/>
      <p>You felt</p>
      <p className='font-normal'>{feeling}</p>
      <EntryOptions deleteEntry={deleteEntry} />
    </section>
  )
}


const EntryOptions = ({ deleteEntry }) => {
  return (
    <div className='mt-2 space-x-2'>
      <Button size='md' onClick={deleteEntry}>
          <Trash className='text-2xl'/>
        </Button>
        <Button size='md'>
          <PencilSimple className='text-2xl' />
      </Button>
    </div>
  )
}



const ContentSection = ({ content, movieTitle, rating, movieId, date }) => {
  return (
    <section className='px-10 w-3/4 lg:w-1/2'>
        <h1 className='text-lg font-semibold'>
          Notebook entry for:
        </h1>
        <h2 className='text-xl my-2 font-bold'>
          <Link className='hover:underline hover:decoration-orange-500 decoration-2' to={`/movie/${movieId}`}>
            {movieTitle}
          </Link>
        </h2>
        <h3>{new Date(date).toDateString()}</h3>
        <p className='w-3/4 my-8'>
          {content}
        </p>
        <Rating className='absolute bottom-5 right-8 mx-auto text-3xl' rating={rating} />
      </section>
  )
}

export default EntryPage