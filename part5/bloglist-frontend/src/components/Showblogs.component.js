import React from 'react'
import { BlobComponent } from './Blob.component'

export const ShowblogsComponent = (
    { showblogProps: {
        username,
        blogs,
        setLogin
    } }) => {

    return (
        <>
            <h2>{`User: ${username}`}</h2>
            <h1>Blogs list</h1>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Likes</th>
                    <th>Url</th>
                </tr>
            </table> 
            { blogs.map((blog) => <BlobComponent key={blog.id} {...blog} />)}
            <button onClick={() => setLogin(false)}>Exit</button>
        </>
    )
}
