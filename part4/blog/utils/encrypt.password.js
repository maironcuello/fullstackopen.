const bcryptjs = require('bcryptjs');


const encrypPassword = (password) => {
    const salt = bcryptjs.genSaltSync();
    const hash = bcryptjs.hashSync(password, salt);
    return hash
}

module.exports = { 
    encrypPassword
}