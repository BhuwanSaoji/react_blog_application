import PubNub from "pubnub";
import PubnubConfig from "./pubnub.config";



export const MESSAGE_CHANNEL = "MESSAGE_CHANNEL";


function PubSub() {

    const pubnub = new PubNub(PubnubConfig);
    pubnub.subscribe({ channels: [MESSAGE_CHANNEL] });


    this.addListener = listenerConfig => {
        pubnub.addListener(listenerConfig)
    }


    this.publish = message => {
        pubnub.publish({
            message,
            channel: MESSAGE_CHANNEL
        })
    }

}

export default PubSub;
