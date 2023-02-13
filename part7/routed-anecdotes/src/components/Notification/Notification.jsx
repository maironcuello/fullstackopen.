import React from 'react';

export const Notification = ({ notification }) => {
	const { message, type } = notification;

	return message ?
		(
			<div className={type === 'success' ? 'message success' : 'message error'}>
				{message}
			</div>
		)
		:
		''
};

export default Notification;
