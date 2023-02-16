import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setBlogs } from './reduxs/blogsSlice';

/** Our Components **/
import { Show, Login, CreateBlog, Message } from './components'

/** Our method **/
import { getAllBlogs } from './utils/connection-axios';

export const App = () => {

  const dispatch = useDispatch();

  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState('');

  /** Everyting the app to run, getting data Blogd from backend **/
  const blogs = useSelector((state) => state.blogs.value);

  const getBlogs = async () => {
    const allblogs = await getAllBlogs()
    dispatch(setBlogs(allblogs))
  }

  useEffect(() => {
    getBlogs();
  }, [login]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(setMessage({ value: { note: '', type: '' } }))
  //   }, 4000);
  // }, []);

  const loginProps = {
    setLogin,
    setUsername
  };

  const createBlog = {
    blogs,
    username,
    setLogin,
  }

  return !login ?
    (
      <>
        <Login loginProps={loginProps} />
      </>
    ) : (
      <>
        <CreateBlog createBlog={createBlog} />
        <div className='mt2 mb1'>
          <Message />
        </div>
        <Show />
      </>
    )
};
