import React, { useState } from 'react';
import Chat from './Chat';
import DetailsDisplay from './DetailsDisplay';
import SideBar from './SideBar';

const EnvoyBot = () => {
  // TODO: use reducer/redux/context
  const [activeTab, setActiveTab] = useState("help");
  const [details, setDetails] = useState([]);

  return (
    <section className="envoy-bot-container">
      <SideBar setActiveTab={setActiveTab}/>
      <DetailsDisplay activeTab={activeTab} details={details}/>
      <Chat setDetails={setDetails}/>
    </section>
  )
};

export default EnvoyBot;
