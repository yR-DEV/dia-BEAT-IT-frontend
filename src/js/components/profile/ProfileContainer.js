import React from 'react';
import { connect } from 'react-redux';

import ProfileData from './ProfileData';

import { getDiabetesProfile } from '../../actions/index';

const mapStateToProps = (state) => {
    return { userProfileSettings: state.userProfileSettings }
};

const ProfileContainer = ({ userProfileSettings }) => {
    return (
        <div>
            profile
            <ProfileData />
        </div>
    )
}

export default connect (
    mapStateToProps,
    { getDiabetesProfile } 
) (ProfileContainer);