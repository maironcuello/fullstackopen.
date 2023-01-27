const { request, response } = require('express');
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const { encrypPassword } = require('../utils/encrypt.password');
/**
 * 
 * @param {*} req get requests from user 
 * @param {*} res send responses to user
 */
const getAllUsers = async (req = request, res = response) => {

    const users = await User.find({}).populate('blogs', { user:0, likes:0 })
    res.status(200).json( users );

}

const createUser = async (req = request, res = response) => {
    const { username, name, password } = req.body
    const lenghtName = name.length
    const lenghtPassword = password.length

    /**
     * Validated thas name and password are not empty
     */
    if (name === '' || password === '') {
        return res.status(300).json({ error: 'User and password are required' })
    }
    if (lenghtName < 3 || lenghtPassword < 3) {
        return res.status(206).json({ msg: 'User and password require more that 3 character' })
    }
    
    const user = new User({ username, name, password })
    user.password = encrypPassword(password)
    await user.save(user)
    res.status(200).json(user);
}



const deleteUser = async (req = request, res = response) => {
    res.status(200).json({ msg: 'message from deleteUser' });
}



module.exports = {
    getAllUsers,
    createUser,
    deleteUser
}