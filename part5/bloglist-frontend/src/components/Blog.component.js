import React from 'react'
import { TogglableComponent } from './Togglable.component';

export const BlogComponent = ({ blog: { title, author, likes, url, id }, addLike, deleteToBlog }) => {

    return (
        <>
            <div className=''>
                <h2>{title}</h2>
                <TogglableComponent nameButton='View'>
                    <div className='border mb1' >
                        <h3>{'Author : '}{author}</h3>
                        <h3>{'Url : '}{url}</h3>
                        <h3>{'Title :'}{title}</h3>
                        <div className='flex space-between'>
                            <h3>{'Likes : '}{likes}</h3>
                            <button className='button-like' onClick={() => addLike(id)}>like</button>
                        </div>
                    </div>
                    <div className='flex'>
                        <button className='button-delete' onClick={() => deleteToBlog(id)}>delete blog</button>
                    </div>
                </TogglableComponent>
            </div>

        </>
    )
}
