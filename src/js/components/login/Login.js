import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

import './Login.css'

export default class Login extends React.Component {

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
                            <input placeholder="Username" type="text" required="" />
                            <input placeholder="Password" type="password" required="" />
                            <div className="login-form-submit-btn">
                                <button className=" btn red accent-2">Submit</button>
                            </div>
                        </div>    
                    </form>
                </div>    
            </div>  
        )
    }
}

