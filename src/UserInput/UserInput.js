import React from 'react'

const userInput = (props) => {
  const style = {
    border: '1px solid blue',
    padding: '5px',
    width: '50%',
  }
  return (
    <div>
      <input style={style} type="text" onChange={props.change} value={props.userName} />
    </div>
  )
}

export default userInput;