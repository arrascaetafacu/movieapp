import axios from 'axios'
const baseUrl = 'http://localhost:3002/api/notebook'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}` 
}

const create = async (object) => {
  const config = {
    headers: { Authorization: token}
  }

  const response = await axios.post(baseUrl, object, config)
  return response.data
}

const getOne = async (id) => {
  const config = {
    headers: { Authorization: token}
  }

  const response = await axios.get(`${baseUrl}/${id}`, config)
  return response.data
}

const getAll = async () => {
  const config = {
    headers: { Authorization: token}
  }

  const response = await axios.get(baseUrl, config)
  return response.data
}

const remove = async (id) => {
  const config = {
    headers: { Authorization: token}
  }

  await axios.delete(`${baseUrl}/${id}`, config)
}


const notebookService = {
  create,
  setToken,
  getAll,
  getOne,
  remove
}
export default notebookService