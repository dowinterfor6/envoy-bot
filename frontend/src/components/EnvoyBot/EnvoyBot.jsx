import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { postMessage } from '../../utils/bot_utils';
import HeaderBar from './HeaderBar';

const EnvoyBot = () => {
  const currUser = "69420";
  const [textInput, setTextInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messageListRef = useRef(null);

  useEffect(() => {
    messageListRef.current.scrollTop = messageListRef.current.scrollHeight - messageListRef.current.clientHeight;
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (textInput) {
      const payload = {
        type: "message",
        text: textInput,
        channel: "websocket",
        user: currUser
      }
      // TODO: Useful for if there's a significant difference between message sent and response?
      setMessages([...messages, payload]);
      sendMessage(payload);
      setTextInput("");
    }
  };

  const sendMessage = async (payload) => {
    // TODO: Handle unsuccessful message?
    // TODO: Handle typing/loading?
    // TODO: Lock further input to prevent spam/data getting lost?
    const { data } = await postMessage(payload);
    // TODO: Probably try to optimize this?
    setMessages([...messages, payload, ...data]);
  }

  return (
    <section className="envoy-bot">
      <div className="envoy-bot-container">
        {/* TODO: Make this into a generic header */}
        <HeaderBar />
        <ul className="message-list" ref={messageListRef}>
          {messages.map(({ type, text, user }, idx) => {
            return (
              <li key={`${type}-${idx}`} className={user === currUser ? "user" : "bot"}>
                <div className="message">
                  <p>
                    {text}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
        <form onSubmit={handleSubmit} className="input-container">
          {/* TODO: Handle overflow */}
          <input type="text" placeholder="Ask me something..." onChange={(e) => setTextInput(e.currentTarget.value)} value={textInput}/>
          <button type="submit" className="send-message-button">
            <FontAwesomeIcon icon={faChevronRight} size="lg"/>
          </button>
        </form>
      </div>
    </section>
  )
};

export default EnvoyBot;
