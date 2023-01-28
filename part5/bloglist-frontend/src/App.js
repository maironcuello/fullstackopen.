import React, { useState, useEffect, useRef, Ref } from 'react'

import { ShowblogsComponent } from "./components/Showblogs.component";
import { LoginComponent } from "./components/Login.component";
import { getAllBlogs } from './utils/connection-axios';

export function App() {

  const [blogs, setBlogs] = useState([]);
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getAllBlogs(setBlogs);
  }, []);
  console.log(blogs);
  const loginProps = {
    login,
    setLogin,
    setUsername,
    setPassword
  }
  const showblogProps = {
    username,
    blogs,
    setLogin
  }

  return (
    <div>
      <>
        {!login ? <LoginComponent loginProps={loginProps} /> : false}
        {!login ? false : <ShowblogsComponent showblogProps={showblogProps} />}
      </>
    </div>
  );



};
