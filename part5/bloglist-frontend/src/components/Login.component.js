import React, { useRef } from 'react'

/**
 *Our Method 
 * */    
import { getLogin } from '../utils/connection-axios';
import { setLocalStorage } from '../utils/localstorage';

export const LoginComponent = (
    { loginProps: {
        setLogin,
        setUsername,
        setToken
    } }) => {

    const userNameRef = useRef();
    const passwordRef = useRef();

    const onLogin = async (e) => {
        e.preventDefault();
        const usernameToLogin = userNameRef.current.value;
        const passwordToLogin = passwordRef.current.value;
        
        const userToLogin = { 
            username: usernameToLogin, 
            password: passwordToLogin 
        }
        /**
         * To be login, If getLogin return an user, changed the state login.
         * Record in local Storage, the username and token and for last changed
         * the state of the username.
         * If getLogin does not return an user, getting the error Axios and returned 
         * message.
         */
        const user = await getLogin(userToLogin);
        if (user.token) {
            setLocalStorage({ token:user.token, username:user.username });
            setLogin(true);
            setUsername(user.username);
            userNameRef.current.value = '';
            passwordRef.current.value = '';
        } else {
            console.log(user);
            userNameRef.current.value = '';
            passwordRef.current.value = '';
        }
    }
    return (
        <>
            <h1>Log in to application</h1>
            <form onSubmit={onLogin}>
                <input
                    ref={userNameRef}
                    type="text"
                    id="username"
                    required
                />
                <input
                    ref={passwordRef}
                    type='password'
                    id='password'
                    required
                />
                <button type='submit'>Login</button>
            </form>
        </>
    )
};
