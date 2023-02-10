import React from 'react'
import { connect } from 'react-redux'
import {
    incrementGood,
    incrementOk,
    incrementBad,
    reset
} from '../store/amount/action'

const mapStateToProps = (state) => {
    return {
        good: state.amauntReducer.good,
        ok: state.amauntReducer.ok,
        bad: state.amauntReducer.bad
    }
}

const Increment = (
    {
        incrementGood,
        incrementOk,
        incrementBad,
        reset,
        good,
        ok,
        bad
    }
) => {
    return (
        <>
            <button onClick={() => incrementGood()}>good</button>
            <button onClick={() => incrementOk()}>ok</button>
            <button onClick={() => incrementBad()}>bad</button>
            <button onClick={() => reset()}>reset</button>
            <br />
            <h3>
                Good: {good}{' '} Ok: {ok}{' '} Bad: {bad}
            </h3>
        </>
    )
}

export default connect(mapStateToProps, { incrementGood, incrementOk, incrementBad, reset })(Increment)