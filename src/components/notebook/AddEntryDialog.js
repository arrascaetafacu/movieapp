import { useSelector, useDispatch } from 'react-redux'
import { selectMovie } from '../../reducers/movieSlice'
import { useState } from 'react'
import { X } from 'phosphor-react'
import { createEntry } from '../../reducers/notebookSlice'
import MoviePoster from '../MoviePoster'

const ratings = ['Dislike', 'Like', 'Love', 'Favorite']
const feelings = ["Excited", "Happy", "Sad", "Disappointed", "Calm", "Anxious", "Jealous", "Energetic", "Loved", "Creative", "Alone", "Cranky", "Frustrated", "Lost", "Tired", "Grateful"]



const AddEntryDialog = ({ isOpen, handleAddEntryDialog }) => {
  const movie = useSelector(selectMovie)
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const handleContentChange = ({ target }) => {
    setContent(target.value)

  }
  
  const handleCreateEntry = (event) => {
    event.preventDefault()
    const newEntry = {
      date: event.target.watchedDate.value,
      content: content,
      feeling: event.target.feeling.value,
      rating: event.target.rating.value,
      movieId: movie.id,
      movieTitle: movie.title,
      posterPath: movie.poster_path
    }
    dispatch(createEntry(newEntry))
    setContent('')
    handleAddEntryDialog()
  }


  if (!isOpen) return null

  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-black/50 flex justify-center items-center'>
      <div role='dialog' className='relative font-fira-sans text-center w-[700px] bg-white p-14 rounded'>
        <button
          className='absolute overflow-auto top-5 right-5 p-1 bg-red-300 hover:bg-red-400 cursor-pointer text-white rounded-xs'
          onClick={handleAddEntryDialog}
        >
          <X/>
        </button>
        <h1 className='text-xl'>Notebook</h1>
        <h2 className='text-lg font-bold my-2'>{movie.title}</h2>
        <form className='grid grid-cols-2 gap-4 mt-4' onSubmit={handleCreateEntry}>
          <textarea
            className='bg-gray-300 block w-full p-2'
            style={{
              resize: 'none',
            }}
            name='content'
            onChange={handleContentChange}
            value={content}
          />
          <MoviePoster className='justify-self-end rounded shadow' path={movie.poster_path} size='md'/>
          <div className='space-y-2 text-start'>
            <label>Watched on</label>
            <input type='date' name='watchedDate' className='block border border-gray-300 p-1 rounded focus:outline-none focus:ring focus:ring-sky-500'/>
            <label className='inline-block w-36'>How did you feel?</label>
            <select name='feeling' className='inline-block w-20 border border-gray-300 p-1 rounded'>
              {feelings.map(feeling => (
                <option key={feeling} value={feeling}>{feeling}</option>
              ))}

            </select><br/>
            <label className='inline-block w-36'>Rating</label>
            <select name='rating' className='inline-block w-20 border border-gray-300 p-1 rounded'>
              {ratings.map((rating, index) => (
                <option key={rating} value={index + 1}>{rating}</option>
              ))}
            </select>
          </div>
          <button className='py-2 h-16 self-end border-2 font-semibold w-36 justify-self-end rounded border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white'>
            Add it
          </button>
        </form>

      </div>
    </div>
  )
}

export default AddEntryDialog