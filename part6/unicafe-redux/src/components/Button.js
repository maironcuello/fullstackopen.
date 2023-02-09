import React from 'react'

export const Button = ({ title, click }) => {
    return (
        <>
            <button onClick={click}>{title}</button>
        </>
    )
}
