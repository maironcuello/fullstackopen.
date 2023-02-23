import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
/** Our Method */
import { createBlog, getAllBlogs } from "../../utilities";
import { getLocalStorage } from '../../utilities/tools/localstorage';
import { setMessage } from '../../reduxs/messages/messageSlice';
import { setBlogs } from '../../reduxs/blogs/blogsSlice';
/** Our Componets */
import { Togglable } from '../Togglable';
import { Header } from '../Header';
import { ContainerStyle, FormStyle, ContendStyle } from '../../styles-components';
/** Our hooks */
import { useField } from '../../hooks';

const Blogs = () => {
    const dispatch = useDispatch();

    const allBlogs = async () => {
        const blogs = await getAllBlogs();
        dispatch((setBlogs(blogs)))
    }

    React.useEffect(() => {
        allBlogs();
    }, []);

    const title = useField('text');
    const author = useField('text');
    const url = useField('text');

    const cleanInput = () => {
        title.reset();
        author.reset();
        url.reset();
    }
    const blogs = useSelector(state => state.blogs);

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

    return (
        <>
            <ContainerStyle>
            <Header />
                <ContendStyle>
                    <div className='togglable'>
                        <Togglable nameButton='Create New'>
                            <h1>New blog</h1>
                            <FormStyle onSubmit={onCreateBlog} >
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
                                    type='submit'
                                >Create</button>
                            </FormStyle>
                        </Togglable>
                    </div>
                    <div>
                        {blogs.map((blog) => <h2 key={blog.id} ><Link to={blog.id}>{blog.title}</Link></h2>)}
                    </div>
                </ContendStyle>
            </ContainerStyle >
        </>
    )
}

export default Blogs;
