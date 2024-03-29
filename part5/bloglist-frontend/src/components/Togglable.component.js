import React, { useState } from 'react';
import PropTypes from 'prop-types';



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
                    <button
                        id='new-blog'
                        className='button'
                        onClick={toggable}
                    >{nameButton}
                    </button>
                </div>
                <div style={displayShow}>
                    {children}
                    <div className='flex'>
                        <button
                            id='cancel-newblog' 
                            className='button-cancel pointer' 
                            onClick={toggable}
                        >cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

TogglableComponent.displayName = 'TogglableComponent';

TogglableComponent.propTypes = {
    nameButton: PropTypes.string
}