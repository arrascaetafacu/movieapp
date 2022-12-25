const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const getReleaseYear = (date) => {
  return date.split('-')[0]
}

const getEntryDay = (date) => {
  return new Date(date).getDate()
}

const getImgSrc = (path, size) => {
  const baseUrl = 'https://image.tmdb.org/t/p'

  const fileSize = {
    'sm': 'w92',
    'md': 'w154',
    'lg': 'w185',
    'original': 'original',
    'profile': 'w185'

  }

  return `${baseUrl}/${fileSize[size]}/${path}`
}

const getEntryYear = (date) => {
  return new Date(date).getFullYear()
}

const getEntryMonth = (date) => {
  return new Date(date).getMonth()
}

const monthName = (month) => {
  return MONTHS[month]

}

const movieHelper = {
  getReleaseYear,
  getImgSrc,
  getEntryDay,
  getEntryYear,
  getEntryMonth,
  monthName
}

export default movieHelper