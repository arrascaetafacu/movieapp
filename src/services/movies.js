import axios from 'axios'

const baseUrl = 'https://api.themoviedb.org/3'
const API_KEY = process.env.REACT_APP_API_KEY


const searchMovies = async (query) => {
  const url = `${baseUrl}/search/movie?api_key=${API_KEY}&query=${query}`
  const response = await axios.get(url)
  return response.data.results
}

const getDetails = async (id) => {
  const url = `${baseUrl}/movie/${id}?api_key=${API_KEY}&append_to_response=credits,videos,providers&include_image_language=null`
  const response = await axios.get(url)
  return response.data
}

const getCredits = async (id) => {
  const url = `${baseUrl}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  const response = await axios.get(url)
  return response.data

}

const movieService = { searchMovies, getDetails, getCredits }
export default movieService