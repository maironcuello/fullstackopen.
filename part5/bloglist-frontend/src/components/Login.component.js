import React, { useRef } from 'react'

/**
 *Our Method 
 * */
import { getLogin, getAllBlogs } from '../utils/connection-axios';
import { setLocalStorage } from '../utils/localstorage';

export const LoginComponent = (
    { loginProps: {
        setUsername,
        setLogin,
        setBlogs,
        setMessage,
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
         * To be login, If getLogin return an user with token, changed the state login.
         * Record in local Storage, the username and token and for last changed
         * the state of the username.
         * If getLogin does not return an user, getting the error Axios and returned 
         * message.
        */
        const user = await getLogin(userToLogin);
        if (!user.token) return setMessage({ nota: 'Wrong username or password', type: 'error' });

        setLocalStorage({ token: user.token, username: user.username });
        setUsername(user.username);
        setLogin(true);
        await getAllBlogs(setBlogs);
        setMessage({ nota: 'loged succefully!!!', type: 'success' });
    }

    return (
        <>
            <div >
                <h1 className='mt2' >Log in to Application</h1>
                <form onSubmit={onLogin} className='flex column mt2 border'>
                    <input
                        className='mb1 input'
                        ref={userNameRef}
                        type="text"
                        id="username"
                        required
                    />
                    <input
                        className='mb1 input'
                        ref={passwordRef}
                        type='password'
                        id='password'
                        required
                    />
                    <button className='button' type='submit'>Login</button>
                </form>
            </div>
        </>
    )
};
