import React from 'react'
import { TogglableComponent } from './Togglable.component';

export const BlogComponent = ({ blog: { title, author, likes, url } }) => {

    return (
        <>
            <div className='flex  column'>
                <h2>{title}</h2>
                <TogglableComponent nameButton='View'>
                    <table>
                        <tbody >
                            <tr>
                                <td>{'Author : '}{author}</td>
                            </tr>
                            <tr>
                                <td>{'Likes : '}{likes}</td>
                            </tr>
                            <tr>
                                <td>{'Url : '}{url}</td>
                            </tr>
                        </tbody>
                    </table>
                </TogglableComponent>
            </div>

        </>
    )
}
