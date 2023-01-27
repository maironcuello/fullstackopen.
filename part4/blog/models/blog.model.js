const { rest } = require("lodash");
const { Schema, model } = require("mongoose");

// mongoose.set('useFindAndModify', false)

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
    },
    author: {
        type: String,
        required: true,
        minlength: 3,
    },
    url: {
        type: String,
        required: true,
        minlength: 5,
    },
    likes: {
        type: Number,
        required: false,
        default: 0,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});


blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        const { _id, __v, ...blog } = returnedObject
        blog.id = _id.toString()
        return blog 
    },
})

module.exports = model('Blog', blogSchema);