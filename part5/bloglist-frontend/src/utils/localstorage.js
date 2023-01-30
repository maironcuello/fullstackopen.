
/**
 * @param {*} object 
 * Writing username and token in local Storage
 */
export const setLocalStorage = (object) => {
    localStorage.setItem('username', JSON.stringify({ username:object.username, token:object.token }));
};


/**
 * @param {*} username  
 * @returns 
 * getting Token and username from local Storage
 */
export const getLocalStorage = () => {
    const username = JSON.parse(localStorage.getItem('username'))
    return username
};