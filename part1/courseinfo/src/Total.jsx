import React from 'react'

function Total(props) {
    const totalClass = props.parts.reduce((total, idx)=>  total += idx.exercises,0)
  
    return (
    <div>
        <p>
            {totalClass}
        </p>
    </div>
  )
}
// [0].exercises + props.parts[1].exercises + props.parts[2].exercises
export default Total