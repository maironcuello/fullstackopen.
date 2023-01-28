import axios from 'axios';
import { config } from './env.configurations';

export const getAllBlogs = async (state) => {
    const response = await axios(`${config.URL}${config.BLOGS}`);
    state(response.data)
};

export const getLogin = async (userToLOgin) => {
    const response = await axios.post(`${config.URL}${config.LOGIN}`, userToLOgin, { validateStatus: (status) => status < 500 });
    return response.data
};

export const getBlog = (id) => { };
export const createBlogs = (object) => { };
export const updateBlogs = (id, object) => { };
export const deleteBlogs = (id) => { };