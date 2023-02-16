import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';


/** Our Method */
import { createBlog, setLocalStorage, getLocalStorage } from "../../utils/";
import { setMessage } from '../../reduxs/messageSlice';
import { setBlogs } from '../../reduxs/blogsSlice';

/** Our Componets */
import { Togglable } from '../Togglable';

/**Our hooks */
import { useField } from '../../hooks';

const CreateBlog = ({
    createBlog: {
        setLogin,
        username,
    } }) => {

    const dispatch = useDispatch();
    const title = useField('text');
    const author = useField('text');
    const url = useField('text');

    const cleanInput = () => {
        title.reset();
        author.reset();
        url.reset();
    }
    const blogs = useSelector(state => state.blogs.value);

    /**
     * @param {*} e Hear event
     * Here, capture information from input, then updating
     * setBlog for rendering Showcomponent
     */
    const onCreateBlog = async (e) => {
        e.preventDefault();
        try {
            const { token } = getLocalStorage();
            const blogToCreate = { title: title.attributes.value, author: author.attributes.value, url: url.attributes.value }
            const blogCreated = await createBlog(blogToCreate, token);
            dispatch(setBlogs([...blogs, blogCreated]));
            cleanInput();
            dispatch(setMessage({ nota: 'created Blog succefully!!!', type: 'success' }));
        } catch (error) {
            cleanInput();
            dispatch(setMessage({ nota: 'Not created blog', type: 'error' }));
        }
    }

    const logout = () => {
        setLogin(false);
        setLocalStorage({ username: '', token: null })
        dispatch(setBlogs([]));
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
                    <Togglable nameButton='New'>
                        <h1>New blog</h1>
                        <form className='flex column border' onSubmit={onCreateBlog} >
                            <input
                                {...title.attributes}
                                id='title'
                                className='input mb1'
                                placeholder='Title'
                            />
                            <input
                                {...author.attributes}
                                id='author'
                                className='input mb1'
                                placeholder='Author'
                            />
                            <input
                                {...url.attributes}
                                id='url'
                                className='input mb1'
                                placeholder='Url'
                            />
                            <button
                                id='button-create'
                                className='button'
                                type='submit'
                            >Create</button>
                        </form>
                    </Togglable>
                </div>
            </div>
        </>
    )
}

CreateBlog.propTypes = {
    setLogin: PropTypes.func,
    blogs: PropTypes.array,
    setBlogs: PropTypes.func,
    username: PropTypes.string,
    setMessage: PropTypes.func
}

export default CreateBlog;
