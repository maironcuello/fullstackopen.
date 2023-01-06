const db = require("../../database/db.json");

let dbPhonebook = [] = db;

/**
 * @param {*} id
 * @returns Find contact with given id
 */
const getContactById = (id) => dbPhonebook.find((ele) => ele.id === id);

/**
 * @returns All contacts from database
 */
const getAllContacts = () => dbPhonebook;

/**
 * @returns Create a new id for the new contact
 */
const createPersonId = () => (maxId = dbPhonebook.length > 0 ? Math.max(...dbPhonebook.map((n) => n.id + 1)) : 1);

/**
 * @param {*} name
 * @returns Check if contact with given name exists in database
 */
const getContactByName = (name) => (foundContactName = dbPhonebook.find((ele) => ele.name === name));

/**
 * @param {*} person
 * @returns Create a new contact in database
 */
const createContact = (person) => dbPhonebook.push(person);

/**
 * 
 * @param {*} id 
 * Delete contact with given id
 */
const deleteContact = (id) => {
  const index = dbPhonebook.findIndex((ele) => ele.id === id);
  dbPhonebook.splice(index, 1);
};

module.exports = {
  getContactById,
  getContactByName,
  getAllContacts,
  createPersonId,
  createContact,
  deleteContact,
};
