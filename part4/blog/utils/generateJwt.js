const jwt = require('jsonwebtoken');
const config = require('../utils/config');

/**
 * @param {*} id 
 * @returns token for username
 * Crated a Promise for can resolve the promise and can use async and await
 * Only add id to the token  
 * The token is configurated only for 24 hours
 */
const generateJwt = (id) => {

    return new Promise((resolve, reject) => {
        const userIdForToken = { id };
        jwt.sign(userIdForToken, config.GENERATED_TOKEN, {
            expiresIn: '24h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('Can`t generate token');
            } else {
                resolve(token);
            }
        });
    });
};

module.exports = generateJwt;