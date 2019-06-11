import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import './App.css';

import Nav from './components/navigation/Nav';
import RecordsContainer from './components/records/RecordsContainer';
import HomePage from './components/home_page/HomePage';

const RECORD_API = "http://localhost:3000/api/v1/blood_sugar_records"
const METRICS_API = "http://localhost:3000/api/v1/diabetes_metrics"


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
        </Router>        
      </div>
    );
  }
}

