import React from 'react'

export const BlobComponent = ({ title, author, likes, url }) => {
    return (
        <>
            <table>
                <tr>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>{likes}</td>
                    <td>{url}</td>
                </tr>
            </table>
        </>
    )
}
