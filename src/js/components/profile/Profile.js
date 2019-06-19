import React from 'react';
import { connect } from 'react-redux';
import './Profile.css'

var _ = require('lodash');

const mapStateToProps = (state) => {
    return { userDiabetesProfile: state.userDiabetesProfile }
};

const Profile = ({ userDiabetesProfile }) => {

        return (
            <div className="">
            { !_.isEmpty(userDiabetesProfile) && userDiabetesProfile.user !== undefined &&
                <div className="">
                        <div className="row">
                            <h3>{userDiabetesProfile.user.email}</h3>
                            <p>{userDiabetesProfile.personal_goal}</p>
                        </div>
                        <div className="row">
                                <div className="col s4">
                                    <p>Morning Insulin/Carb Ratio: </p>
                                    <p>{userDiabetesProfile.morning_insulin_to_carb_ratio} carbs/unit</p>
                                </div>
                                <div className="col s4">
                                    <p>Afternoon Insulin/Carb Ratio: </p>
                                    <p>{userDiabetesProfile.night_insulin_to_carb_ratio} carbs/unit</p>
                                </div>
                                <div className="col s4">
                                    <p>Lantus Units:</p>
                                    <p>{userDiabetesProfile.lantus_units}</p>
                                </div>
                        </div>
                        <div className="row">
                                <div className="col s4">
                                    <p>Target Range (low): </p>
                                    <p>{userDiabetesProfile.blood_sugar_target_low}</p>
                                </div>
                                <div className="col s4">
                                    <p>Target Range (high):</p>
                                    <p>{userDiabetesProfile.blood_sugar_target_high}</p>
                                </div>
                                <div className="col s4">
                                    <p>A1C Goal: </p>
                                    <p>{userDiabetesProfile.a1c_goal}</p>
                                </div>
                        </div>
                        <div className="row">        
                                <div className="col s4">
                                    <p>Height: </p>
                                    <p>{userDiabetesProfile.height}</p>
                                </div>
                                <div className="col s4">
                                    <p>Weight:</p>
                                    <p>{userDiabetesProfile.weight}</p>

                                </div>
                                <div className="col s4">
                                <a><img className="profile-logo" src="https://smallimg.pngkey.com/png/small/71-719828_the-awesome-smiley-face-by-thevideogameguy-d5atcdm-awesome.png"/></a>


                                </div>
                        </div>
                </div>
            }
        </div>
        )
}

export default connect(mapStateToProps, null)(Profile)

// :height, :weight, :blood_sugar_target_high, 
// :blood_sugar_target_low, :morning_insulin_to_carb_ratio,
// :night_insulin_to_carb_ratio,
// :lantus_units,
// :a1c_goal, :personal_goal)