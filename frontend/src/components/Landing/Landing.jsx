import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Landing = ({ onEnvoyBotClick }) => {
  return (
    <section className="landing">
      <header className="nav-links">
        <div className="additional-buttons">
          <a href="https://achan.dev/resume/Andrew_Chan_Resume.pdf" target="_blank"><FontAwesomeIcon icon={faFileAlt} size="lg"/></a>
          <a href="https://github.com/dowinterfor6" target="_blank"><FontAwesomeIcon icon={faGithubSquare} size="lg"/></a>
          <a href="https://linkedin.com/in/a-z-chan" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="lg"/></a>
        </div>
      </header>
      <section className="landing-container">
        <div className="landing-text-container">
          <h1 className="landing-header">
            Hello, I'm <em>Andrew Chan</em>
          </h1>
          <h2 className="landing-sub-header">
            Software Engineer based in San Francisco
          </h2>
          <div className="button-container">
            <div className="call-to-action">
              <button onClick={onEnvoyBotClick}>Talk to my Envoy</button>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
};

export default Landing;