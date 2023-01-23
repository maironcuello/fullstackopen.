const express = require('express');
const router = express.Router();

const {
    getBlog,
    createBlog,
    deleteBlog
} = require('../controllers/blog.controllers');


router.get ('/', getBlog);
router.post('/', createBlog);
router.delete('/:id', deleteBlog);


module.exports = router;