import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
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

  // Conditional rendering whether or not user is logged in
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" 
                  render={() => (
                    <HomePage />
                  )}
                />
              <div>
              { this.props.state.loggedIn ? (
                <BetesNav />
              ) : (
                <div></div>
              )}  
              <div className="main-container">
                <Route path="/records" 
                  render={() => (
                    this.props.state.loggedIn ? (
                      <RecordsContainer />
                    ) : (
                      <Redirect to='/' />
                    )
                  )}
                />
                <Route path="/profile"
                  render={() => (
                    this.props.state.loggedIn ? (
                      <ProfileContainer />
                    ) : (
                      <Redirect to="/" />
                    )
                  )}
                />
                <Route path="/metrics"
                  render={() => (
                    this.props.state.loggedIn ? (
                      <MetricsContainer />
                    ) : (
                      <Redirect to="/" />
                    )
                  )}
                />
                <Route path="/logout" 
                  render={() => (
                    <Redirect to='/' />
                  )}
                />
              </div>
              </div>
           
            <div>
             <Route path="/login"
              render={() => (
                this.props.state.loggedIn ? (
                  <Redirect to="/records" />
                ) : (
                  <Login />
                )
               )}
             />
             <Route path="/create-account"
               render={() => (
                 this.props.state.loggedIn ? (
                   <Redirect to="/records" />
                 ) : (
                   <CreateAccount />
                 )
               )}
             />
           </div>
        </Router>        
      </div>
    );
  }
}

export default connect( mapStateToProps, { getBloodSugarRecords, getDiabetesProfile })(App)