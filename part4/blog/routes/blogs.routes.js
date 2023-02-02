const express = require('express');
const router = express.Router();
const { validateRoutes } = require('../utils/validate-routes.middleware');


const {
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog
} = require('../controllers/blog-controllers/blog.controllers');


router.get('/', getBlog);

router.post('/',
    validateRoutes,
    createBlog
);
router.put('/:id',
    validateRoutes,
    updateBlog);

router.delete('/:id',
    validateRoutes,
    deleteBlog
);



module.exports = router;