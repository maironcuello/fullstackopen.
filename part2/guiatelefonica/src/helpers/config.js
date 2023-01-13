/**
 * @param {*} name 
 * @param {*} array 
 * @returns find contact for name
 */
export const findContact = (name, array) => array.find((contact) => contact.name === name);

/**
 * 
 * @param {*} error 
 * @returns type of error
 */
export const handleError = (error) => {
    if (error.code === 'ERR_NETWORK') return `${error.message}`;
}