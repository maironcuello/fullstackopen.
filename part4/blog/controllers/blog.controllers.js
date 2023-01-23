const { request, response } = require('express');
const Blog = require('../models/blog.model');
const logger = require('../utils/logger');


/**
 * @param {*} req captured request object 
 * @param {*} res Sending response object with method Get
 */
const getBlog = async (req = request, res = response) => {
    const allBlogs = await Blog.find({})
    res.status(200).json(allBlogs);
}

/**
 * @param {*} req captured request object 
 * @param {*} res Sending response object with method Post
 */
const createBlog = async (req = request, res = response) => {
    const { title, author, url, likes } = req.body;

    if (title === '' || author === '' || url === '') return res.status(404).json({ mgs: 'title or author or url are required' });
    const blog = new Blog({ title, author, url, likes })
    await blog.save()
    res.status(200).json(blog).end();
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