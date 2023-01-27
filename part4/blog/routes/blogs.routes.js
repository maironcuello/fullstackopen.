const express = require('express');
const router = express.Router();
const { validateRoutes } = require('../utils/validate-routes.middleware');


const {
    getBlog,
    createBlog,
    deleteBlog
} = require('../controllers/blog.controllers');


router.get('/', getBlog);

router.post('/',
    validateRoutes,
    createBlog
);
router.delete('/:id', 
    validateRoutes, 
    deleteBlog
);



module.exports = router;