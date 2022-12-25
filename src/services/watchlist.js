import axios from 'axios'
const baseUrl = 'http://localhost:3002/api/watchlist'

let token

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const createConfig = (token) => {
  return {
    headers: { Authorization: token }
  }
}

const getWatchlist = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const addToWatchlist = async (object, id) => {
  const config = createConfig(token)

  const response = await axios.post(`${baseUrl}/${id}`, object, config)
  return response.data
}

const removeFromWatchlist = async (id) => {
  const config = createConfig(token)

  await axios.delete(`${baseUrl}/${id}`, config)
}


const watchlistService = {
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
  setToken
}

export default watchlistService
