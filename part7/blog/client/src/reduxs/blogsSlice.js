import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

export const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        setBlogs: (state, action) => {
            state.value = action.payload
        },
        setUpdateBlog: (state, action) => {
            const { id, title, author, likes, url } = action.payload
            const blogs = state.map((blog) => {
                if (blog.id === id) {
                    blog.title = title;
                    blog.author = author;
                    blog.likes = likes;
                    blog.url = url;
                }
            }).sort((a, b) => a.likes - b.likes)
            return [...blogs]
        },

    }
})

export const { setBlogs, setUpdateBlog, setDeleteBlog } = blogsSlice.actions
export default blogsSlice.reducer
