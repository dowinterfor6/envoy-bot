import React, { useState } from 'react';
import Contact from '../Contact/Contact';
import Chat from './Chat';
import DetailsDisplay from './DetailsDisplay';
import SideBar from './SideBar';

const EnvoyBot = () => {
  // TODO: use reducer/redux/context
  const [activeTab, setActiveTab] = useState("help");
  const [details, setDetails] = useState([]);
  // TODO: use reducer/redux/context
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  }

  return (
    <section className="envoy-bot-container">
      <SideBar
        setActiveTab={setActiveTab}
        openModal={openModal}
        detailsNotif={details.length > 0}
      />
      <DetailsDisplay activeTab={activeTab} details={details}/>
      <Chat setDetails={setDetails}/>
      <Contact modal={modal} closeModal={closeModal}/>
    </section>
  )
};

export default EnvoyBot;
