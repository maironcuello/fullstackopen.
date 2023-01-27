const express = require('express');
const route = express.Router();

const { login } = require('../controllers/login.controllers');

route.post('/', login);

module.exports = route;