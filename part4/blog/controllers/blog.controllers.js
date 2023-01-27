const { request, response } = require('express');
const Blog = require('../models/blog.model');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const config = require('../utils/config');

/**
 * @param {*} req captured request object 
 * @param {*} res Sending response object with method Get
 */
const getBlog = async (req = request, res = response) => {
    const blogs = await Blog.find({}).populate('user', {
        username: 1,
        name: 1,
        id: 1,
    })
    res.status(200).json(blogs);
}

/**
 * @param {*} req captured request object 
 * @param {*} res Sending response object with method Post
 */
const createBlog = async (req = request, res = response) => {

    const { title, author, url, likes, userId } = req.body;
    if (title === '' || author === '' || url === '') return res.json({ mgs: 'title or author or url are required' });

    const user = await User.findById(req.id);
    const blog = new Blog({ title, author, url, likes, user: user.id })
    const savedBlog = await blog.save()

    user.blogs = [...user.blogs, savedBlog]
    await user.save()
    res.status(200).json(savedBlog).end();
}

const deleteBlog = async (req = request, res = response) => {
    const { id } = req.params;
    await Blog.findByIdAndRemove(id);
    res.status(204).end()
}

module.exports = {
    getBlog,
    createBlog,
    deleteBlog
}; 