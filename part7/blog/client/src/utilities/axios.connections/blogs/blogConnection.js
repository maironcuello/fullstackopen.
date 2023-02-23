import axios from 'axios';
import { config } from '../../../utilities/tools';
import { getLocalStorage } from '../../tools';

export const getAllBlogs = async () => {
    const { data } = await axios({ method: 'get', baseURL: config.URL, url: config.BLOGS });
    console.log('from axios',data.commnets);
    const blogsList = data.map(blog => (
        {
            id: blog.id,
            title: blog.title,
            author: blog.author,
            likes: blog.likes,
            url: blog.url,
            commnets:blog.commnets
        })).sort((a, b) => b.likes - a.likes);
    return blogsList
};

export const getLogin = async (userToLogin) => {
    const response = await axios.post(
        `${config.URL}${config.LOGIN}`,
        userToLogin,
        {
            validateStatus: (status) => status < 500
        }
    );
    return response.data
};

export const createBlog = async (blogToCreate, token) => {
    const response = await axios.post(`${config.URL}${config.BLOGS}`, blogToCreate, {
        validateStatus: (status) => status < 500,
        headers: { 'token': token }
    }
    );
    return response.data;
};

export const updateBlog = async (id, object) => {
    const { token } = getLocalStorage();
    const response = await axios.put(`${config.URL}${config.BLOGS}${id}`, object, {
        validateStatus: (status) => status < 500,
        headers: { 'token': token }
    });
    return response.data;
};


export const deleteBlog = async (id) => {
    const { token } = getLocalStorage();
    const response = await axios.delete(`${config.URL}${config.BLOGS}${id}`, {
        validateStatus: (status) => status < 500,
        headers: { 'token': token }
    });
    return response.data;
};
