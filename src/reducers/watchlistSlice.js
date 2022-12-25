import { createSlice } from '@reduxjs/toolkit'
import watchlistService from '../services/watchlist'

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: [],
  reducers: {
    setTo: (state, action) => {
      return action.payload
    },
    add: (state, action) => {
      state.push(action.payload)
    },
    remove: (state, action) => {
      return state.filter(item => item._id !== action.payload)
    }
  }
})

export const { setTo, add, remove } = watchlistSlice.actions

export const getWatchlist = () => async (dispatch, getState) => {
  const watchlist = await watchlistService.getWatchlist(getState().user.watchlist.toString())
  dispatch(setTo(watchlist.items))
}


export const createItem = (itemObject) => async (dispatch, getState) => {
  watchlistService.setToken(getState().user.token)

  const item = await watchlistService.addToWatchlist(itemObject, getState().user.watchlist.toString())
  dispatch(add(item))
}

export const removeItem = (id) => async (dispatch, getState) => {
  watchlistService.setToken(getState().user.token)
  await watchlistService.removeFromWatchlist(id)
  dispatch(remove(id))
}

export const selectWatchlist = state => state.watchlist

export default watchlistSlice.reducer

