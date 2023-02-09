const { request, response } = require("express");
const Blog = require('../../models/blog.model');
const User = require('../../models/user.model');


const resetDb = async (req = request, res = response) => {
    await Blog.deleteMany({})
    await User.deleteMany({})
}

module.exports = {
    resetDb
}