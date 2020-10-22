import { faArrowLeft, faEnvelopeOpen, faExclamationCircle, faHome, faInfo, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ setActiveTab, openModal, detailsNotif, openMobileDetails, closeMobileDetails, mobileDetails }) => {
  // TODO: maybe do this in redux/use reducer if i wasn't so lazy
  const [activeState, setActiveState] = useState({
    details: false,
    help: true,
  });

  const inactiveState = {
    details: false,
    help: false,
  }

  const handleTabSelection = (e) => {
    const activeTabName = e.currentTarget.id;
    let newState = inactiveState;
    newState[activeTabName] = true;
    setActiveTab(activeTabName);
    setActiveState(newState);
  }

  let notifDisplay = false;
  if (!activeState.details && detailsNotif) {
    notifDisplay = true;
  }

  let backButtonComponent;
  if (mobileDetails) {
    backButtonComponent = (
      <li>
        <FontAwesomeIcon icon={faArrowLeft} size="lg" onClick={closeMobileDetails}/>
      </li>
    )
  } else {
    backButtonComponent = (
      <li>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} size="lg"/>
        </Link>
      </li>
    )
  }

  return (
    <section className="side-bar">
      <ul className="side-bar-icons-list">
        {backButtonComponent}
        <li 
          id="details"
          className={activeState.details ? "active" : ""}
          onClick={handleTabSelection}
        >
          <div className={`details-notif ${notifDisplay ? "" : "hide"}`}>
            <FontAwesomeIcon icon={faExclamationCircle} onClick={openMobileDetails}/>
          </div>
          <FontAwesomeIcon icon={faInfo} size="lg"/>
        </li>
        <li 
          id="help"
          className={activeState.help ? "active" : ""}
          onClick={handleTabSelection}
        >
          <FontAwesomeIcon icon={faQuestion} size="lg" onClick={openMobileDetails}/>
        </li>
        <li 
          id="email"
          onClick={openModal}
        >
          <FontAwesomeIcon icon={faEnvelopeOpen} size="lg" />
        </li>
      </ul>
    </section>
  )
}

export default SideBar;