import React from 'react'

function Squares(props) {
  return (
    <div className='boxes' onClick={props.onClick}>
        <h1>{props.value}</h1>
    </div>
  )
}

export default Squares