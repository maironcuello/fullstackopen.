import React, { useState } from 'react'

/** Our Method **/
import { updateBlog } from '../utils/connection-axios'

/** Our Component **/
import { BlogComponent } from './Blog.component'


export const ShowComponent = (
    { showProps: {
        setBlogs,
        blogs,
    } }) => {

    // const [numlikes, setNumlikes] = useState(0);

    const addLike = async (id) => {
        const blog = blogs.find(blog => blog.id === id);
        const currentLike = blog.likes + 1;
        await updateBlog(id, { likes: currentLike });
        const newBlogs = [...blogs]
        newBlogs.forEach(blog => blog.id === id ? blog.likes = currentLike : blog.likes);
        setBlogs(newBlogs);
    };

    return (
        <>
            <div>
                <h2>Title</h2>
                {blogs.map((blog) => (<BlogComponent key={blog.id} blog={blog} addLike={addLike} />
                ))};
            </div>
        </>
    )
};
