import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";

const Landing = () => {
  const landingContainer = useRef(null);

  useEffect(() => {
    landingContainer.current.classList.toggle("show");
  });

  return (
    <section className="landing" ref={landingContainer}>
      <NavBar />
      <section className="landing-container">
        <div className="landing-text-container">
          <h1 className="landing-header">
            Hello, I'm <em>Andrew Chan</em>
          </h1>
          <h2 className="landing-sub-header">
            Software Engineer based in San Francisco
          </h2>
          <h3 className="landing-description">
            While I may not be available to answer your questions immediately,
            you can try talking to my envoy, Envoy Bot!
          </h3>
          <div className="button-container">
            <div className="call-to-action">
              <Link className="button" to="/envoy-bot">Talk to my envoy</Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
};

export default Landing;