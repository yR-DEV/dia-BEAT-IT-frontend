import React from 'react';
import { connect } from 'react-redux';
import { getDiabetesProfile } from '../../actions/index';
import Profile from './Profile';
import ProfileForm from './ProfileForm';

var _ =  require('lodash');

const mapStateToProps = (state) => {
    return { userDiabetesProfile: state.userDiabetesProfile, userId: state.userId }
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
            <div className="profile-container">
                <div className="card ui-interface-backgrounds white-text">
                    { !this.state.isEditing && this.props.userDiabetesProfile &&
                        <div className="">
                            <br></br>
                            <br></br>

                            <div className="inner-profile-container">
                                <div className="row">
                                    <a className="waves-effect waves-light btn login-btn edit-profile-button" onClick={this.toggleEdit}>EDIT</a>
                                </div>
                                <Profile />
                                <br></br>
                                <br></br>
                            </div>
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
    { getDiabetesProfile }
) (ProfileContainer);