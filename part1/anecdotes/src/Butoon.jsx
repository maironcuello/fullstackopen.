import React from 'react'

function Butoon(props) {
  return (
    <button onClick={()=> props.onClick()} >{props.name}</button>
  )
}

export default Butoon