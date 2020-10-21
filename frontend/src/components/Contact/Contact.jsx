import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = ({ modal, closeModal }) => {
  return (
    <aside 
      className={`contact-modal ${modal ? "" : "hide"}`}
      onClick={closeModal}
    >
      <div className="contact-container" onClick={(e) => e.stopPropagation()}>
        <form>
          <h2>Contact me</h2>
          <label className="from-container">
            From:
            <input className="from" type="text"/>
          </label>
          <label className="subject-container">
            Subject:
            <input className="subject" type="text"/>
          </label>
          <label className="message-container">
            Message:
            <textarea className="message"/>
          </label>
          <button type="submit">
            Send
          </button>
        </form>
      </div>
    </aside>
  )
}

export default Contact;
