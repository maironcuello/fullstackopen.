import React, { useState, useEffect } from 'react'

/** Our Components **/
import { ShowComponent } from "./components/Show.component";
import { LoginComponent } from "./components/Login.component";
import { BlogsComponent } from './components/Blogs.Component';
import { MessageCompnnent } from './components/Message.componente';

/** Our method **/
import { getAllBlogs } from './utils/connection-axios';

export function App() {

  const [blogs, setBlogs] = useState([]);
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState(null);

  /** Everyting the app to run, getting data Blogd from backend **/
  useEffect(() => {
    getAllBlogs(setBlogs);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMessage(null)
    }, 3000);
  }, [message]);

  /**
   * loginProos to LoginComponent
   * showblogProps to ShowblogsComponent
   */
  const loginProps = {
    setLogin,
    setMessage,
    setUsername,
  };
  const showProps = {
    username,
    blogs,
    setLogin
  }
  const createBlog = {
    blogs,
    setBlogs,
    setMessage
  }

  return !login ?
    (
      <>
        <MessageCompnnent message={message} />
        <LoginComponent loginProps={loginProps} />
      </>
    ) : (
      <>
        <MessageCompnnent message={message} />
        <BlogsComponent createBlog={createBlog} />
        <ShowComponent showProps={showProps} />
      </>
    )
};
