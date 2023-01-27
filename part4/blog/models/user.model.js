const { Schema, model } = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');


const userSchema = new Schema({
    username: {
        type: String,
        require: [true, 'Password is required']
    },
    name: {
        type: String,
        minlenght: 3,
        unique: true,
        require: [true, 'Name is required'],
    },
    password: {
        type: String,
        minlenght: 3,
        require: [true, 'Password is requerid'],
    },
    blogs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Blog',
      }],
})

userSchema.plugin(mongooseUniqueValidator)

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        const { _id, __v, password, ...user } = returnedObject
        user.id = _id
        return  user 
    },
})

module.exports = model('User', userSchema);