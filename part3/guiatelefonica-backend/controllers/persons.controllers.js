const Person = require('../models/phonebook.model')
const { request, response } = require('express')
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
 * @param {*} req caprure request id 
 * @param {*} res Send all object contact in response or error if database no error
 */
const getAllPersons = async (req = request, res = response) => {
  await Person.find()
    .then(contacts => res.status(200).json(contacts))
    .catch(error => res.status(503).json(`Database response error: ${error}`));
};

/**
 * 
 * @param {*} req Caprure request id 
 * @param {*} res Send a object contact in response or an error if database no work
 */
const getPerson = async (req = request, res = response) => {
  const { id } = req.params;
  await Person.findById(id)
    .then(contactId => res.status(200).json(contactId))
    .catch(error => res.status(503).json(`Something wrong in database request`));
};

/**
 * @param {*} req Capture contact information in request
 * @param {*} res Send a object contact in response
 * First checkin if name already exists, if not existing create new contact
 */
const createPerson = async (req = request, res = response) => {
  const { name, number } = req.body;
  if (req.body === null) return res.status(400).json(req.body);
  if (name === '' || number === '') return res.status(400).json({ msg: `The name and number is required` });
  const person = new Person({ name, number });
  await person.save()
    .then((contact) => res.status(200).json(contact))
    .catch(error => res.status(503).json(`Something wrong in database request `));
};

const updatePerson = async (req = request, res = response) => {
  const { id } = req.params;
  const { number } = req.body;
  await Person.findByIdAndUpdate(id, { number })
    .then(contact => {
      contact.number = number;
      res.status(200).json(contact)
    })
    .catch(error => res.status(503).json(`Something wrong in database request`));
}

const deletePerson = async (req = request, res = response) => {
  const { id } = req.params;
  await Person.findByIdAndDelete(id)
    .then((contact) => res.status(200).json(contact));
}



module.exports = {
  getAllPersons,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
};
