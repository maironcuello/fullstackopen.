import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setBlogs, setUpdateBlog } from '../../reduxs/blogs/blogsSlice';
import { resetMessage, setMessage } from '../../reduxs/messages/messageSlice';
import { useField } from '../../hooks';
import { Header } from '../Header';
import { updateBlog } from '../../utilities/axios.connections'
import { ContainerStyle, ContendStyle } from '../../styles-components';

const Blog = ({ blogId }) => {
    const dispatch = useDispatch();
    const commnet = useField('text');
    const blogs = useSelector(state => state.blogs);
    const { id, author, likes, title, url, commnets } = blogs.find((blog) => blog.id === blogId ? blog : null);
    
    const addLike = async () => {
        try {
            await updateBlog(id, { likes: likes + 1 });
            const newBlogs = blogs.filter(blog => blog.id !== id);
            const newsLikes = { id, author, likes: likes + 1, title, url }
            const newBlogToUpdate = [...newBlogs, newsLikes].sort((a, b) => b.likes - a.likes)
            dispatch(setBlogs(newBlogToUpdate));
            dispatch(setMessage({ nota: 'Like succefully!!!', type: 'success' }));
            setTimeout(() => { dispatch(resetMessage()) }, 3000)
        } catch (error) {
            dispatch(setMessage({ nota: 'Not created Like', type: 'error' }));
            setTimeout(() => { dispatch(resetMessage()) }, 3000)
        }
    };
    const addComment = () => {
        // e.preventDefault();
        const newCommnet = { id, author, likes: likes, title, url, commnets : [commnet.attributes.value] }
        dispatch(setUpdateBlog(newCommnet));
        commnet.reset();
    }
    return (
        <>
            <ContainerStyle>
                <Header />
                <ContendStyle>
                    <h1>{title}</h1>
                    <div className='flex'>
                        <h3>{likes} likes</h3>
                        <button className='button-like' onClick={addLike}>like</button>
                    </div>
                    <h3>Added by :{author}</h3>
                    <h3>Url :{url}</h3>
                    <h2>Commnets</h2>
                    <div className='flex'>
                        <input {...commnet.attributes} placeholder='Writes a commnent' />
                        <button className='button-like' onClick={addComment}>Commnent</button>
                    </div>
                    <h2>{commnets}</h2>
                </ContendStyle>
            </ContainerStyle>
        </>
    )
}

export default Blog;
