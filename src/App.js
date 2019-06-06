import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import M from 'materialize-css';

import Login from './components/Login/Login';
import RecordsContainer from './components/Records/RecordsContainer';


import './App.css';

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
  }

  componentDidMount = () => {
    this.main();

    M.AutoInit();
  }

  renderLoginRedirect = () => {
    if(this.state.userLoggedIn) {
      return <Redirect to='/profile' />
    }
  }

  render() {

    return (
      <div className="App">
        <Router>
          <nav>
            <div class="nav-wrapper">
              <a href="#!" class="brand-logo">Logo</a>
              <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
              <ul class="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
              </ul>
            </div>
          </nav>
          <ul class="sidenav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
          </ul>

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
