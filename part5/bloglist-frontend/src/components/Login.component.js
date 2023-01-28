import React, { useRef } from 'react'
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
        const usernameToLogin = userNameRef.current.value
        const passwordToLogin = passwordRef.current.value
        
        const userToLogin = { 
            username: usernameToLogin, 
            password: passwordToLogin 
        }

        const user = await getLogin(userToLogin);
        if (user.token) {
            setLocalStorage({ token:user.token, username:user.username })
            setLogin(true);
            setUsername(user.username);
            setToken(user.token)
        } else {
            console.log(user)
        }
    }
    return (
        <div>
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
        </div>
    )
};
