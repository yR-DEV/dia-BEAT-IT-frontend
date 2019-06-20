import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';

import { userLogout } from '../../actions/index';

import './Nav.css'

const mapDispatchToProps = (dispatch) => {
    return { userLogout: () => dispatch(userLogout()) };
}

class Nav extends React.Component {
    constructor() {
        super();
    }

    removeLocalStorage = () => {
        this.props.userLogout();
    }

    render() {
        return (
            <div className="nav-container">
                <div className="row">
                    <nav id="main-navbar" className="navbar bg-transparent fixed-top navbar-expand-lg navbar-dark">
                        <ul className="right">
                        <li ><Link className=" waves-effect waves-light btn grey darken-3" to="/profile">Profile</Link></li>
                        <li ><Link className=" waves-effect waves-light btn grey darken-3" to="/records">Records</Link></li>
                        <li ><Link className=" waves-effect waves-light btn grey darken-3" to="/metrics">Metrics</Link></li>
                        <li ><Link onClick={this.removeLocalStorage} className=" waves-effect waves-light btn grey darken-3" to="/logout">Logout</Link></li>
                        </ul>
                        <ul className="left">
                            <div className="navbar-title-container">
                                <li ><Link className="waves-effect waves-light btn grey darken-3" to="/">dia-BEAT-IT</Link></li>
                            </div>
                        </ul>
                    </nav>
                </div>    
            </div>    
        )
    }
}

export default connect(null, mapDispatchToProps)(Nav);