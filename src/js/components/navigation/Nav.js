import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';



const Nav = () => {

    return (
        <div className="nav-container">
            <nav>
                <div className="nav-wrapper green accent-4">
                <a className="brand-logo left"></a>
                <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    {/* <li><Link to="/">Home</Link></li> */}
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/records">Records</Link></li>
                    <li><Link to="/metrics">Metrics</Link></li>
                    {/* <li><Link to="/login">Login</Link></li> */}
                    {/* <div className="logout-btn-container"> */}
                        <button className="btn grey logout-btn">Signout</button>
                    {/* </div> */}
                </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                {/* <li><Link to="/">Home</Link></li> */}
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/records">Records</Link></li>
                <li><Link to="/metrics">Metrics</Link></li>
                {/* <li><Link to="/login">Login</Link></li> */}
            </ul>
        </div>    
    )
}

export default Nav;