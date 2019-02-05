import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback} from '@okta/okta-react';

import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import Weather from './components/pages/Weather';
import Login from './components/auth/Login';

function onAuthRequired({ history }) {
  history.push('/login');
}
class App extends Component {

  render() {
    const config = {
      issuer : 'https://dev-939144.okta.com/oauth2/default',
      client_id : '0oa9zsc20sLfPHroI356',
      redirect_uri : 'http://localhost:3000/implicit/callback',
      baseUrl : 'https://dev-939144.okta.com'
    }
    return (
      <Router>
        <Security issuer={config.issuer}
                  client_id={config.client_id}
                  redirect_uri={config.redirect_uri} 
                  onAuthRequired={onAuthRequired}>
          <div className="App">
            <Navbar></Navbar>
            <div className="container">
              <Route path="/" exact={true} component={Home} ></Route>
              <SecureRoute path="/weather" exact={true} component={Weather} ></SecureRoute>
              <Route path='/login' render={() => <Login baseUrl={config.baseUrl} />} />
              <Route path='/implicit/callback' component={ImplicitCallback} />
            </div>
          </div>
        </Security>
      </Router>
      
    );
  }
}

export default App;
