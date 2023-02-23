import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setBlogs } from '../../reduxs/blogs/blogsSlice';
import { userLogout } from '../../reduxs/login/loginSlice';
import { setLocalStorage } from '../../utilities';
import { ContainerStyle, HeaderStyle } from '../../styles-components'
import { Message } from '../../components'

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { username } = useSelector(state => state.login);

	const logout = () => {
		setLocalStorage({ username: '', token: null })
		dispatch(setBlogs([]));
		dispatch(userLogout());
		navigate('/');
	}

	return (
			<ContainerStyle>
				<HeaderStyle>
					<div className='flex'>
						<h2><Link to={'/blogs'}>Blogs</Link></h2>
						<h2><Link to={'/users'}>Users</Link></h2>
					</div>
					<h2 className='title'>{`${username} - logged IN`}</h2>
					<button className='logout' onClick={() => logout()}>Logout</button>
				</HeaderStyle>
				<div className='title flex'>
					<p>Blogs App</p><Message/>
				</div>
			</ContainerStyle>
	);
};

export default Header;