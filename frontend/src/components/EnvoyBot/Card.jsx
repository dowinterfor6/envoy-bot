import React from 'react';

const Card = ({ payload, type }) => {
  let displayComponent;

  // TODO: Do this but better
  // If project
  if (type === "project") {
    const { title, summary, url, keywords } = payload;
    displayComponent = (
      <div className="card-container">
        <div className="card-header-link">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </div>
        <p className="card-content">{summary}</p>
        <ul className="card-keywords">
          {keywords.map((keyword, idx) => (
            <li key={`keyword-${idx}`}>
              {keyword}
            </li>
          ))}
        </ul>
      </div>
    )
  } else if (type === "help") {
    const { title, res } = payload;
    displayComponent = (
      <div className="card-container help">
        <div className="card-header-link">
          {title}
        </div>
        <ul className="card-list">
          {res.map((text, idx) => (
            <li key={`text-${idx}`}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    )
  } else if (type === "skills") {
    // TODO: Currently assuming skills has just one field
    const { skills, projects } = payload;
    const { keywords } = skills[0];

    displayComponent = (
      <div className="card-container skills">
        <ul className="card-list">
          {keywords.map((text, idx) => (
            // TODO: On hover show projects that use skill?
            <li className="skill-list" key={`text-${idx}`}>
              {text}
              <ul className="projects">
                {projects.map(({ title, url, keywords }, idx) => {
                  let listEl;
                  if (keywords.includes(text)) {
                    listEl = (
                      <li key={`project-${idx}`}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {title}
                        </a>
                      </li>
                    )
                  }
                  return listEl;
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return displayComponent;
}

export default Card;
