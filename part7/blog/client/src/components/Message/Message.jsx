import React from 'react'
import { useSelector } from 'react-redux';

const Message = () => {

    const message = useSelector(state => state.message);
    console.log(message.nota)

    if (message.nota === '') {
        return null
    }

    return (
        <>
            <div className={`styleMessage message-${message.type}`} >
                {message.nota}
            </div>
        </>
    )
}

export default Message;
