import React, { useState } from 'react';
import Chat from './Chat';
import DetailsDisplay from './DetailsDisplay';
import SideBar from './SideBar';

const EnvoyBot = () => {
  // TODO: use reducer/redux/context
  const [activeTab, setActiveTab] = useState("help");

  return (
    <section className="envoy-bot-container">
      <SideBar setActiveTab={setActiveTab}/>
      <DetailsDisplay activeTab={activeTab}/>
      <Chat />
    </section>
  )
};

export default EnvoyBot;
