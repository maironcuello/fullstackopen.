import React, { useState, useEffect } from 'react'

/** Our Components **/
import { ShowComponent } from "./components/Show.component";
import { LoginComponent } from "./components/Login.component";
import { BlogsComponent } from './components/Blogs.Component';

/** Our method **/
import { getAllBlogs } from './utils/connection-axios';

export function App() {

  const [blogs, setBlogs] = useState([]);
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState('');
  
  /** Everyting the app to run, getting data Blogd from backend **/
  useEffect(() => {
    getAllBlogs(setBlogs);
  }, []);

  /**
   * loginProos to LoginComponent
   * showblogProps to ShowblogsComponent
   */
  const loginProps = {
    setLogin,
    setUsername,
  };
  const showProps = {
    username,
    blogs,
    setLogin
  }

  return !login ?
    (
      <>
        <LoginComponent loginProps={loginProps} />
      </>
    ) : (
      <>
        <BlogsComponent setBlogs={setBlogs} blogs={blogs} />
        <ShowComponent showProps={showProps} />
      </>
    )
};
