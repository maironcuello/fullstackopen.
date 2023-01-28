import React from 'react'
import { BlobComponent } from './Blob.component'
import { setLocalStorage } from '../utils/localstorage'

export const ShowblogsComponent = (
    { showblogProps: {
        username,
        blogs,
        setLogin
    } }) => {

    const logout = () => {

        setLogin(false);
        setLocalStorage({ username: '', token: null })
    }


    return (
        <>
            <h2>{`User: ${username} logged In`}</h2>
            <h1>Blogs list</h1>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Likes</th>
                    <th>Url</th>
                </tr>
            </table>
            {blogs.map((blog) => <BlobComponent key={blog.id} {...blog} />)}
            <button onClick={() => logout()}>Logout</button>
        </>
    )
};
