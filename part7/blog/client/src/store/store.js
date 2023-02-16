import { configureStore } from '@reduxjs/toolkit';
import { blogsSlice, messageSlice } from '../reduxs';

export const store = configureStore({
    reducer: {
        blogs: blogsSlice,
        message: messageSlice
    },
});

