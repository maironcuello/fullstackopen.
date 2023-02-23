import { configureStore } from '@reduxjs/toolkit';
import { blogsSlice, messageSlice, loginSlice, userSlice } from '../reduxs';

export const store = configureStore({
    reducer: {
        blogs: blogsSlice,
        message: messageSlice,
        login: loginSlice,
        users: userSlice
    },
});
