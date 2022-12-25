import { createSlice } from '@reduxjs/toolkit'
import notebookService from '../services/notebook'

const notebookSlice = createSlice({
  name: 'notebook',
  initialState: [],
  reducers: {
    setTo: (state, action) => {
      return action.payload
    },
    addEntry: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const  { setTo, addEntry } = notebookSlice.actions

export const getAllEntries = () => async (dispatch, getState) => {
  notebookService.setToken(getState().user.token)
  const entries = await notebookService.getAll()
  dispatch(setTo(entries))

}

export const createEntry = (newEntry) => async (dispatch, getState) => {
  notebookService.setToken(getState().user.token)
  const returnedEntry = await notebookService.create(newEntry)
  dispatch(addEntry(returnedEntry))
}

export const selectEntries = state => state.notebook
export default notebookSlice.reducer