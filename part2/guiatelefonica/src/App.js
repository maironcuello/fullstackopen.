import React, { useState, useEffect } from "react";
import "./App.css";
import { isSomePerson, findContact } from "./helpers/config";

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
import { getAllContact, createContact, updateContact, deleteContact, } from "./helpers/phone";

export const App = () => {

  const [persons, setPersons] = useState([]);
  const [personsFilter, setPersonsFilter] = useState([]);
  const [newName, setNewName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [findName, setFindName] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    getAllContact(setPersons)
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  }, [message]);

  const clearSetState = () => {
    setNewName("");
    setPhoneNumber("");
    setFindName("");
  }

  const filterPerson = (event) => {
    event.preventDefault();
    const eventPerson = event.target.value;
    setFindName(eventPerson);
    const filteredContact = persons.filter((person) => person.name.toLowerCase().includes(eventPerson.toLowerCase()));
    return eventPerson !== "" ? setPersonsFilter(filteredContact) : setPersonsFilter([]);
  };

  const addNewContactOrUpdate = (event) => {
    event.preventDefault();
    const contactTofind = findContact(newName, persons);
    if (contactTofind) {
      if (window.confirm(`${newName} is already added to phonebook, do you want to replace it?`)) {
        updateContact({id: contactTofind.id, name: newName, number: phoneNumber })
          .then((data) => {
            setMessage(`Contact ${data.name} Updated successfully`);
            const personsFiltered = personsFilter.filter((person) => person.name !== newName);
            setPersonsFilter([...personsFiltered, data]);
            const newPersons = persons.filter((person) => person.name !== newName);
            setPersons([...newPersons, data]);
          })
          .catch((err) => {
            setMessage(`${err} Contact ${newName} could not be Updated`);
          });
        clearSetState();
      }
    } else {
      createContact({ name: newName, number: phoneNumber })
        .then((data) => {
          setMessage(`New contact ${data.name} added successfully`);
          setPersons([...persons, data]);
          setPersonsFilter([...personsFilter,data]);
        })
        .catch((err) => {
          setMessage(`${err} Contact ${newName} could not be added`);
        });
      clearSetState()
    }
  };

  const parametersAddnewContact = {
    newName,
    phoneNumber,
    addNewContactOrUpdate,
    setNewName,
    setPhoneNumber,
  };
  const parametersShowContact = {
    personsFilter,
    setPersonsFilter,
    deleteContact,
    getAllContact,
    setPersons,
  };
  return (

    <div className="container">
      <div className="components">
        <Notification messege={message} />
        <FilterContact findname={findName} filterPerson={filterPerson} />
        <AddnewContact parametersAddnewContact={parametersAddnewContact} /><hr />
        <ShowContact parametersShowContact={parametersShowContact} />
      </div>
    </div>
  );
};