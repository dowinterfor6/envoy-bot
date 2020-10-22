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
  const [mobileDetails, setMobileDetails] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const closeMobileDetails = () => {
    setMobileDetails(false);
  }

  const openMobileDetails = () => {
    setMobileDetails(true);
  }

  return (
    <section className={`envoy-bot-container ${mobileDetails ? "show-details" : ""}`}>
      <SideBar
        setActiveTab={setActiveTab}
        openModal={openModal}
        detailsNotif={details.length > 0}
        mobileDetails={mobileDetails}
        openMobileDetails={openMobileDetails}
        closeMobileDetails={closeMobileDetails}
      />
      <DetailsDisplay activeTab={activeTab} details={details}/>
      <Chat setDetails={setDetails}/>
      <Contact modal={modal} closeModal={closeModal}/>
    </section>
  )
};

export default EnvoyBot;
