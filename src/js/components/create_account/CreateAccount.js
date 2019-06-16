import React from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';

import { createLogin } from '../../actions/index';

import './CreateAccount.css';

function mapDispatchToProps(dispatch) {
    return { createLogin: login => dispatch(createLogin(login)) };
}

export default class CreateAccount extends React.Component {
    
    constructor() {
        super();
        this.state = {
            email: "",
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        event.persist();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const id = uuidv1();
        const { email, username, password } = this.state;
        this.props.createLogin({ email, username, password });
        this.setState({ email: '', username: '', password: '' });
    }

    render() {
        return (
            <div className="container create-form-container">
                <div className="card">
                    <form>
                        <div className="row">
                            <div className="green accent-4 header-create-form-container">
                                <h1 className="white-text">Create Account</h1>
                            </div>   
                        </div> 
                        <div className="create-form-input-container">
                            <input placeholder="Email" type="email" required="" />
                            <input placeholder="Username" type="text" required="" />
                            <input placeholder="Password" type="password" required="" />
                            <div className="create-form-submit-btn">
                                <button className=" btn green accent-4">Submit</button>
                            </div>
                        </div>    
                    </form>
                </div>    
            </div> 
        )
    }
}