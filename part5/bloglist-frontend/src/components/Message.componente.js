import React from 'react'
import PropTypes from 'prop-types'
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

MessageCompnnent.propTypes = {
    message: PropTypes.object
}