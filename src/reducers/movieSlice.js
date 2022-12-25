import { createSlice } from '@reduxjs/toolkit'
import movieService from '../services/movies'

const movieSlice = createSlice({
  name: 'movie',
  initialState: null,
  reducers: {
    setMovie: (state, action) => {
      return action.payload
    }
  }
})

export const { setMovie } = movieSlice.actions

export const getDetails = (id) => {
  return async (dispatch) => {
    try {
      const movie = await movieService.getDetails(id)
      dispatch(setMovie(movie))
    } catch(err) {
      console.log(err)
    }
  }
}

export const selectMovie = state => state.movie
export default movieSlice.reducer