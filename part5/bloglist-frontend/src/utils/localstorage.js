export const setLocalStorage = (object) => {
    localStorage.setItem('username', JSON.stringify({ username:object.username, token:object.token }));
    // localStorage.setItem('token', JSON.stringify(object.token));
};
export const getLocalStorage = (username) => {
    const dataUser = JSON.parse(localStorage.getItem(username))
    return dataUser
};