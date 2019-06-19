import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Redirect, Link, Router, Route } from 'react-router-dom';

import { userLogin } from '../../actions/index';

import './Login.css'
import { log } from 'util';

const mapDispatchToProps = (dispatch) => {
    return { userLogin: login => dispatch(userLogin(login)) };
}

const mapStateToProps = (state) => {
    return { redirect: state.redirect }
}

export class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            id: 0,
            redirect: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        event.persist();
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        this.props.userLogin({ email, password })
        this.setState({ email: '', password: '', redirect: !this.state.redirect });
    }


    render() {
        return (
            <div className="container">
                <div className="card login-form-container">
                        <div className="row">
                            <div className="green accent-4 header-login-form-container">
                            <h1 className="white-text">Login</h1>
                            </div>   
                        </div> 
                        <div className="login-form-input-container">
                            <input className="white-text" placeholder="Email" name="email" type="text" required="" onChange={this.handleChange} />
                            <input className="white-text" placeholder="Password" name="password" type="password" required="" onChange={this.handleChange} />
                            <div className="login-form-submit-btn">
                                <div className="row">
                                    <div className="col s6">
                                        <button className=" btn green accent-4" onClick={this.handleSubmit}>Submit</button>
                                    </div>
                                    <div className="col s6">
                                    <Link to="/"><button className="waves-effect waves-light btn green accent-4 root-url-btn">Home</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>    
                </div>    
            </div>  
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
