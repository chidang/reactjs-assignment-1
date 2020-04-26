import React, {useState} from 'react';
import UserInput from '../UserInput/UserInput'
import UserOutput from '../UserOutput/UserOutput'
import UserStyle from './User.css'

const User = (props) => {

  const [personState, setPersonState] = useState({
    userName: props.userName
  })

  const changePersonsState = () => {
    setPersonState({
      userName: props.userName + " Updated"
    })
  }

  const changePersonName = (event) => {
    setPersonState({
      userName: event.target.value
    });
  }

  return (
    <div className="User">
      <UserInput change={changePersonName} userName={personState.userName}/>
      <UserOutput userName={personState.userName} change={changePersonsState}/>
    </div>
  )
}

export default User;