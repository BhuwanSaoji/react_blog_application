import { NEW_MESSAGE, SET_USERNAME } from "./types";
import { v4 as uuidv4 } from 'uuid';

export const newMessage = ({text, username}) =>{
    return {
        type: NEW_MESSAGE,
        item : {text, timestamp: Date.now(), id: uuidv4(), username}
    }
}


export const setUsername = (username)=>{
    return {
    type: SET_USERNAME, username
}}


export const createReaction = ({username, emoji, messageId, type})=>({
type, item: {id:uuidv4(), timestamp: Date.now(), emoji, username, messageId}
});