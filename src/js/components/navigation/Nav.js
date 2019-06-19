import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';

import { userLogout } from '../../actions/index';

import './Nav.css'

class Nav extends React.Component {
    constructor() {
        super();
    }

    removeLocalStorage = () => {
        localStorage.removeItem("auth_key");
    }

    render() {
        return (
            <div className="nav-container">
                <div className="row">
                    <nav id="main-navbar" className="navbar bg-transparent fixed-top navbar-expand-lg navbar-dark">
                        <ul class="right hide-on-med-and-down">
                        <li ><Link className="ghost-button" to="/profile">Profile</Link></li>
                        <li ><Link className="ghost-button" to="/records">Records</Link></li>
                        <li ><Link className="ghost-button" to="/metrics">Metrics</Link></li>
                        <li ><Link onClick={this.removeLocalStorage}className="ghost-button" to="/logout">Logout</Link></li>
                        </ul>
                    </nav>
                </div>    
            </div>    
        )
    }
}

export default connect(null, { userLogout })(Nav);
{/* <nav>
                    <div className="nav-wrapper green accent-4">
                    <a className="brand-logo left"></a>
                    <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/records">Records</Link></li>
                        <li><Link to="/metrics">Metrics</Link></li>
                        <button className="btn grey logout-btn" onClick={this.props.userLogout}>Signout</button>
                    </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/records">Records</Link></li>
                    <li><Link to="/metrics">Metrics</Link></li>
                </ul> */}