import axios from "axios";

const url = "http://localhost:8000/api/persons/";


const getContact = async(id) => {
  const response = await axios.get(`${url}${id}`);
  console.log(response.data);
  return response.data;
}

const getAllContact = async (state) => {
  const response = await axios.get(url);
  state(response.data);
  return response.data;
};

const createContact = async (newObject) => {
  const response = await axios.post(url, newObject);
  return response.data;
};

const updateContact = async (newObject) => {
  const response = await axios.put(`${url}${newObject.id}`, newObject);
  return response.data;
};

const deleteContact = async (id) => {
    const response =  await axios.delete(`${url}${id}`);
    return response.data;
};

export { getContact, getAllContact, createContact, updateContact, deleteContact };
