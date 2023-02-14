import React from 'react';
import { useField } from '../../hooks';


const CreateNew = ({ addNew }) => {

	const content = useField('content');
	const author = useField('author');
	const info = useField('info');
	
	const handleSubmit = (e) => {
		e.preventDefault()
		addNew({ content: content.value, author: author.value, info: info.value, votes: 0 })
	}
	const handlreset = () => {
		content.useField('reset');
		author.useField('reset');
		info.useField('reset');
	}
	return (
		<>
			<h2>create a new anecdote</h2>
			<form onSubmit={handleSubmit}>
				<div>
					content:
					<input {...content} />
				</div>
				<div>
					author:
					<input {...author} />
				</div>
				<div>
					url for more info:
					<input {...info} />
				</div>
				<button type='submit'>create</button>
				<button onClick={handlreset}>create</button>
			</form>
		</>
	)
};

export default CreateNew;
