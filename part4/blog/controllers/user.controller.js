const { requese, response } = require('express')


const getAllUser = async (req = requese, res = response) => {
    res.status(200).json({ msg: 'message from getUser' });
}
const createUser = async (req = requese, res = response) => {
    res.status(200).json({ msg: 'message from createUser' });
}
const deleteUser = async (req = requese, res = response) => {
    res.status(200).json({ msg: 'message from deleteUser' });
}



module.exports = {
    getAllUser,
    createUser,
    deleteUser
}