import movieHelper from '../../utils/movieHelper'
import MoviePoster from '../MoviePoster'
import Rating from '../Rating'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CaretLeft, CaretRight } from 'phosphor-react'


const Calendar = ({ entries, username }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const currentMonthName = movieHelper.monthName(currentMonth)

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(prev => prev - 1)
    } else {
      setCurrentMonth(prev => prev - 1)
    }
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(prev => prev + 1)
    } else {
      setCurrentMonth(prev => prev + 1)
    }
  }

  const entriesToShow = entries.filter(entry => (
    movieHelper.getEntryMonth(entry.date) === currentMonth &&
    movieHelper.getEntryYear(entry.date) === currentYear
  ))

  return (
    <section className='col-span-3 shadow my-12'>
      <header className='flex justify-between bg-gray-600 text-center text-white h-12 text-2xl p-2'>
        <button onClick={prevMonth}>
          <CaretLeft />
        </button>
        <h1>{currentMonthName} {currentYear}</h1>
        <button onClick={nextMonth}>
          <CaretRight />
        </button>

      </header>
      <ol className='grid grid-cols-5 items-center text-center pb-8 py-2 bg-white shadow'>
        <li>Day</li>
        <li>Poster</li>
        <li className='col-span-2'>Title</li>
        <li>Rating</li>
        

        {entriesToShow.length !== 0
          ? entriesToShow.map((entry, i) => (
            <Entry 
              key={entry.id}
              entry={entry}
              username={username}
            />
          ))
          : <div className='col-span-4 mt-5'>No movies watched this month</div>
        }
      </ol>
    </section>

  )
}

const Entry = ({ entry, username }) => {
  const day = movieHelper.getEntryDay(entry.date)

  return (
    <>
      <hr className='col-span-5 h-0.5 my-2 bg-gray-300'/>
      <li className='text-center text-xl'>{day}</li>
      <li className='mx-auto'>
        <MoviePoster width={46} size='sm' path={entry.posterPath} /></li>
      <li className='col-span-2'>
        <Link to={`/notebook/${username}/${entry.id}`}>
          {entry.movieTitle}
        </Link>
      </li>
      <li className='mx-auto'><Rating rating={entry.rating}/></li>
    </>
  )
}

export default Calendar