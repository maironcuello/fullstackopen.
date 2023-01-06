/**
 * @param {*} name to check if exist some contact in the array object
 * @param {*} array object to check
 * @returns true or false depending if constact exists
 */
export const isSomePerson = (name, array) => array.some((person) => person.name === name);

/**
 * @param {*} name 
 * @param {*} array 
 * @returns find contact for name
 */
export const findContact = (name, array) => array.filter((contact) => contact.name === name);