import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from "react";
import { useRef } from "react";

const Landing = ({ onEnvoyBotClick }) => {
  const landingContainer = useRef(null);

  const prepareUnmount = () => {
    landingContainer.current.classList.toggle("show");
    // TODO: If user clicks too fast listener will listen to first transitionend instead of the second
    landingContainer.current.addEventListener("transitionend", () => {
      onEnvoyBotClick();
    })
  };

  useEffect(() => {
    landingContainer.current.classList.toggle("show");
  });

  return (
    <section className="landing" ref={landingContainer}>
      <header className="nav-links">
        <div className="additional-buttons">
          <a
            href="https://achan.dev/resume/Andrew_Chan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFileAlt} size="lg"/>
          </a>
          <a
            href="https://github.com/dowinterfor6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithubSquare} size="lg"/>
          </a>
          <a
            href="https://linkedin.com/in/a-z-chan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg"/>
          </a>
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
              <button onClick={prepareUnmount}>Talk to my Envoy</button>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
};

export default Landing;