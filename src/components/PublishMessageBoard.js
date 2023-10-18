import React from 'react'
// added custom hook where we are importing useContext from react and applying Context to it
import { useAppContext } from '../hook';
import CreateReaction from './CreateReaction';
import MessageReactions from './MessageReactions';



export default function PublishMessageBoard() {
    const {state: {messages, reactionsMap}} = useAppContext();

  return (
    <div>
        {messages.map(item=>{
            const {id, text, timestamp, username} = item;
            return(
                <div key={id}>
                    <h4>{new Date(timestamp).toLocaleString()}</h4>
                    <p>{text}</p>
                    <h4> - {username}</h4>
                    <CreateReaction messageId ={id} />
                    <MessageReactions  messageReactions={reactionsMap[id]} />
                    <hr />
                </div>
            )
        })}
        
    </div>
  )
}
