import React from 'react'

function MessageReactions({messageReactions}) {
  return (
    <div>
        {
            messageReactions?.length>0 && messageReactions.map((item, index)=>{
                const {id, username, emoji} = item;

                return(
                    <span key={id}>
                        <em>{username}</em>
                        {emoji}
                        { index!==messageReactions.length-1 ? " , " : null}
                    </span>
                )
            })
        }
    </div>
  )
}

export default MessageReactions