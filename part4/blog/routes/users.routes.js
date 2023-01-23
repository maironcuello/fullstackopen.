const express = require('express');
const router = express.Router();
const { getAllUser, createUser, deleteUser } = require('../controllers/user.controller');

router.get('/', getAllUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);

module.exports = router;