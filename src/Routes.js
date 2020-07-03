import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Nav from "Component/Nav/Nav";
import Main from "Pages/Main/Main";
import Login from "Pages/Login/Login";
import Signup from "Pages/SignUp/Signup";
import SignIn from "Pages/SignIn/SignIn";
import Partner from "Pages/Partner/Partner";
import Offline from "Pages/Offline/Offline";
import PartnerProfile from "Pages/Partner/PartnerProfile";


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/partner" component={Partner} />
          <Route exact path="/partner/profile" component={PartnerProfile} />
          <Route exact path="/offline" component={Offline} />
          <Route exact path="/offline/:id" component={Offline} />
          <Route exact path="/partner/profile/:id" component={PartnerProfile} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
