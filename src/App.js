import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page404 from './Components/Page404/Page404';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" name="home" component={Routes} />
          {/* <Route path="*" component={Page404} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
