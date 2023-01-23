const { model } = require('mongoose');
const Blog = require('../models/blog.model');
const logger = require('../utils/logger');

const getAllBlogs = async () => await Blog.find({})


module.exports = getAllBlogs