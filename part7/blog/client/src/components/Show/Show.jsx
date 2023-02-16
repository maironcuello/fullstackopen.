import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setBlogs } from '../../reduxs/blogsSlice'; 
/** Our Method **/
import { updateBlog, deleteBlog } from '../../utils/';

/** Our Component **/
import { Blog } from '../Blog';

const Show = () => {
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogs.value);

    const addLike = async (id) => {
        const blog = blogs.find(blog => blog.id === id);
        const newLikes = {
            id: blog.id,
            title: blog.title,
            author: blog.author,
            likes: blog.likes + 1,
            url: blog.url
        } 
        await updateBlog(id, { likes: newLikes.likes });
        const newBlogs = blogs.filter(blog => blog.id !== id)
        const blogsToUpdate = [...newBlogs, newLikes].sort((a, b) => b.likes - a.likes) 
        dispatch(setBlogs(blogsToUpdate));
    };

    const deleteToBlog = async (id) => {
        if (window.confirm('Are you sure, wants to delete this blog')) {
            await deleteBlog(id);
            const newBlogs = blogs.filter(blog => blog.id !== id)
            dispatch(setBlogs(newBlogs));
        }
    }

    return (
        <>
            <div>
                <h2>Title</h2>
                {blogs.map((blog) => (<Blog key={blog.id} blog={blog} addLike={addLike} deleteToBlog={deleteToBlog} />
                ))};
            </div>
        </>
    )
};

Show.propTypes = {
    setBlogs: PropTypes.func,
    blogs: PropTypes.array,
}
export default Show;
