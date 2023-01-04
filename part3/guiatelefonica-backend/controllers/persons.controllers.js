const { request, response } = require("express");
const { getContactById, getAllContacts } = require("./../helpers/database/dbConfigurations");

const getAllPersons = (req = request, res = response) => {
    
    res.status(200).json(getAllContacts());
};

const getPerson = (req = request, res = response) => {
  const { id } = req.params;
  const foundContact = getContactById(Number(id));
  if (!foundContact) return res.status(404).json({msg:`Id: ${id} not found`});      
  res.status(200).json(foundContact);
};

module.exports = {
  getAllPersons,
  getPerson,
};
