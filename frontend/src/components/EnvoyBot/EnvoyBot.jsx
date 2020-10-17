import React, { useState } from 'react';
import { postMessage } from '../../utils/bot_utils';
import BotNetworkStatus from './BotNetworkStatus';

const EnvoyBot = () => {
  const currUser = "69420";
  const [textInput, setTextInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      type: "message",
      text: textInput,
      channel: "websocket",
      user: currUser
    }
    console.log(payload)
    // TODO: Useful for if there's a significant difference between message sent and response?
    setMessages([...messages, payload]);
    // TODO: Handle unsuccessful message?
    // TODO: Handle typing/loading?
    // TODO: Lock further input to prevent spam/data getting lost?
    const { data } = await postMessage(payload);
    // TODO: Probably try to optimize this?
    setMessages([...messages, payload, ...data]);
    setTextInput("");
  };

  return (
    <section className="envoy-bot-container">
      {/* TODO: Make this into a generic header */}
      <BotNetworkStatus />
      <ul className="message-list">
        {messages.map(({ type, text, user }, idx) => {
          return (
            <li key={`${type}-${idx}`} className={user === currUser ? "user" : "bot"}>
              <div className="message">
                {text}
              </div>
            </li>
          )
        })}
      </ul>
      <form onSubmit={handleSubmit} className="input-container">
        <input type="text" placeholder="Ask me something..." onChange={(e) => setTextInput(e.currentTarget.value)} value={textInput}/>
        <button type="submit">Send</button>
      </form>
    </section>
  )
};

export default EnvoyBot;
