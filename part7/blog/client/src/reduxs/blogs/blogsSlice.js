import { createSlice } from "@reduxjs/toolkit";


const blogState = [{
    id: '',
    title: '',
    author: '',
    likes: 0,
    url: '',
    comments: []
}]

const initialState = blogState;

export const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        setBlogs: (state, action) => {
            return action.payload
        },
        setUpdateBlog: (state, action) => {
            const newBlogs = state.filter(blog => blog.id !== action.payload.id);
            return [...newBlogs.comments, action.payload]
        },

    }
})

export const { setBlogs, setUpdateBlog, setDeleteBlog } = blogsSlice.actions
export default blogsSlice.reducer
