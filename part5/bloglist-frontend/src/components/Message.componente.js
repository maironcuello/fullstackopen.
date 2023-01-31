import React from 'react'

export const MessageCompnnent = ({ message }) => {

    if (message === null) return null;
    return (
        <>
            <div className={`styleMessage message-${message.type}`} >
                {message.nota}
            </div>
        </>
    )
}
