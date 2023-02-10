const incrementGood = () => {
    return {
        type: 'GOOD',
        payload: 1
    }
}
const incrementOk = () => {
    return {
        type: 'OK',
        payload: 1
    }
}
const incrementBad = () => {
    return {
        type: 'BAD',
        payload: 1
    }
}
const reset = () => {
    return {
        type: 'RESET',
        payload: 0
    }
}

export { 
    incrementGood,
    incrementOk,
    incrementBad,    
    reset 
}