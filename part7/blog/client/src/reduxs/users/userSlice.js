import { createSlice } from '@reduxjs/toolkit';

const usersState = [
    {
        id: '',
        username: '',
        name: '',
        blogs: []
    }
]

const initialState = usersState;

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getAllUsers: (state, action) => {
            // console.log(JSON.stringify(state));
            return action.payload
        },
        resetUsers: (state) => {
            return {
                ...state,
                ...usersState
            }
        }

    }
})

export const { resetUsers, getAllUsers } = userSlice.actions;
export default userSlice.reducer