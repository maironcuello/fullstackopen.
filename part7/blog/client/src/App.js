import React from 'react'
import { Routes, Route, useMatch } from "react-router-dom";

/** Our Components **/
import { Login, Users, User, Blogs, Blog } from './components'

export const App = () => {

  const userMatch = useMatch('users/:id');
  const blogMatch = useMatch('blogs/:id');
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={userMatch ? <User userId={userMatch.params.id} /> : null} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:id' element={blogMatch ? <Blog blogId={blogMatch.params.id} /> : null} />
      </Routes>
    </>
  )
}
