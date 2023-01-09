/**
 * @param {*} name 
 * @param {*} array 
 * @returns find contact for name
 */
export const findContact = (name, array) => array.find((contact) => contact.name === name);