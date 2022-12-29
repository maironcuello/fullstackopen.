import axios from 'axios';


const url = 'http://localhost:3001/persons';

const getAllContact = async(state) => {
    const response = await axios.get(url);
    state(response.data);
};

const createContact = async (newObject) =>{
  await axios.post(url, newObject );
}

const updateContact = async(id,newObject) =>{
   await axios.put(`${url}/${id}`, newObject );
}

const deleteContact =  async(id, name) => {
   if(window.confirm(`Are you sure to delete ${name}?`)){  
      await axios.delete(`${url}/${id}`);
   }      
}


export { getAllContact, createContact, updateContact, deleteContact }