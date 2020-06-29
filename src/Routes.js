import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "Pages/Main/Main";
import Login from "Pages/Login/Login";
import Nav from "Component/Nav/Nav";
import Partner from "Pages/Partner/Partner";
import Offline from "Pages/Offline/Offline";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/partner" component={Partner} />
          <Route exact path="/offline" component={Offline} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
