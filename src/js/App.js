import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import BetesNav from './components/navigation/Nav';
import RecordsContainer from './components/records/RecordsContainer';
import HomePage from './components/home_page/HomePage';
import ProfileContainer from './components/profile/ProfileContainer';
import Login from './components/login/Login';
import CreateAccount from './components/create_account/CreateAccount';
import MetricsContainer from './components/metrics/MetricsContainer';




import './App.css';
import { getBloodSugarRecords, getDiabetesProfile } from './actions';

const mapStateToProps = (state) => ({ state });

class App extends React.Component {

  componentDidMount = () => {
    this.props.getBloodSugarRecords();
    this.props.getDiabetesProfile();
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
              <BetesNav />
              <div className="main-container">
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

export default connect( mapStateToProps, { getBloodSugarRecords, getDiabetesProfile })(App)