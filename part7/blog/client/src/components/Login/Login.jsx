import React from 'react'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setMessage, resetMessage } from '../../reduxs/messageSlice';


/** Our Method **/
import { getLogin, setLocalStorage } from '../../utils';

const Login = (
    { loginProps: {
        setUsername,
        setLogin,
    } }) => {
    const dispatch = useDispatch();
    const userNameRef = React.useRef();
    const passwordRef = React.useRef();


    const onLogin = async (e) => {
        e.preventDefault();
        const usernameToLogin = userNameRef.current.value;
        const passwordToLogin = passwordRef.current.value;

        const userToLogin = {
            username: usernameToLogin,
            password: passwordToLogin
        }
        /**
         * If getLogin return an user with token, changed the state login.
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
        dispatch(setMessage({ nota: 'loged succefully!!!', type: 'success' }));
        setTimeout(() => dispatch(resetMessage()), 5000)

    }

    return (
        <>
            <div >
                <h1 className='mt2' >Log in to Application</h1>
                <form onSubmit={onLogin} className='flex column mt2 border'>
                    <input
                        id="username"
                        className='mb1 input'
                        ref={userNameRef}
                        type="text"
                        required
                    />
                    <input
                        id='password'
                        className='mb1 input'
                        ref={passwordRef}
                        type='password'
                        required
                    />
                    <button
                        id='login-button'
                        className='button'
                        type='submit'
                    >Login
                    </button>
                </form>
            </div>
        </>
    )
};

Login.propTypes = {
    setUsername: PropTypes.func,
    setLogin: PropTypes.func,
    setBlogs: PropTypes.func,
    setMessage: PropTypes.func
}
export default Login;
