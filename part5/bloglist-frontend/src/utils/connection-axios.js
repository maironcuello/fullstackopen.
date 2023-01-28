import axios from 'axios';

const url = 'http://localhost:3003/api/blogs/';

export const getAllBlogs = async (state) => {
    const response = await axios(url);
    state(response.data)
};

export const getBlog = (id) => { };
export const createBlogs = (object) => { };
export const updateBlogs = (id, object) => { };
export const deleteBlogs = (id) => { };


