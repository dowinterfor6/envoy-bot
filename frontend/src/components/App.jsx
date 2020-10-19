import React, { useState } from 'react';
import EnvoyBot from './EnvoyBot/EnvoyBot';
import Landing from './Landing/Landing';

function App() {
  const [isLandingPage, setIsLandingPage] = useState(true);
  // TODO: temp, or don't be lazy and actually use routes
  // const [isLandingPage, setIsLandingPage] = useState(false);

  const navigateToEnvoyBot = () => {
    setIsLandingPage(false);
  }

  const envoyBotComponent = isLandingPage ? null : <EnvoyBot />;
  const landingComponent = isLandingPage ? <Landing onEnvoyBotClick={navigateToEnvoyBot}/> : null;

  return (
    <div className="app">
      {envoyBotComponent}
      {landingComponent}
    </div>
  );
}

export default App;
