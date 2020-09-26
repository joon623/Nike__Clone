import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenShoes from "./Pages/MenShoes/MenShoes";
import MenJordan from "./Pages/MenJordan/MenJordan";
import WomenShoes from "./Pages/WomenShoes/WomenShoes";
import WomenRunning from "./Pages/WomenRunning/WomenRunning";
import ItemDetail from "./Pages/ItemDetail/ItemDetail";
import Main from "./Pages/Main/Main";
import SignUp from "./Pages/SignUp/SignUp";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/MenShoes" component={MenShoes} />
          <Route exact path="/MenShoes/:id" component={ItemDetail} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
