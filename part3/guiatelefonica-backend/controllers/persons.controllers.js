const Person = require('../models/phonebook.model');
const { request, response } = require("express");
const {
  getContactById,
  getContactByName,
  getAllContacts,
  createPersonId,
  createContact,
  deleteContact,
} = require("./../helpers/database/method.database");

/**
 * 
 * @param {*} error 
 * @returns  Error message personality
 */
const handleError = (error) => response.status('500').json(`${error} something wrong in request`);

const getAllPersons = async (req = request, res = response) => {

  try {
    const contacts = await Person.find();
    return res.status(200).json(contacts)
  } catch (error) {
    return res.status('400').json(`${error} Bad request`);
  }
  
};

const getPerson = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const contactId = await Person.findById(id);
    return res.status(200).json(contactId);

  } catch (error) {
    return res.status('400').json(`Bad request from server ${error}`);
  }
};

const createPerson = async (req = request, res = response) => {
  const { name, number } = req.body;
  if (name === '' || number === '') return res.status(400).json({ msg: `The name or number is required` });
  if (getContactByName(name)) return res.status(404).json({ msg: `Contact ${name} is already exists` });
  const person = new Person({ name, number });
  return await person.save()
  .then((contact) => res.status(200).json(contact))
};

const updatePerson = async (req = request, res = response) => {
  const { id } = req.params;
  const { name, number } = req.body;
  const isPerson = await Person.findByIdAndUpdate(id, { number });
  if (!isPerson) return res.status(404).json({ msg: `Contact with ${id}and ${name} not exists` });
  isPerson.number = number;
  return res.status(200).json(isPerson);
}

const deletePerson = async (req = request, res = response) => {
  const { id } = req.params;
  await Person.findByIdAndDelete(id)
  .then((data) => res.status(200).json(data));
}
module.exports = {
  getAllPersons,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
};
