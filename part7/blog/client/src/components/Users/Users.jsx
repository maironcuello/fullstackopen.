import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from '../../utilities/axios.connections/'
import { getAllUsers } from '../../reduxs/users/userSlice'
import Header from '../Header/Header';
import { ContainerStyle, ContendStyle } from '../../styles-components';

const Users = () => {

	const dispatch = useDispatch();

	const allUsers = async () => {
		const users = await getUsers();
		dispatch((getAllUsers(users)))
	}

	React.useEffect(() => {
		allUsers();
	}, []);

	const users = useSelector(state => state.users)

	return (
		<ContainerStyle>
			<Header />
			<ContendStyle>
				<div>
					<h1>Users</h1>
					{users.map((user) =>
						<div key={user.id}>
							<div className='flex'>
								<h2><Link to={user.id}>{user.name}</Link></h2>
								<h2>{user.blogs.length}</h2>
							</div>
						</div>)
					}
				</div>
			</ContendStyle>
		</ContainerStyle>
	);
};

export default Users;
