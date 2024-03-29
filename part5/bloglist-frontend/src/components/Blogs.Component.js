import React, { useState } from 'react';
import  PropTypes from 'prop-types';

/** Our Method */
import { createBlog } from "../utils/connection-axios";
import { setLocalStorage, getLocalStorage } from "../utils/localstorage";
/** Our Componets */
import { TogglableComponent } from './Togglable.component';


export const BlogsComponent = ({
    createBlog: {
        setLogin,
        blogs,
        setBlogs,
        username,
        setMessage
    } }) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [url, setUrl] = useState('');

    /** Clean Inputs */
    const cleanInput = () => {
        setTitle('');
        setAuthor('');
        setUrl('')
    }

    /**
     * @param {*} e Hear event
     * Here, capture information from input, then updating
     * setBlog for rendering Showcomponent
     */
    const onCreateBlog = async (e) => {
        e.preventDefault();
        try {
            /**  Getted username and token from localStorage **/
            const { token } = getLocalStorage();

            /** Created a new Blog in Database **/
            const blogToCreate = { title, author, url }
            const blogCreated = await createBlog(blogToCreate, token);

            /** Update setBlog and rendering and clean inputs **/
            setBlogs([...blogs, blogCreated]);
            cleanInput();

        } catch (error) {

            setMessage({ nota: 'created Blog succefully!!!', type: 'success' });
            cleanInput();
        }
    }

    const logout = () => {
        setLogin(false);
        setLocalStorage({ username: '', token: null })
        setBlogs([]);

    }

    return (
        <>
            <div className='flex-center column'>
                <h2 className='h1'>Blogs</h2>
                <div className='flex space-between mb1 border logout' >
                    <h1>{`${username} - logged IN`}</h1>
                    <button className='button-exit' onClick={() => logout()}>Logout</button>
                </div>
                <div>
                    <TogglableComponent nameButton='New'>
                        <h1>New blog</h1>
                        <form className='flex column border' onSubmit={onCreateBlog} >
                            <input
                                id='title'
                                className='input mb1'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder='Title'
                                required
                            />
                            <input
                                id='author'
                                className='input mb1'
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                placeholder='Author'
                                required
                            />
                            <input
                                id='url'
                                className='input mb1'
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder='Url'
                                required
                            />
                            <button 
                                id='button-create' 
                                className='button' 
                                type='submit'
                            >Create</button>
                        </form>
                    </TogglableComponent>
                </div>
            </div>
        </>
    )
}

BlogsComponent.propTypes = {
    setLogin: PropTypes.func,
    blogs: PropTypes.array,
    setBlogs: PropTypes.func,
    username: PropTypes.string,
    setMessage: PropTypes.func
}