import React, { useState } from 'react';

export const TogglableComponent = ({ nameButton, children }) => {

    const [visible, setvisible] = useState(false);

    const displayHide = { display: visible ? 'none' : '' };
    const displayShow = { display: visible ? '' : 'none' };

    const toggable = () => {
        setvisible(!visible)
    }
    return (
        <>
            <div className='flex '>
                <div style={displayHide} >
                    <button className='button' onClick={toggable}>{nameButton}</button>
                </div>
                <div style={displayShow}>
                    {children}
                    <div className='flex'>
                        <button className='button-cancel pointer' onClick={toggable}>cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}
