import React, { useState, useEffect } from 'react'

import { ShowblogsComponent } from "./components/Showblogs.component";
import { LoginComponent } from "./components/Login.component";
import { getAllBlogs } from './utils/connection-axios';
import { setLocalStorage, getLocalStorage } from './utils/localstorage';



export function App() {

  const [blogs, setBlogs] = useState([]);
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [token, setToken] = useState(null);

  // setLocalStorage({ token, username })

  useEffect(() => {
    getAllBlogs(setBlogs);
  }, []);

  const loginProps = {
    setLogin,
    setUsername,
    setToken
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
  )
};
