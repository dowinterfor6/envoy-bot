import React from 'react';
import BotNetworkStatus from './BotNetworkStatus';

const EnvoyBot = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
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
        <input type="text" placeholder="Ask me something..." />
        <button type="submit">Send</button>
      </form>
    </section>
  )
};

export default EnvoyBot;
