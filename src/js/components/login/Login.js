import React from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid'

import { userLogin } from '../../actions/index';

import { BrowserRouter as Link } from 'react-router-dom';

import './Login.css'
import { log } from 'util';

function mapDispatchToProps(dispatch) {
    return { userLogin: login => dispatch(userLogin(login)) };
}

export class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
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
        const id = uuidv1();
        const { email, password } = this.state;
        this.props.userLogin({ email, password });
        this.setState({ email: '', password: '' });
    }

    render() {
        return (
            <div className="container login-form-container">
                <div className="card">
                    <form>
                        <div className="row">
                            <div className="red accent-2 header-login-form-container">
                            <h1 className="white-text">Login</h1>
                            </div>   
                        </div> 
                        <div className="login-form-input-container">
                            {/* <input placeholder="Username" name="username" type="text" required="" /> */}
                            <input placeholder="Email" name="email" type="text" required="" onChange={this.handleChange} />
                            <input placeholder="Password" name="password" type="password" required="" onChange={this.handleChange} />
                            <div className="login-form-submit-btn">
                                <button className=" btn red accent-2" onClick={this.handleSubmit}>Submit</button>
                            </div>
                        </div>    
                    </form>
                </div>    
            </div>  
        )
    }
}

const LoginForm = connect(null, mapDispatchToProps)(Login)
export default LoginForm;