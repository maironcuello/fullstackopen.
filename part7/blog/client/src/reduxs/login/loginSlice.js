import { createSlice } from '@reduxjs/toolkit';

const loginState = {
    id: '',
    username: '',
    token: '',
}

const initialState = loginState;

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        userLogin: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        userLogout: () => {
            return loginState
        }

    }
})

export const { userLogin, userLogout } = loginSlice.actions;
export default loginSlice.reducer