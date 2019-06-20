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
                        <div className="col s6 left-align">
                            <label htmlFor="email"><h5>Email: </h5></label>
                            <h3 name="email">{userDiabetesProfile.user.email}</h3>
                        </div>
                        <div className="col s6 left-align">
                            <label htmlFor="goal"><h5>Personal Goal: </h5></label>
                            <h5>{userDiabetesProfile.personal_goal}</h5>
                        </div>
                        </div>
                        <div className="row left-align">
                                <div className="col s4 left-align">
                                    <label htmlFor="morning_ratio">Morning Insulin/Carb Ratio: </label>
                                    <h5 name="morning_ratio">{userDiabetesProfile.morning_insulin_to_carb_ratio} carbs/unit</h5>
                                </div>
                                <div className="col s4">
                                    <label htmlFor="afternoon_ratio">Afternoon Insulin/Carb Ratio: </label>
                                    <h5 name="afternoon_ratio">{userDiabetesProfile.night_insulin_to_carb_ratio} carbs/unit</h5>
                                </div>
                                <div className="col s4">
                                    <label htmlFor="lantus_units">Lantus Units: </label>
                                    <h5 name="lantus_units">{userDiabetesProfile.lantus_units}</h5>
                                </div>
                        </div>
                        <div className="row left-align">
                                <div className="col s4">
                                    <label htmlFor="target_low">Target Range (low): </label>
                                    <h5 name="target_low">{userDiabetesProfile.blood_sugar_target_low}</h5>
                                </div>
                                <div className="col s4">
                                    <label htmlFor="target_high">Target Range (high):</label>
                                    <h5 name="target_high">{userDiabetesProfile.blood_sugar_target_high}</h5>
                                </div>
                                <div className="col s4">
                                    <label htmlFor="a1c">A1C Goal: </label>
                                    <h5 name="a1c">{userDiabetesProfile.a1c_goal}</h5>
                                </div>
                        </div>
                        <div className="row left-align">        
                                <div className="col s4">
                                    <label htmlFor="height">Height: </label>
                                    <h5 name="height">{userDiabetesProfile.height}</h5>
                                </div>
                                <div className="col s4">
                                    <label htmlFor="weight">Weight:</label>
                                    <h5 name="weight">{userDiabetesProfile.weight}</h5>

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