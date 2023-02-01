import React, { useState, useEffect } from 'react'

/** Our Components **/
import { ShowComponent } from "./components/Show.component";
import { LoginComponent } from "./components/Login.component";
import { BlogsComponent } from './components/Blogs.Component';
import { MessageCompnnent } from './components/Message.componente';
import { TogglableComponent } from './components/Togglable.component';

/** Our method **/
import { getAllBlogs } from './utils/connection-axios';

export const App = _ => {

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
    setBlogs,
    setMessage,
    setUsername
  };
  const showProps = {
    blogs,
    setLogin
  }
  const createBlog = {
    blogs,
    username,
    setLogin,
    setBlogs,
    setMessage
  }

  return !login ?
    (
      <>
        <LoginComponent loginProps={loginProps} />
        <div className='mt2 mb1'>
          <MessageCompnnent message={message} />
        </div>
      </>
    ) : (
      <>
        <BlogsComponent createBlog={createBlog} />
        <div className='mt2 mb1'>
          <MessageCompnnent message={message} />
        </div>
        <ShowComponent showProps={showProps} />
      </>
    )
};
