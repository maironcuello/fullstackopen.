import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Togglable = ({ nameButton, children }) => {

    const [visible, setvisible] = useState(false);

    const displayHide = { display: visible ? 'none' : '' };
    const displayShow = { display: visible ? '' : 'none' };

    const toggable = () => {
        setvisible(!visible)
    }


    return (
        <>
            <div>
                <div style={displayHide} >
                    <button
                        className='logout'
                        id='new-blog'
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
                        >Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

Togglable.displayName = 'Togglable';

Togglable.propTypes = {
    nameButton: PropTypes.string
}

export default Togglable;
