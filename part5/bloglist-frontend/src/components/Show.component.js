import React from 'react'

/** Our Component **/
import { BlogComponent } from './Blog.component'


export const ShowComponent = (
    { showProps: {
        blogs,
    } }) => {

    return (
        <>
            <div>
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Title</td>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((blog) => (<BlogComponent key={blog.id} blog={blog} />))}
                    </tbody>
                </table>
            </div>
        </>
    )
};
