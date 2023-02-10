import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationSlice'
import anecdotesReducer from './reducers/anecdoteSlice'
import filterReducer from './reducers/filterSlice'

export const store = configureStore({
  reducer: {
    notification: notificationReducer,
    anecdotes: anecdotesReducer,
    filter: filterReducer
  }
})



