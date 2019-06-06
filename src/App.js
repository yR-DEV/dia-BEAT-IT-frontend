import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import M from 'materialize-css';

import Login from './components/Login/Login';
import RecordsContainer from './components/Records/RecordsContainer';
import JumboTron from './components/Jumbotron';
import Profile from './components/Profile/Profile';
import MetricsContainer from './components/Metrics/MetricsContainer';

import './App.css';

const RECORD_API = "http://localhost:3000/api/v1/blood_sugar_records"
const METRICS_API = "http://localhost:3000/api/v1/diabetes_metrics"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false,
      bloodSugarRecords: [],
      userProfileSettings: {}
    }
  }


  main = () => {
    console.log('main');
    fetch(RECORD_API)
      .then(response => response.json())
      .then(bloodSugarRecords => this.setState({ bloodSugarRecords }))

    fetch(METRICS_API)
      .then(response => response.json())
      .then(userProfileSettings => this.setState({ userProfileSettings }))
  }

  componentDidMount = () => {
    this.main();

    // M.AutoInit();
  }

  // renderLoginRedirect = () => {
  //   if(this.state.userLoggedIn) {
  //     return <Redirect to='/profile' />
  //   }
  // }

  render() {

    return (
      <div className="App">
        <Router>
          <nav>
            <div className="nav-wrapper">
              <a className="brand-logo left"></a>
              <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/records">Records</Link></li>
                <li><Link to="/metrics">Metrics</Link></li>
              </ul>
            </div>
          </nav>
          <ul className="sidenav" id="mobile-demo">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/records">Records</Link></li>
            <li><Link to="/metrics">Metrics</Link></li>
          </ul>

          <Route exact path="/" render={(props) => (
            <JumboTron />
            )}
          />  
          <Route path="/records" exact render={(props) => (
            <RecordsContainer 
              bloodSugarRecords={this.state.bloodSugarRecords}
            />  
          )}
          />
          <Route path="/profile" render={(props) => (
            <Profile 
              userProfileSettings={this.state.userProfileSettings[0]}
            />
            )}
          />  
          <Route path="/metrics" render={(props) => (
            <MetricsContainer />
            )}
          />  
        </Router>  
      </div>
    );
  }
}


{/* <Route 
            exact path="/" render={(props) => (
              <PromptContainer 
                writingPrompts={this.state.writing_prompts}
                displayedPrompts={this.state.displayed_prompts}
                handleMorePrompts={this.handleMorePrompts}
                setPrompt={this.setPrompt}
              />
            )}
          /> */}

// import React from 'react'
// import { Redirect } from 'react-router-dom'
// class MyComponent extends React.Component {
//   state = {
//     redirect: false
//   }
//   setRedirect = () => {
//     this.setState({
//       redirect: true
//     })
//   }
//   renderRedirect = () => {
//     if (this.state.redirect) {
//       return <Redirect to='/target' />
//     }
//   }
//   render () {
//     return (
//        <div>
//         {this.renderRedirect()}
//         <button onClick={this.setRedirect}>Redirect</button>
//        </div>
//     )
//   }
// }
