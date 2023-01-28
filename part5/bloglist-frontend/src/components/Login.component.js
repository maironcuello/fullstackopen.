import React, { useRef } from 'react'

export const LoginComponent = (
    { loginProps: {
        login,
        setLogin,
        setUsername,
        setPassword
    } }) => {

    const userNameRef = useRef();
    const passwordRef = useRef();

    const onLogin = (e) => {
        e.preventDefault();
        const usernameToLogin = userNameRef.current.value
        const passwordToLogin = passwordRef.current.value
        if (!(usernameToLogin && passwordToLogin)) return console.log('Bad credentials')
        console.table({username: usernameToLogin, password: passwordToLogin})
        setLogin(true);
        setUsername(usernameToLogin);
        setPassword(passwordToLogin);
        userNameRef.current.value = '';
        passwordRef.current.value = '';
    }

    return (
        <div>
            <h1>Log in to application</h1>
            <form onSubmit={onLogin}>
                <input
                    ref={userNameRef}
                    type="text"
                    id="username"
                />
                <input
                    ref={passwordRef}
                    type='password'
                    id='password'
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
};
