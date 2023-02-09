import React from 'react';
import  PropTypes  from 'prop-types';

/** Our Method **/
import { updateBlog, deleteBlog } from '../utils/connection-axios';

/** Our Component **/
import { BlogComponent } from './Blog.component';


export const ShowComponent = (
    { showProps: {
        setBlogs,
        blogs,
    } }) => {

    const addLike = async (id) => {
        const blog = blogs.find(blog => blog.id === id);
        const currentLike = blog.likes + 1;
        await updateBlog(id, { likes: currentLike });
        const newBlogs = [...blogs]
        newBlogs.forEach(blog => blog.id === id ? blog.likes = currentLike : blog.likes);
        newBlogs.sort((a, b) => b.likes - a.likes);
        setBlogs(newBlogs);
    };
    
    const deleteToBlog = async (id) => {
        if (window.confirm('Are you sure, wants to delete this blog')) {
            await deleteBlog(id);
            const newBlogs = blogs.filter(blog => blog.id !== id)
            setBlogs(newBlogs);
        }

    }

    return (
        <>
            <div>
                <h2>Title</h2>
                {blogs.map((blog) => (<BlogComponent key={blog.id} blog={blog} addLike={addLike} deleteToBlog={deleteToBlog} />
                ))};
            </div>
        </>
    )
};

ShowComponent.propTypes = {
    setBlogs: PropTypes.func,
    blogs: PropTypes.array,
}   