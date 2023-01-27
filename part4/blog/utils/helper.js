const Blog = require('../models/blog.model');
const User = require('../models/user.model');
const logger = require('../utils/logger');

const AllBlogs = async () => await Blog.find({})
const AllUsers = async () => await User.find({})

const getUserById = (id) => {
    const userId = User.findById(id)
    return userId
}
const getUserByName = (name) => {}





module.exports = {
    AllBlogs,
    AllUsers,
    getUserById,
    getUserByName
}