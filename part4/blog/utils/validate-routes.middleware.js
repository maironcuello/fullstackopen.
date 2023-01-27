const { request, response } = require('express');
const config = require('../utils/config')
const jwt = require('jsonwebtoken');

/**
 * 
 * @param {*} req  
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const validateRoutes = ((req = request, res = response, next) => {
    const { token } = req.headers;
    if (!token) return res.status(401).json({ mgs: 'You need a token' });
    try {

        const { id } = jwt.verify(token, config.GENERATED_TOKEN)
        req.id = id;
        next();
    } catch (error) {
        res.status(401).json({ msg: 'Invalid token' })
    }
});

module.exports = {
    validateRoutes
}