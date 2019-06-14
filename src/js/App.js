import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from './components/navigation/Nav';
import RecordsContainer from './components/records/RecordsContainer';
import HomePage from './components/home_page/HomePage';
import ProfileContainer from './components/profile/ProfileContainer';
import Login from './components/login/Login';
import CreateAccount from './components/create_account/CreateAccount';
import MetricsContainer from './components/metrics/MetricsContainer';

import './App.css';
import { getBloodSugarRecords } from './actions';

const mapStateToProps = (state) => ({ state });

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     userId: 0,
  //     loggedIn: false
  //   }
  // }
  
  componentDidMount() {
        // this.props.getBloodSugarRecords();
    }

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" 
                  render={() => (
                    <HomePage />
                  )}
                />
            { this.props.state.loggedIn && 
              <div>
              <Nav />
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
              </div>
            }
           { !this.props.state.loggedIn &&
            <div>
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
           </div>
           } 
        </Router>        
      </div>
    );
  }
}

export default connect( mapStateToProps, getBloodSugarRecords)(App)