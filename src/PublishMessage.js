import React, {useState} from 'react'
import { newMessage } from './state/action';
import { useAppContext } from './hook';


function PublishMessage() {

    const [text, setText] = useState("");
    const {pubsub: {publish}, state: {username} } = useAppContext();

    const updateText = (event)=>{
        setText(event.target.value);
    }

    const publishMessage = ()=>{
      publish(newMessage({text, username}))
    }

  return (
    <div>
        <h3>PublishMessage</h3>
        <input value={text} onChange={updateText} />
        {" "}
        <button onClick={publishMessage} >Publish it</button>
    </div>
  )
}

export default PublishMessage