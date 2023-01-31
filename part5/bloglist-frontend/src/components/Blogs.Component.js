import React, { useState } from 'react'
import { getAllBlogs, createBlog } from "../utils/connection-axios";
import { getLocalStorage } from "../utils/localstorage";

export const BlogsComponent = ({createBlog:{ setBlogs, blogs , setMessage}}) => {

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

        /**  Getted username and token from localStorage **/
        const username = getLocalStorage();

        /** Created a new Blog in Database **/
        const blogToCreate = { title, author, url, token: username.token }

        /** Update setBlog and rendering and clean inputs **/
        await createBlog(blogToCreate);
        await getAllBlogs(setBlogs);
        setMessage({ nota: 'created Blog succefully!!!', type: 'success' });
        cleanInput();
    }

    return (
        <>
            <h1>Create New</h1>
            <form onSubmit={onCreateBlog} >
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Title'
                    required
                />
                <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder='Author'
                    required
                />
                <input
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder='Url'
                    required
                />
                <button type='submit'>Create</button>
            </form>
        </>
    )
}
