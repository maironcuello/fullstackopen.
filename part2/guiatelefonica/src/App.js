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

import { getAllContact, createContact, updateContact } from "./helpers/phone";

export const App = () => {
  /**
   * Uses States
   */
  const [persons, setPersons] = useState([]);
  const [personsFilter, setPersonsFilter] = useState("");
  const [newName, setNewName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [findName, setFindName] = useState("");
  const [messagError, setMessagError] = useState(null);

  useEffect(() => {
    getAllContact(setPersons);
  }, []);

  const filterPerson = (event) =>{
    setFindName(event.target.value);
    const filteredContact = persons.filter((person) => person.name.toLowerCase().includes(findName.toLowerCase()));
    setPersonsFilter(filteredContact);
  }
 
  const addContact = (event) => {
    event.preventDefault();
    if (isSomePerson(newName, persons)) {
      const contact = findContact(newName, persons);
      const id = contact[0].id;
      const contactUpdate = { name: newName, phone: phoneNumber };
      if (
        window.confirm(
          `${newName} is already added to phonebook, do you want to replace it?`
        )
      ) {
        updateContact(id, contactUpdate);
        alert("Contact already to update successfully");
      }
    } else {
      const contact = { name: newName, phone: phoneNumber };
      createContact(contact);
      setPersons([...persons, contact]);
      setNewName("");
      setPhoneNumber("");
    }
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handlePhoneChange = (event) => setPhoneNumber(event.target.value);
  // const handleFindNameChange = (event) => setFindName(event.target.value);

  return (
    /**
     * In this section, shown the components
     */
    <div className="container">
      <div className="components">
        <FilterContact
          title="Filter shown with"
          findname={findName}
          filterPerson={filterPerson}
          // persons={persons}
        />
        <hr />
        <Notification />
        <AddnewContact
          title="Phonebook"
          newname={newName}
          onChangeName={handleNameChange}
          phonenumber={phoneNumber}
          onChangePhone={handlePhoneChange}
          setDataBase={addContact}
        />
        <hr />
        <ShowContact title="Numbers" persons={persons} state={setPersons} />
      </div>
    </div>
  );
};
