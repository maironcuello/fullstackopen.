import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdotes';
import anecdotes from '../services/anecdotes';


const reducerSlice = createSlice({
  name: 'anecdotes',
  initialState: {value:[]}
  ,
  reducers: {
    newVote: (state, action) => {
      state.value = state.value.map((item) =>
        item.id !== action.payload.id ? item : action.payload)
    },
    newAnecdote: (state, action) => {
      state.value = [...state.value, action.payload]
    },
    initAnecdotes: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { newVote, newAnecdote, initAnecdotes } = reducerSlice.actions
export default reducerSlice.reducer


export const addVoteOf = (id) => {
  return async (dispatch) => {
    const updateAnecdote = await anecdoteService.addVoteof(id)
    dispatch(newVote(updateAnecdote))
  }
}

export const addAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newAnectoteCreated = await anecdoteService.createNew(anecdote)
    dispatch(newAnecdote(newAnectoteCreated))
  }
}

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(initAnecdotes(anecdotes))
  }
}

