const { request, response } = require('express');

/**
 * @param {*} req captured request object 
 * @param {*} res Sending response object with method Get
 */
const getBlog = (req = request, res = response) => {
    res.status(200).json({ msg: 'From GET' });
}

/**
 * @param {*} req captured request object 
 * @param {*} res Sending response object with method Post
 */
const createBlog = (req = request, res = response) => {
    res.status(200).json({ msg: 'From POST' });
}

module.exports = {
    getBlog,
    createBlog
};