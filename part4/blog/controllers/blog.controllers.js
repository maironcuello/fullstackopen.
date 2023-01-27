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
 * This method is use by create a new blogs
 */
const createBlog = async (req = request, res = response) => {
    /**
     * Getting data and check thas is not emtyp
     */
    const { title, author, url, likes, userId } = req.body;
    if (title === '' || author === '' || url === '') return res.json({ mgs: 'title or author or url are required' });
    
    /**
     * Finding user with id get the token in database
     * and save
     */
    const user = await User.findById(req.id);
    const blog = new Blog({ title, author, url, likes, user: user.id })
    const savedBlog = await blog.save()

    /**
     * Assign the id blog to the user who created it
     */
    user.blogs = [...user.blogs, savedBlog]
    await user.save()
    res.status(200).json(savedBlog).end();
}

const deleteBlog = async (req = request, res = response) => {
    
    /**
     * Getting id to delete blog and check that id is valid in database
     */
    const { id } = req.params;
    if (!id) return res.status(401).json({ msg: 'should to send a valid Id!!' }); //TODO for to check
    const blog = await Blog.findById(id);
    if (!blog) return res.status(401).json({ msg: "This Id, is not valid in database!!" });

    /**
     * Checking that the blog was created by user with this token
     */
    if (blog.user.toString() === req.id) {
        await Blog.findByIdAndRemove(id);
        res.status(200).json({ msg: 'Blod was removed succesully!!' });
    } else {
        res.status(401).json({ msg: `Blog ${blog.title} does not remove for this user` });
    }
}

module.exports = {
    getBlog,
    createBlog,
    deleteBlog
}; 