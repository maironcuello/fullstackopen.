const incrementGood = () => {
    return {
        type: 'GOOD',
        // payload: 1
    }
}
const incrementOk = () => {
    return {
        type: 'OK',
    }
}
const incrementBad = () => {
    return {
        type: 'BAD',
    }
}
const reset = () => {
    return {
        type: 'RESET',
    }
}

export { 
    incrementGood,
    incrementOk,
    incrementBad,    
    reset 
}