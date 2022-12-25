import { createSlice } from '@reduxjs/toolkit'
import loginService from '../services/login'

const initialState = JSON.parse(localStorage.getItem('loggedUser'))

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload
    },
    logout: (state) => {
      return null
    }
  }
})

export const { setUser, logout } = userSlice.actions


export const login = ({ username, password }) => {
  return async (dispatch) => {
    try {
      const loggedUser = await loginService.login({ username, password })
      localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
      dispatch(setUser(loggedUser))
    } catch (err) {
      console.log(err)
    }
  }
}

export const selectUser = (state) => state.user
export default userSlice.reducer