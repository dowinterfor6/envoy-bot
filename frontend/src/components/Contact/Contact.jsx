import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Contact = ({ modal, closeModal }) => {
  // TODO: Probably use nodemailer instead of mailto
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [sendConfirm, setSendConfirm] = useState(false);

  const mailtoAddress = "mailto:dowinterfor6@gmail.com";

  const handleSubjectChange = (e) => {
    setSendConfirm(false);
    setSubject(e.currentTarget.value);
  }

  const handleBodyChange = (e) => {
    setSendConfirm(false);
    setBody(e.currentTarget.value);
  }

  const handleSubmit = () => {
    if (!body || !subject) {
      alert("All fields must be filled before submitting!");
      setSendConfirm(false);
    } else {
      window.open(`${mailtoAddress}?subject=${subject}&body=${body}`);
    }
  }

  const handleCloseModal = () => {
    setSubject("");
    setBody("");
    closeModal();
  }

  return (
    <aside 
      className={`contact-modal ${modal ? "" : "hide"}`}
      onClick={handleCloseModal}
    >
      <div className="contact-container" onClick={(e) => e.stopPropagation()}>
        <form>
          <h2>Contact me</h2>
          <label className="subject-container">
            Subject:
            <input
              className="subject"
              type="text"
              onChange={handleSubjectChange}
              value={subject}
              required
            />
          </label>
          <label className="message-container">
            Message:
            <textarea
              className="message"
              onChange={handleBodyChange}
              value={body}
              required
            />
          </label>
          <div className="button-container">
            <button
              className={`send-button ${sendConfirm ? "hide" : ""}`}
              onClick={() => setSendConfirm(true)}
            >
              Send
            </button>
            <div className={`confirm-container ${sendConfirm ? "" : "hide"}`}>
              <label>
                Are you sure?
              </label>
              <div className="confirm-buttons-container">
                <button onClick={() => setSendConfirm(false)}>
                  <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>
                {/* <a
                  className="button"
                  href={`${mailtoAddress}?subject=${subject}&body=${body}`}
                > */}
                <button onClick={handleSubmit}>
                  <FontAwesomeIcon icon={faCheck} size="lg" />
                </button>
                {/* </a> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </aside>
  )
}

export default Contact;
