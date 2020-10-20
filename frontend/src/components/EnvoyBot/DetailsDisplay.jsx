import React from 'react';

const DetailsDisplay = ({ activeTab }) => {
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

  const helpContent = [
    {
      title: "What can Envoy Bot do?",
      res: [
        "Respond to basic questions about Andrew in his place (as if I am Andrew)",
        "Provide a concise answer in chat, and a detailed answer (if applicable) in the bookmarks tab",
        "Help you get to know me better"
      ]
    },
    {
      title: "How does Envoy Bot work?",
      res: [
        "I listen to specific key words and try my best to provide an appropriate response",
      ]
    }
  ]

  let contentToDisplay;
  if (activeTab === "help") {
    contentToDisplay = helpContent;
  } else {
    contentToDisplay = [];
  };

  return (
    <section className="details-display">
      <div className="details-display-header">
        <h1>
          {activeTab}
        </h1>
      </div>
      <div className="details-display-content">
        <ul className="content-list">
          {contentToDisplay.map(({ title, res, startDate, endDate }, idx) => {
            if (activeTab === "help") {
              return (
                <li className="parent-box" key={`${title}-${idx}`}>
                  <h3>
                    {title}
                  </h3>
                  <ul>
                    {res.map((data, idx2) => (
                      <li key={`${idx}-${idx2}`}>
                        {data}
                      </li>
                    ))}
                  </ul>
                </li>
              )
            } else {

            }
          })}
        </ul>
      </div>
    </section>
  )
}

export default DetailsDisplay;