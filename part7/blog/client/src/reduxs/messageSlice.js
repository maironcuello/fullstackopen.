import { createSlice } from "@reduxjs/toolkit";

const message = {
    nota: '',
    type: ''
}

const initialState = message;

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setMessage: (state, action) => {
            return state = action.payload
            // state.nota = action.payload.nota
            // state.type = action.payload.type 
            // state = {...state, ...action.payload} 
        },
        resetMessage: (state) => {
            // return  [...state, message]
            state.nota = message.nota
            state.type = message.type 
        }

    }
})

export const { setMessage, resetMessage } = messageSlice.actions
export default messageSlice.reducer

