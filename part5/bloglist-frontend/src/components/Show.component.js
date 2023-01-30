import React from 'react'

/** Our Component **/
import { BlogComponent } from './Blog.component'

/** Our Method **/
import { setLocalStorage } from '../utils/localstorage'

export const ShowComponent = (
    { showProps: {
        username,
        blogs,
        setLogin
    } }) => {

    /**
     * To use this method by logout de App
     * Clean localStorage and change the state login
     */
    const logout = () => {
        setLogin(false);
        setLocalStorage({ username: '', token: null })
    }
    return (
        <>
            <h2>{`User: ${username} logged In`}</h2>
            <h1>Blogs list</h1>
            <table width="100%">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Likes</td>
                        <td>Url</td>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog) => (<BlogComponent key={blog.id} blog={blog} />))}
                </tbody>
            </table>
            <button onClick={() => logout()}>Logout</button>
        </>
    )
};
