const { mongoose } =  require('mongoose');
const { Schema, model } = mongoose;

const PersonSchema = Schema({
    name :{
       type: String,
       required: [true, 'Person name is required']
   },
   number :{
       type: String,
       required: [true, 'Number is required']      
   },
});

PersonSchema.methods.toJSON = function() {
    const { __v, _id, ...person } = this.toObject();
    person.id = _id;
    return {...person};
}


module.exports = model('Person', PersonSchema);