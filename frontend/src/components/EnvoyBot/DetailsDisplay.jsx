import React, { useEffect, useRef } from 'react';
import Card from './Card';

const DetailsDisplay = ({ activeTab, details }) => {
  const detailsContentRef = useRef();
  /* 
    Summary Format:
    Cat title
    Start date - end date
    Bullet pointed summary
  */

  /*
    Help format:
    Tip title
    Tips
  */
  useEffect(() => {
    // TODO: this is hardcoded refactor pls
    detailsContentRef.current.style.maxHeight = `${document.body.clientHeight - 75}px`;
  }, []);

  const helpContent = [
    {
      title: "What can Envoy Bot do?",
      type: "help",
      res: [
        "Respond to basic questions about Andrew in his place (as if I am Andrew)",
        "Provide a concise answer in chat, and a detailed answer (if applicable) in the bookmarks tab",
        "Help you get to know me better"
      ]
    },
    {
      title: "How does Envoy Bot work?",
      type: "help",
      res: [
        "I listen to specific key words and try my best to provide an appropriate response",
      ]
    }
  ]

  const noDetails = (
    <li className="no-details">
      Looks like you haven't asked anything that has additional details... 
      Try asking about projects or skills!
    </li>
  )

  let contentToDisplay;
  if (activeTab === "help") {
    contentToDisplay = helpContent.map(({ title, res, type }, idx) => {
      return (
        <li className="parent-box card" key={`help-${idx}`}>
          <Card payload={{ title, res }} type={type} />
        </li>
      )
    });
  } else {
    if (details.length !== 0) {
      contentToDisplay = details.map(({ payload, type }, idx) => {
        return (
          // Map for skills?
          <li className="parent-box card" key={`details-${idx}`}>
            <Card payload={payload} type={type} />
          </li>
        )
      })
    } else {
      contentToDisplay = noDetails;
    }
  };

  return (
    <section className="details-display">
      <div className="details-display-header">
        <h1>
          {activeTab}
        </h1>
      </div>
      <div className="details-display-content" ref={detailsContentRef}>
        <ul className="content-list">
          {contentToDisplay}
        </ul>
      </div>
    </section>
  )
}

export default DetailsDisplay;