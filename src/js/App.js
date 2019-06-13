import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';

import Nav from './components/navigation/Nav';
import RecordsContainer from './components/records/RecordsContainer';
import HomePage from './components/home_page/HomePage';
import ProfileContainer from './components/profile/ProfileContainer';
import Login from './components/login/Login';
import CreateAccount from './components/create_account/CreateAccount';
import MetricsContainer from './components/metrics/MetricsContainer';

import './App.css';

export default class App extends React.Component {
  

  render() {
    return (
      <div className="App">
        <Router>
          <Nav />

            <Route exact path="/" 
              render={() => (
                <HomePage />
              )}
            />
            <Route path="/records" 
              render={() => (
                <RecordsContainer />
              )}
            />
            <Route path="/profile"
              render={() => (
                <ProfileContainer />
              )}
            />
            <Route path="/metrics"
              render={() => (
                <MetricsContainer />
              )}
            />
            <Route path="/login"
              render={() => (
                <Login />
              )}
            />
            <Route path="/create-account"
              render={() => (
                <CreateAccount />
              )}
            />
        </Router>        
      </div>
    );
  }
}

