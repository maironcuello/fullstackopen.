import React, { useState, useEffect } from "react";
import "./App.css";
/**
 * Our method to search
 */
import { findContact, handleError } from "./helpers/config";

/**
 * Import our Components
 */
import { FilterContact } from "./components/FilterContact";
import { AddnewContact } from "./components/AddnewContact";
import { ShowContact } from "./components/ShowContact";
import { Notification } from "./components/Notification";

/**
 * Import our methods for interacting with the rest server
 */
import { 
  getAllContact, 
  createContact, 
  updateContact, 
  deleteContact  
} from "./helpers/phone";

export const App = () => {
  const [persons, setPersons] = useState([]);
  const [personsFilter, setPersonsFilter] = useState([]);
  const [newName, setNewName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [findName, setFindName] = useState("");
  const [message, setMessage] = useState(null);

  /**
   * Get all contacts from the Api server 
   */
  useEffect(() => {
    getAllContact(setPersons)
      .then(data => {
        setMessage({ nota: `Connected to server`, type: 'success' });
      }).catch(err => {
        setMessage({ nota: `${handleError(err)} - Connecting to server`, type: 'error' });
      })
  }, []);

  /**
   * Updating to Message Component every time changing state
   */
  useEffect(() => {
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  }, [message]);

  /**
   * Reset all state
   */
  const clearSetState = () => {
    setNewName("");
    setPhoneNumber("");
    setFindName("");
  }

  /**
   * Delete contact to backend server and update the states Person and personFilter
  */
  const deletePerson = (id, name) => {
    if (window.confirm(`Are you sure to delete ${name}?`)) {
      deleteContact(id)
        .then((data) => {
          setMessage({ nota: `${data.name} Deleted succefully`, type: 'success' });
          const newPersons = persons.filter((person) => person.id !== id);
          setPersons(newPersons);
          const newPersonsFilter = personsFilter.filter((person) => person.id !== id);
          setPersonsFilter(newPersonsFilter);
        }).catch((err) => {
          setMessage({ nota: `${handleError(err)} - could not be deleted`, type: 'error' });
        });
    }
    clearSetState();
  }

  /**
   * Filtering contact or contacts to search in the backend server
   */
  const filterPerson = (event) => {
    event.preventDefault();
    const eventPerson = event.target.value;
    setFindName(eventPerson);
    const filteredContact = persons.filter((person) => person.name.toLowerCase().includes(eventPerson.toLowerCase()));
    return eventPerson !== "" ? setPersonsFilter(filteredContact) : setPersonsFilter([]);
  };

  /**
   * @param {*} event
   * Heaer the event OncChange in the inputs and capture information
   */
  const addNewContactOrUpdate = (event) => {
    event.preventDefault();
    const contactTofind = findContact(newName, persons);
    if (contactTofind) {
      if (window.confirm(`${newName} is already added to phonebook, do you want to replace it?`)) {
        updateContact({ id: contactTofind.id, name: newName, number: phoneNumber })
          .then((data) => {
            console.log('from updateContact',data);
            setMessage({ nota: `Contact ${data.name} Updated successfully`, type: 'success' });
            const newPersonsFilter = personsFilter.filter((person) => person.name !== newName);
            setPersonsFilter([...newPersonsFilter, data]);
            const newPersons = persons.filter((person) => person.name !== newName);
            setPersons([...newPersons, data]);
          })
          .catch((err) => {
            setMessage({ nota: `${handleError(err)} - Contact ${newName} could not be Updated`, type: 'error' });
          });
        clearSetState();
      }
    } else {
      createContact({ name: newName, number: phoneNumber })
        .then((data) => {
          setMessage({ nota: `New contact ${data.name} created succefully `, type: 'success' });
          const newPersons = persons.filter((person) => person.name !== newName);
          setPersons([...newPersons, data]);
          const newPersonsFilter = personsFilter.filter((person) => person.name !== newName);
          setPersonsFilter([...newPersonsFilter, data]);
        })
        .catch((err) => {
          setMessage({ nota: `${handleError(err)} Contact ${newName} could not be created`, type: 'error' });
        });
      clearSetState()
    }
  };

  /**
   * Pass through parameters to AddNewContact component
   */
  const parametersAddnewContact = {
    newName,
    phoneNumber,
    addNewContactOrUpdate,
    setNewName,
    setPhoneNumber,
  };
  /**
   *Pass through parameters to ShowContact component
   */
  const parametersShowContact = {
    personsFilter,
    deletePerson,
  };
  return (

    <div className="container">
      <div className="components">
        <Notification message={message} />
        <FilterContact findname={findName} filterPerson={filterPerson} />
        <AddnewContact parametersAddnewContact={parametersAddnewContact} /><hr />
        <ShowContact parametersShowContact={parametersShowContact} />
      </div>
    </div>
  );
};