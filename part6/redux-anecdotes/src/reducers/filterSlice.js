import { createSlice } from "@reduxjs/toolkit"

const reducerSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: ''
  },
  reducers: {
    newFilter: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { newFilter } = reducerSlice.actions;
export default reducerSlice.reducer;
