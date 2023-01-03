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
  const [personsFilter, setPersonsFilter] = useState([]);
  const [newName, setNewName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [findName, setFindName] = useState("");
  const [messagError, setMessagError] = useState(null);

  useEffect(() => {
    getAllContact(setPersons).then(data => {
    });
  }, []);

  const filterPerson = (event) => {
    event.preventDefault();
    let eventPerson = event.target.value;
    console.log(eventPerson);
    setFindName(eventPerson);
    // console.log(findName);
    const filteredContact = persons.filter((person) => person.name.toLowerCase().includes(eventPerson.toLowerCase()));
    return (eventPerson !== "") ? setPersonsFilter(filteredContact) : setPersonsFilter([]);
  };

  const addNewContactOrUpdate = (event) => {
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
        updateContact(id, contactUpdate).then(data => {
          setPhoneNumber("");
          getAllContact(setPersons)
        })
      }
    } else {
      const contact = { name: newName, phone: phoneNumber };
      createContact(contact);
      setPersons([...persons, contact]);
      setNewName("");
      setPhoneNumber("");
    }
  };

  const dataContact = {
    newName,
    phoneNumber,
    addNewContactOrUpdate,
    setNewName,
    setPhoneNumber,
  };

  return (
    /**
     * In this section, shown the components
     */
    <div className="container">
      <div className="components">
        <Notification />
        <FilterContact findname={findName} filterPerson={filterPerson} />
        <AddnewContact dataContact={dataContact}/>
        <hr />
        <ShowContact persons={persons} personsFilter={personsFilter} />
      </div>
    </div>
  );
};