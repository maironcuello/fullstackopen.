import React from 'react'
import { createStore } from 'redux';
import reducer from './reducer';
import { Button } from './components/Button'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const App = () => {
    const setDispatch = (type) => store.dispatch({ type })

    const clickGood = () => setDispatch('GOOD');
    const clickOk = () => setDispatch('OK');
    const clickBad = () => setDispatch('BAD');
    const clickReset = () => setDispatch('RESET');

    return (
        <>
            <Button title='good' click={clickGood} />
            <Button title='ok' click={clickOk} />
            <Button title='bad' click={clickBad} />
            <Button title='reset' click={clickReset} />
            <h4>good {store.getState()['good']}</h4>
            <h4>ok {store.getState()['ok']}</h4>
            <h4>bad {store.getState()['bad']}</h4>
        </>
    )
}
