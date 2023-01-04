const db = require("../../database/db.json");



const getContactById = (id) => {
    const contact = db.find((ele)=> ele.id === id);    
    return contact
} 


module.exports = {
    getContactById
}
