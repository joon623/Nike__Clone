import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenShoes from "./Pages/MenShoes/MenShoes";
import ItemDetail from "./Pages/ItemDetail/ItemDetail";
import Main from "./Pages/Main/Main";
import SignUp from "./Pages/SignUp/SignUp";
import Cart from "./Components/Cart/Cart";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/MenShoes" component={MenShoes} />
          <Route exact path="/MenShoes/:id" component={ItemDetail} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
