import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


const jumbotronStyle = {
  paddingBottom: '150px',
  boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
}

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron-container">
          <div className="card-panel grey lighten-2" style={jumbotronStyle}>
              <div className="container">
                  <h1>DIABETUS!</h1>
                  <h3>Let's Dia Beat This</h3>
                  <a><img className="jumbotron-logo" src="https://smallimg.pngkey.com/png/small/71-719828_the-awesome-smiley-face-by-thevideogameguy-d5atcdm-awesome.png"/></a>
                  <div className="container login-btn-container">
                      <div className="row">
                          <Link to="/login"><a className="waves-effect waves-light btn-large red accent-2 root-url-btn">Login</a></Link>
                          <Link to="/create-account"><a className="waves-effect waves-light btn-large red accent-2 root-url-btn">Create Account</a></Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>        
    );
  }
}

export default HomePage;