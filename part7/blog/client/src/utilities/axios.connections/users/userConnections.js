import axios from "axios";
import { config } from '../../../utilities/tools'

export const getUsers = async () => {
    const { data } = await axios({ method: 'get', baseURL: config.URL, url: config.USERS });
    const users = data.map(user => ({
        id: user.id,
        username: user.username,
        name: user.name,
        blogs: user.blogs
    })).sort((a, b) => a.blogs.length - b.blogs.length);
    
    return users;
}

export const getuser = async (id, token) => {
    const user = await axios.get(`${config.URL}${config.USERS}${id}`, {
        validateStatus: (status) => status < 500,
        headers: { 'token': token }
    });
    return user;
}

