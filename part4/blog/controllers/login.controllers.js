const { request, response } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user.model');
const generateJwt = require('../utils/generateJwt');


const login = (async (req = request, res = response) => {

    const { username, password } = req.body;

    /**
     * Valited if username is in database
     */
    const isUser = await User.findOne({ username: username });
    if (!isUser) return res.status(401).json({ msg: 'Incorrect credentials!!!' });

    /**
     * Valited if password is in database
     */
    const isPassword = await bcryptjs.compare(password, isUser.password);
    if (!isPassword) return res.status(401).json({ msg: 'Incorrect credentials!!!' });

    /**
     * Creating token
     */
    const token = await generateJwt(isUser._id);

    res.status(200).json({
        id: isUser._id,
        username: isUser.username,
        token
    });
});

module.exports = {
    login
};
