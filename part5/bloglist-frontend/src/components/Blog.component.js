import React from 'react'

export const BlogComponent = ({ blog: { title, author, likes, url, id } }) => {
    
    return (
        <>
            <tr >
                <td>{title}</td>
                <td>{author}</td>
                <td>{likes}</td>
                <td>{url}</td>
            </tr>
        </>
    )
}
