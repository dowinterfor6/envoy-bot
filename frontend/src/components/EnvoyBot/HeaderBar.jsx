import React from 'react';

const HeaderBar = () => {
  return (
    <section className="header-bar">
      <h1>
        Andrew's Envoy
      </h1>
      {/* TODO: Pop up or some shit */}
      <div className="envoy-bot-network-status fade-out">
        You're online dumbass
        {/* <div className="disconnected">
          Disconnected... reconnecting!
        </div>
        <div className="offline">
          Offline! Reload to reconnect.
        </div> */}
      </div>
    </section>
  )
};

export default HeaderBar;
