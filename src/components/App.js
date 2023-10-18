import React, { useReducer, useEffect } from "react";
import reducer, { initialState } from "../state/reducer";
import PublishMessage from "../PublishMessage";
import PublishMessageBoard from "./PublishMessageBoard";
import Context from "../context";
import PubSub from  "../pubsub"
import SetUsername from "./SetUsername";

const pubsub = new PubSub();




function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    pubsub.addListener({
      message : messageObject => {
        const {channel, message} = messageObject;
        dispatch(message)
      }
    })
  }, [])

  console.log("state", state)
  return (
    <Context.Provider value={{state, dispatch, pubsub}}>
      <div className="App">
        <h2>Reactions</h2>
        <SetUsername />
        <hr />
        <PublishMessage dispatch={dispatch} />
        <PublishMessageBoard messages={state.messages} />
      </div>
    </Context.Provider>
  );
}

export default App;
