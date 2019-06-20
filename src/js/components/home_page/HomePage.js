import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="section no-pad-bot" id="index-banner">
              <div className="container">
                <br></br>
                <h1 className="header center homepage-title-h1">dia-BEAT-IT</h1>
                <div className="row center">
                  <h4 className="header col s12 light white-text">Because together, we can dia-beat-this.</h4>
                </div>
                <div className="row center">
                  <div><Link className="white-text btn-large waves-effect waves-light icon-color-homepage homepage-buttons white-text" to="/login">Login!</Link></div>
                </div>
                <br></br>
              </div>
            </div>
            <div className="row">
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center icon-color-homepage"><i className="material-icons homepage-icons">show_chart</i></h2>
              <h5 className="center white-text">Keep Track of All of Your Blood Sugars in One Place</h5>
              <p className="light white-text">Record blood sugars 8 times (or less) a day and have that data dynamically mapped onto interactive charts. See when you are over/under target low/high readings.</p>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center icon-color-homepage"><i className="material-icons homepage-icons">speaker_notes</i></h2>
              <h5 className="center white-text">Analyze Metadata Trends in Blood Sugars Over Time</h5>
              <p className="light white-text">View graphs of your recorded blood sugars as well as averages for each time of day and get a better understanding of your body and Diabetes.</p>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center icon-color-homepage"><i className="material-icons homepage-icons">insert_emoticon</i></h2>
              <h5 className="center white-text">Make Informed Changes in Daily Insulin Delivery</h5>
              <p className="light white-text">Based on the trends that you observe, make important (and often quality of life increases) changes to temporal insulin delivery, amounts administered, and others.</p>
            </div>
          </div>
        </div>
        </div>
        <footer className="page-footer homepage-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Bio</h5>
                <p className="grey-text text-lighten-4">I am a type 1 diabetic and a student, which means I have no income and very limited health insurance. Insulin pumps allow for the extraction of Blood Sugar data in firmware, but I do not have the income nor luxury to have an insulin pump, so I made this application to help me in the meantime.</p>
              </div>
              <div className="col l6 s12">
                <h5 className="white-text">Contact/More By:</h5>
                <ul>
                  <li><a className="white-text" href="www.linkedin.com/in/zclaar">LinkedIn</a></li>
                  <li><a className="white-text" href="https://medium.com/better-programming/so-i-wrote-a-py-web-scraper-that-sends-me-scpt-text-messages-about-job-postings-34ffef9a1128">Publication</a></li>
                  <li><a className="white-text" href="www.github.com/yR-DEV">Github</a></li>
                  <li><a className="white-text">claar.zack@gmail.com</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            <a className="orange-text text-lighten-3" href="http://github.com/yR-DEV">My GitHub</a>
            </div>
          </div>
        </footer>
      </div> 
    );
  }
}

export default HomePage;      
