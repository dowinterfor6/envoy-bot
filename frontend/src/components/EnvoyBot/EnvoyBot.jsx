import React, { useState } from 'react';
import { postMessage } from '../../utils/bot_utils';
import BotNetworkStatus from './BotNetworkStatus';

const EnvoyBot = () => {
  const [textInput, setTextInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      "type": "message",
      "text": textInput,
      "channel": "websocket",
      "user": "214124-1414-1111"
    }
    const res = await postMessage(payload);
    console.log(res.data);
    setTextInput("");
  };

  return (
    <section className="envoy-bot-container">
      this is EnvoyBot
      <BotNetworkStatus />
      <div className="message-list">

      </div>
      <div className="message-replies">

      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ask me something..." onChange={(e) => setTextInput(e.currentTarget.value)} value={textInput}/>
        <button type="submit">Send</button>
      </form>
    </section>
  )
};

export default EnvoyBot;
