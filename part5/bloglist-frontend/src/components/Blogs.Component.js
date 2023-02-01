import React, { useState } from 'react'

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

    /**
     * Clean Inputs
     */
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
                <h1 className='h1'>Blogs</h1>
                <div className='flex space-between mb1 mt1'>
                    <h1>{`${username} - logged IN`}</h1>
                    <button className='button-exit' onClick={() => logout()}>Logout</button>
                </div>
                <div>
                    <TogglableComponent nameButton='Create New Blog'>
                        <h1>New blog</h1>
                        <form className='flex column' onSubmit={onCreateBlog} >
                            <input
                                className='input mb1'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder='Title'
                                required
                            />
                            <input
                                className='input mb1'
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                placeholder='Author'
                                required
                            />
                            <input
                                className='input mb1'
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder='Url'
                                required
                            />
                            <button className='button' type='submit'>Create</button>
                        </form>
                    </TogglableComponent>
                </div>
            </div>
        </>
    )
}
