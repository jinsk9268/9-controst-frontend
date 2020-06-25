import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Partner from 'Pages/Partner/Partner';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component= {Main} />
          <Route exact path="/login" component= {Login} />
          <Route exact path="/partner" component= {Partner} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;