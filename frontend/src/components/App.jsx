import React from 'react';
import EnvoyBot from './EnvoyBot/EnvoyBot';
import Landing from './Landing/Landing';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/envoy-bot" component={EnvoyBot} />
          <Route path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
