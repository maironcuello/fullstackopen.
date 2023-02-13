import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/**Our Compinents */
import { AnecdoteList, CreateNew, About, Menu, Footer, Notification } from './components';


export const App = () => {

  const [anecdotes, setAnecdotes] = React.useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = React.useState({
    message: 'Create succefully anecdote',
    type: 'error'
  })

  React.useEffect(() => {
    setInterval(() => {
      setNotification('');
    }, 3000);

  }, [notification]);

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return (
    <div>
      <h1>Software anecdotes</h1>
      <BrowserRouter>
        <Menu />
        <Notification notification={notification} />
        <Routes>
          <Route path='/' element={<AnecdoteList anecdotes={anecdotes} />} />
          <Route path='/anecdotes/:id' element={<AnecdoteList anecdotes={anecdotes} />} />
          <Route path='/anecdotes' element={<AnecdoteList anecdotes={anecdotes} />} />
          <Route path='/create' element={<CreateNew addNew={addNew} />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
