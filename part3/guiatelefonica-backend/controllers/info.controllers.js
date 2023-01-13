const { request, response } = require("express");
const { getAllContacts } = require('./../helpers/database/method.database')
const Person = require('../models/phonebook.model');


const getInfo = async (req = request, res = response) => {
  const { id } = req.params;
  const contactId = await Person.findById(id);
  res.status(200).json(contactId);
};

module.exports = {
  getInfo,
};
