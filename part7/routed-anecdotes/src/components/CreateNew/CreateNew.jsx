import React from 'react';

const CreateNew = ({addNew}) => {

	const [content, setContent] = React.useState('')
	const [author, setAuthor] = React.useState('')
	const [info, setInfo] = React.useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		addNew({
			content,
			author,
			info,
			votes: 0
		})
	}

	return (
		<>
			<h2>create a new anecdote</h2>
			<form onSubmit={handleSubmit}>
				<div>
					content
					<input name='content' value={content} onChange={(e) => setContent(e.target.value)} />
				</div>
				<div>
					author
					<input name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
				</div>
				<div>
					url for more info
					<input name='info' value={info} onChange={(e) => setInfo(e.target.value)} />
				</div>
				<button type='submit'>create</button>
			</form>
		</>
	)
};

export default CreateNew;
