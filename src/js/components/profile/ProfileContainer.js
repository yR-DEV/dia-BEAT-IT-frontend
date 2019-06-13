import React from 'react';
import { connect } from 'react-redux';

import ProfileData from './ProfileData';

import { getDiabetesProfile } from '../../actions/index';

var _ =  require('lodash');

const mapStateToProps = (state) => {
    return { userDiabetesProfile: state.userDiabetesProfile }
};

const ProfileContainer = ({ userDiabetesProfile }) => {
    return (
        <div className="container">
            { !_.isEmpty(userDiabetesProfile) &&
                <div className="card">
                    <div className="row">
                        <div className="col s6">
                            <h3>{userDiabetesProfile[0].user.email}</h3>
                            <p>{userDiabetesProfile[0].personal_goal}</p>
                        </div>
                        <div className="col s6">
                            <div className="row">
                                <div className="col s2">
                                    <p>Target Range (low): </p>
                                    <p>{userDiabetesProfile[0].blood_sugar_target_low}</p>
                                </div>
                                <div className="col s2">
                                    <p>Target Range (high):</p>
                                    <p>{userDiabetesProfile[0].blood_sugar_target_high}</p>
                                </div>
                                <div className="col s2">
                                    <p>Height: </p>
                                    <p>{userDiabetesProfile[0].height}</p>
                                </div>
                                <div className="col s2">
                                    <p>Weight</p>
                                    <p>{userDiabetesProfile[0].weight}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s2">
                                    <p>Morning Insulin/Carb Ratio: </p>
                                    <p>{userDiabetesProfile[0].morning_insulin_to_carb_ratio} carbs/unit</p>
                                </div>
                                <div className="col s2">
                                    <p>Morning Lantus Units:</p>
                                    <p>{userDiabetesProfile[0].morning_lantus_units}</p>
                                </div>
                                <div className="col s2">
                                    <p>Night Insulin/Carb Ratio: </p>
                                    <p>{userDiabetesProfile[0].night_insulin_to_carb_ratio}</p>
                                </div>
                                <div className="col s2">
                                    <p>Noon Insulin/Carb Ratio:</p>
                                    <p>{userDiabetesProfile[0].noon_insulin_to_carb_ratio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <ProfileData />
        </div>
    )
}

export default connect (
    mapStateToProps,
    { getDiabetesProfile } 
) (ProfileContainer);

// a1c_goal: 7.5
// blood_sugar_target_high: 130
// blood_sugar_target_low: 80
// fast_insulin_brand: "Humalog"
// glucometer_brand: "OneTouch"
// height: 69
// id: 1
// long_insulin_brand: "Lantus"
// morning_insulin_to_carb_ratio: 10
// morning_lantus_units: 10
// night_insulin_to_carb_ratio: 10
// night_lantus_units: 0
// noon_insulin_to_carb_ratio: 10
// personal_goal: "to lower my a1c under 7.0 within the next year"
// user:
// created_at: "2019-06-13T17:28:04.984Z"
// email: "yrdev@protonmail.com"
// id: 1
// password_digest: "$2a$12$EiVmZGqUYdNckZY2OGiHdu5T9rZqmeYXAtM.EGzTGh3T74b9Z7wgS"
// updated_at: "2019-06-13T17:28:04.984Z"
// username: "YrDeV"
// __proto__: Object
// user_id: 1
// weight: 145
// weight_goal: 145