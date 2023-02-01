import React, { useState } from 'react'
import { TogglableComponent } from './components/Togglable.component'

export const App = () => {
    const [login, setLogin] = useState(false);
    console.log(login)
    return (
        <div>
            <TogglableComponent login={login} setLogin={setLogin} />
        </div>
    )
}
