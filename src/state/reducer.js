import { NEW_MESSAGE, REACTIOIN_OBJECTS, SET_USERNAME } from "./types";
export const initialState  ={ 
    messages : [], 
    username : "anonymous", 
    reactionsMap: {}
}
const REACTION_TYPES = REACTIOIN_OBJECTS.map(item=>item.type)

const reducer = (state, action)=>{
    if(REACTION_TYPES.includes(action.type)){
        let reactionsMap;

        const {messageId} = action.item;
        const messageReactions = state.reactionsMap[messageId];
        console.log(messageReactions, "message")
        if(messageReactions?.length>0){
            reactionsMap = {
                ...state.reactionsMap,
                [messageId] : [...messageReactions, action.item]
            }
        }else{
            reactionsMap = {
                ...state.reactionsMap,  
                [messageId] : [action.item]
            }
        }

        return {...state, reactionsMap}
    }


    switch (action.type) {
        case NEW_MESSAGE:
            
            return {...state, messages: [...state.messages, action.item]};
        case SET_USERNAME :
            return {...state, username : action.username}

        default:
            return state;
    }
}

export default reducer;