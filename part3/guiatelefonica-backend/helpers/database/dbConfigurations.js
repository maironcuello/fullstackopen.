const db = require("../../database/db.json");



const getContactById = (id) => db.find((ele)=> ele.id === id);    
const getAllContacts = () => db;    


module.exports = {
    getContactById,
    getAllContacts
}
