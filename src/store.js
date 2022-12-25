import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userSlice'
import movieReducer from './reducers/movieSlice'
import watchlistReducer from './reducers/watchlistSlice'
import notebookReducer from './reducers/notebookSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    watchlist: watchlistReducer,
    notebook: notebookReducer
  }
})
