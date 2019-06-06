import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import M from 'materialize-css';

import Login from './components/Login/Login';
import RecordsContainer from './components/Records/RecordsContainer';

import './App.css';

const RECORD_API = "http://localhost:3000/api/v1/blood_sugar_records"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false,
      bloodSugarRecords: []
    }
  }


  main = () => {
    console.log('main');
    fetch(RECORD_API)
      .then(response => response.json())
      .then(bloodSugarRecords => this.setState({ bloodSugarRecords }))
  }

  componentDidMount = () => {
    this.main();

    M.AutoInit();
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
              <a href="#!" className="brand-logo">Logo</a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
              </ul>
            </div>
          </nav>
          <ul className="sidenav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
          </ul>
          <div className="container">
            <RecordsContainer 
              bloodSugarRecords={this.state.bloodSugarRecords}
            />
          </div>
        </Router>  
      </div>
    );
  }
}


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
