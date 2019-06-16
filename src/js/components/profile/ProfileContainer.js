import React from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';
import ProfileForm from './ProfileForm';

var _ =  require('lodash');

const mapStateToProps = (state) => {
    return { userDiabetesProfile: state.userDiabetesProfile }
};

export class ProfileContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            isEditing: false,
        };
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit = (event) => {
        this.setState({ isEditing: !this.state.isEditing })
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    { !this.state.isEditing &&
                        <div className="container">
                            <a className="waves-effect waves-light btn red accent-2" onClick={this.toggleEdit}>EDIT</a>
                            <Profile />
                        </div>
                    }
                    { this.state.isEditing &&
                        <ProfileForm toggleEdit={this.toggleEdit}/>
                    }
                </div>
            </div>
        )
    }
}



export default connect (
    mapStateToProps,
    null
) (ProfileContainer);