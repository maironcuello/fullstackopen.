import React from 'react';
import { useSelector } from 'react-redux';
import { ContainerStyle, ContendStyle } from '../../styles-components';
import { Header } from '../Header';
const User = ({ userId }) => {

	// const dispatch = useDispatch();
	const users = useSelector(state => state.users);
	const { name, blogs } = users.find((user) => user.id === userId);
	
	return (
		<>
			<ContainerStyle>
				<Header />
				<ContendStyle>
					<h1>{name}</h1>
					<h2>{'added blogs'}</h2>
					{blogs.map((blog) => <h3 key={blog.id}> <li>{blog.title}</li></h3>)}
				</ContendStyle>
			</ContainerStyle>
		</>
	);
};

export default User;
