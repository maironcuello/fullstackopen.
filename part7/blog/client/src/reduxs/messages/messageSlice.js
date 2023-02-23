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
            return action.payload
        },
        resetMessage: () => {
            return  message;
        }

    }
})

export const { setMessage, resetMessage } = messageSlice.actions
export default messageSlice.reducer

