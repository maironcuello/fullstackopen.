import React from 'react'
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setMessage, resetMessage } from '../../reduxs/messages/messageSlice';
import { userLogin } from '../../reduxs/login/loginSlice';

/** Our Method **/
import { getLogin } from '../../utilities/axios.connections';
import { setLocalStorage } from '../../utilities/tools';
import { useNavigate } from 'react-router-dom';
import { ContainerStyle, LoginSlyle } from '../../styles-components';

const Login = () => {
    const navigate = useNavigate();
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
         * If getLogin return an user with token then changed the state login.
         * Record in local Storage, the username and token.
         * If getLogin does not return an user, getting the error Axios and returned 
         * message.
        */
        const user = await getLogin(userToLogin);
        if (!user.token) return setMessage({ nota: 'Wrong username or password', type: 'error' });
        dispatch(userLogin(user))
        setLocalStorage({ token: user.token, username: user.username });
        dispatch(setMessage({ nota: 'loged succefully!!!', type: 'success' }));
        setTimeout(() => dispatch(resetMessage()), 5000)
        navigate('/users')
    }

    return (
        <>
            <ContainerStyle>
                <LoginSlyle onSubmit={onLogin} >
                    <h1>Log in to Application</h1>
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
                </LoginSlyle>
            </ContainerStyle>
        </>
    )
};

export default Login;
