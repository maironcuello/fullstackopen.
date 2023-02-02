import axios from 'axios';

/** Our Method **/
import { config } from './env.configurations';
import { getLocalStorage } from './localstorage';
/**
 * @param {*} id identify of the blog
 */
export const getBlog = (id) => { };

/**
 * @param {*} state -> setBlogs
 * Getting all data from Backend server
 * and changed the state blogs with the data 
 */
export const getAllBlogs = async (state) => {
    const { data } = await axios({ method: 'get', baseURL: config.URL, url: config.BLOGS });
    const blogsList = data.map(blog => (
        {
            id: blog.id,
            title: blog.title,
            author: blog.author,
            likes: blog.likes,
            url: blog.url
        })).sort((a, b) => b.likes - a.likes);
    // blogsList
    state(blogsList);
};

/**
 * @param {*} userToLogin -> User going to login
 * @returns 
 * User loged or message error
 */
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

/**
 * @param {*} blogToCreate New blog
 * Save a new blog in database
 */
export const createBlog = async (blogToCreate, token) => {

    /** 
     * Send petition Axios with the token.
     * Get Data.  
     */
    const response = await axios.post(
        `${config.URL}${config.BLOGS}`,
        blogToCreate,
        {
            validateStatus: (status) => status < 500,
            headers: { 'token': token }
        }
    );

    return response.data;
};

export const updateBlog = async (id, object) => {
    const { token } = getLocalStorage();
    // console.log(`${config.URL}${config.BLOGS}${id}`);
    // console.log(object);
    const response = await axios.put(`${config.URL}${config.BLOGS}${id}`, object, {
        validateStatus: (status) => status < 500,
        headers: { 'token': token }
    });
    // console.log(response.data);
    return response.data;

};


export const deleteBlogs = (id) => { };