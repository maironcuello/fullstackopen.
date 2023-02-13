import React from 'react';
import { useParams } from "react-router-dom";


const AnecdoteList = ({ anecdotes }) => {

	const { id } = useParams();
	const anecdote = anecdotes.find((anecdote) => anecdote.id === Number(id)? anecdote : undefined)

	return (
		<>
			<h2>Anecdotes</h2>
			{!id ?
				<div>
					<ul>
						{anecdotes.map(anecdote => <li key={anecdote.id} >{anecdote.content}</li>)}
					</ul>
				</div>
				:
				<div>
					<h3>{anecdote ? anecdote.content : 'Id not found!!!'}</h3>
				</div>
			}
		</>
	)
};

export default AnecdoteList;
