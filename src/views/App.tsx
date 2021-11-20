import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import Home from './environments/Home';

const App: React.VFC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact strict from="/" to="/cra-app" />
        <Route path="/cra-app">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
