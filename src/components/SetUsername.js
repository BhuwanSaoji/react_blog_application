import React from 'react'
import { useAppContext } from '../hook'
import { setUsername } from '../state/action';


function SetUsername() {
    const {dispatch, state: {username} } =useAppContext();

    const updateUserName = event => {
        dispatch(setUsername(event.target.value));
    }

  return (
    <div>
        <h3>Username</h3>
        <input onChange={updateUserName} value={username} />
        </div>
  )
}

export default SetUsername