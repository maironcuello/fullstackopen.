const express = require('express');
const router = express.Router();

const {
    getBlog,
    createBlog
} = require('../controllers/blog.controllers');


router.get ('/', getBlog);
router.post('/', createBlog);


module.exports = router;