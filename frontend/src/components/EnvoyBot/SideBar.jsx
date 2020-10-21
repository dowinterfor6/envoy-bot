import { faArrowLeft, faInfo, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ setActiveTab }) => {
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

  return (
    <section className="side-bar">
      <ul className="side-bar-icons-list">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} size="lg"/>
          </Link>
        </li>
        <li 
          id="details"
          className={activeState.details ? "active" : ""}
          onClick={handleTabSelection}
        >
          <FontAwesomeIcon icon={faInfo} size="lg"/>
        </li>
        <li 
          id="help"
          className={activeState.help ? "active" : ""}
          onClick={handleTabSelection}
        >
          <FontAwesomeIcon icon={faQuestion} size="lg" />
        </li>
      </ul>
    </section>
  )
}

export default SideBar;