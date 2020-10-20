import React from 'react';

const NavBar = () => {

  return (
    <header className="nav-links">
      <section className="nav-links-left">
        <h3>
          
        </h3>
      </section>
      <section className="nav-links-right">
        <ul>
          <li>
            <a
              href="https://achan.dev/resume/Andrew_Chan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dowinterfor6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/a-z-chan"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </header>
  )
}

export default NavBar;
