import { createSlice } from '@reduxjs/toolkit'

const reducerSlice = createSlice({
  name: 'notification',
  initialState: {
    notification: ''
  },
  reducers: {
    newNotification: (state, action) => {
      state.notification = action.payload
    },
    clearNotification: (state, action) => {
      state.notification = ''
    }
  }
})

export const { newNotification, clearNotification } = reducerSlice.actions
export default reducerSlice.reducer

export const setNotification = (message) => {
  return async (dispatch) => {
    dispatch(newNotification(message))
    setTimeout(() => {
      dispatch(clearNotification())
    }, 3000)
  }
}

