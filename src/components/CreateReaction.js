import React from 'react'
import { REACTIOIN_OBJECTS } from '../state/types'
import { useAppContext } from '../hook'
import { createReaction } from '../state/action'


function CreateReaction({messageId}) {
    const {pubsub: {publish}, state: {username}} =useAppContext()
    
    const publishReaction = ({type, emoji})=>{
        publish(createReaction({type, emoji, username, messageId}))
    }
    
  return (
    <div className='CreateReaction'>
        {
            REACTIOIN_OBJECTS.map(item =>{
                const {type, emoji} = item
                return (
                    <span key={type} onClick={()=>publishReaction(item)} >{emoji}</span>
                )
            })
        }
    </div>
  )
}

export default CreateReaction