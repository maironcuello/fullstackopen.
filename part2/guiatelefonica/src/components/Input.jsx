import React from 'react'

export const Input = ({newName, setState, placeholder}) => {
    return (
        <>
            <input 
                value={newName} 
                required
                onChange={(event) => setState(event.target.value)}
                placeholder={placeholder}
            />
        </>
    )
};