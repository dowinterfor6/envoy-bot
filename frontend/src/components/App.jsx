import React from 'react';
import EnvoyBot from './EnvoyBot/EnvoyBot';
import Landing from './Landing/Landing';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Switch>
          <Route path="/envoy-bot" component={EnvoyBot} />
          <Route path="/" component={Landing} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
