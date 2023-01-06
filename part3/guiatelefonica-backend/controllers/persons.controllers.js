const { request, response } = require("express");
const {
  getContactById,
  getContactByName,
  getAllContacts,
  createPersonId,
  createContact,
  deleteContact,
} = require("./../helpers/database/dbConfigurations");

const getAllPersons = (req = request, res = response) => res.status(200).json(getAllContacts());

const getPerson = (req = request, res = response) => {
  const { id } = req.params;
  const foundContact = getContactById(Number(id));
  return !foundContact
    ? res.status(404).json({ msg: `Id: ${id} not found` })
    : res.status(200).json(foundContact);
};

const createPerson = (req = request, res = response) => {
  const { name, number } = req.body;
  if(name === '' || number === '') return res.status(400).json({ msg:`The name or number is required`});
  if(getContactByName(name)) return res.status(404).json({ msg:`Contact ${name} is already exists`});  
  const id = createPersonId();
  createContact({id, name, number});
  return res.status(200).json({ id, name, number ,msg:`Contact ${name} created succefully` });
};

const updatePerson = (req = request, res = response) => {
  const { id } = req.params;
  const {name, number} = req.body;
  const isUpdateContact = getContactById(Number(id));
  if(!isUpdateContact) {return res.status(404).json({ msg: `Contact with ${id} not exists`});}
  isUpdateContact.number = number;
  return res.status(200).json(isUpdateContact);
}

const deletePerson = (req = request, res = response) => {
  const { id } = req.params;
  const iSfoundContact = getContactById(Number(id));
  if(iSfoundContact){
    deleteContact(id);
    res.status(200).json({ msg: `Id: ${id} deleted succefully` })
  }else{
    res.status(404).json({ msg: `Id: ${id}not exists` })
  }
};

module.exports = {
  getAllPersons,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
};
