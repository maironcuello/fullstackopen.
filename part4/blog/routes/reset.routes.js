const express = require('express');
const router = express.Router()

const { resetDb } = require('../controllers/reset-controllers/reset.controller');

router.get('/', resetDb);


module.exports = router;