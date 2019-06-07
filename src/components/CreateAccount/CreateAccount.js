import React from 'react';

import './CreateAccount.css';

export default class CreateAccount extends React.Component {


    render() {
        return (
            <div className="container create-form-container">
                <div className="card">
                    <form>
                        <div className="row">
                            <div className="red accent-2 header-create-form-container">
                                <h1 className="white-text">Create Account</h1>
                            </div>   
                        </div> 
                        <div className="create-form-input-container">
                            <input placeholder="Username" type="text" required="" />
                            <input placeholder="Password" type="password" required="" />
                            <div className="create-form-submit-btn">
                                <button className=" btn red accent-2">Submit</button>
                            </div>
                        </div>    
                    </form>
                </div>    
            </div> 
        )
    }
}