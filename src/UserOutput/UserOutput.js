import React from 'react'

const userOutput = (props) => {
  return (
    <div>
      <p onClick={props.change}>I am {props.userName}</p>
    </div>
  )
}

export default userOutput;