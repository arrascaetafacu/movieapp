const Details = ({ movie }) => {
  return (
    <div>
      <table className='table-auto mx-auto my-10'>
        <tr>
          <td className='py-4 px-6 font-bold'>Release date</td>
          <td className='py-4 px-6'>
            {movie.release_date}
          </td>
        </tr>
        <tr>
          <td className='py-4 px-6 font-bold'>Tagline</td>
          <td className='py-4 px-6 italic'>
            "{movie.tagline}"
          </td>
        </tr>
        <tr>
          <td className='py-4 px-6 font-bold'>Original title</td>
          <td className='py-4 px-6'>
            {movie.original_title}
          </td>
        </tr>
        <tr>
          <td className='py-4 px-6 font-bold'>Language</td>
          <td className='py-4 px-6'>
            {movie.original_language}
          </td>
        </tr>
        <tr>
          <td className='py-4 px-6 font-bold'>Budget</td>
          <td className='py-4 px-6'>
            ${movie.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </td>
        </tr>
        <tr>
          <td className='py-4 px-6 font-bold'>Revenue</td>
          <td className='py-4 px-6'>
            ${movie.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Details
