const { request, response } = require("express");
const {getAllContacts} = require('./../helpers/database/dbConfigurations')

const getInfo = (req = request, res = response) => {
  const contacts = getAllContacts();
    
  res.status(200).send(
    `
    <h3>Phonebook has info for ${contacts.length} people</h3>
    <h3>${Date()}</h3>
    `
  );
  res.end();
};

module.exports = {
  getInfo,
};