import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import M from 'materialize-css';

import Login from './components/Login/Login';
import RecordsContainer from './components/Records/RecordsContainer';
import JumboTron from './components/Jumbotron';
import Profile from './components/Profile/Profile';
import MetricsContainer from './components/Metrics/MetricsContainer';
import CreateAccount from './components/CreateAccount/CreateAccount';

import './App.css';

const RECORD_API = "http://localhost:3000/api/v1/blood_sugar_records"
const METRICS_API = "http://localhost:3000/api/v1/diabetes_metrics"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: true,
      user_id: 1,
      bloodSugarRecords: [],
      userProfileSettings: {}
    }
  }


  main = () => {
    this.componentDidMount();
  }

  // mainGetRecords = () => {
  //   fetch(RECORD_API)
  //     .then(response => response.json())
  //     .then(bloodSugarRecords => this.setState({ bloodSugarRecords }))
  //     .then(res => this.mainGetMetrics())
  // }

  // mainGetMetrics = () => {
  //   fetch(METRICS_API)
  //   .then(response => response.json())
  //   .then(userProfileSettings => this.setState({ userProfileSettings }))
  // }

  async componentDidMount() {
    try {
      const recordResponse = await fetch(RECORD_API);
      const settingsResponse = await fetch(METRICS_API);
      if (!recordResponse.ok || !settingsResponse.ok) {
        throw Error(recordResponse.text || settingsResponse.text)
      }
      const bloodSugarRecords = await recordResponse.json();
      const userProfileSettings = await settingsResponse.json();
      this.setState({ bloodSugarRecords, userProfileSettings });
    } catch(error) {
      console.log(error);
    }
    // this.main();
    // M.AutoInit();
    // fetch(RECORD_API)
    //   .then(response => response.json())
    //   .then(bloodSugarRecords => this.setState({ bloodSugarRecords }))
    //   .then(res => fetch(METRICS_API))
    //     .then(response => response.json())
    //     .then(userProfileSettings => this.setState({ userProfileSettings }))

  }

  addUserIdToBody = (record) => {
    return { ...record, user_id: this.state.user_id }
  }

  handleNewBloodSugarRecord = (record) => {
    let body = this.addUserIdToBody(record); 
    fetch(RECORD_API, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }).then(res => this.main())
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
            <div className="nav-wrapper red accent-2">
              <a className="brand-logo left"></a>
              <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/records">Records</Link></li>
                <li><Link to="/metrics">Metrics</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </div>
          </nav>
          <ul className="sidenav" id="mobile-demo">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/records">Records</Link></li>
            <li><Link to="/metrics">Metrics</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>

          <Route exact path="/" render={(props) => (
            <JumboTron />
            )}
          />  
          <Route exact path="/login" render={(props) => (
              <Login 
              />
            )}
          />  
          <Route path="/records" exact render={(props) => (
            <RecordsContainer 
              bloodSugarRecords={this.state.bloodSugarRecords}
              handleNewBloodSugarRecord={this.handleNewBloodSugarRecord}
            />  
          )}
          />
          <Route path="/profile" render={(props) => (
            <Profile 
              userProfileSettings={this.state.userProfileSettings}
            />
            )}
          />  
          <Route path="/metrics" render={(props) => (
            this.state.bloodSugarRecords.length > 0 &&
              <MetricsContainer 
                bloodSugarRecords={this.state.bloodSugarRecords}
            />
            )}
          />  
          <Route exact path="/create-account" render={(props) => (
            <CreateAccount />
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
