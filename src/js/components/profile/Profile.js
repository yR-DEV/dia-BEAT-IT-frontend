import React from 'react';
import { connect } from 'react-redux';

var _ = require('lodash');

const mapStateToProps = (state) => {
    return { userDiabetesProfile: state.userDiabetesProfile }
};

const Profile = ({ userDiabetesProfile }) => {

        return (
            <div className="">
            { !_.isEmpty(userDiabetesProfile) &&
                <div className="card">
                        <div className="row">
                            <h3>{userDiabetesProfile[0].user.email}</h3>
                            <p>{userDiabetesProfile[0].personal_goal}</p>
                        </div>
                        <div className="row">
                                <div className="col s4">
                                    <p>Morning Insulin/Carb Ratio: </p>
                                    <p>{userDiabetesProfile[0].morning_insulin_to_carb_ratio} carbs/unit</p>
                                </div>
                                <div className="col s4">
                                    <p>Afternoon Insulin/Carb Ratio: </p>
                                    <p>{userDiabetesProfile[0].night_insulin_to_carb_ratio} carbs/unit</p>
                                </div>
                                <div className="col s4">
                                    <p>Lantus Units:</p>
                                    <p>{userDiabetesProfile[0].lantus_units}</p>
                                </div>
                        </div>
                        <div className="row">
                                <div className="col s4">
                                    <p>Target Range (low): </p>
                                    <p>{userDiabetesProfile[0].blood_sugar_target_low}</p>
                                </div>
                                <div className="col s4">
                                    <p>Target Range (high):</p>
                                    <p>{userDiabetesProfile[0].blood_sugar_target_high}</p>
                                </div>
                                <div className="col s4">
                                    <p>A1C Goal: </p>
                                    <p>{userDiabetesProfile[0].a1c_goal}</p>
                                </div>
                        </div>
                        <div className="row">        
                                <div className="col s4">
                                    <p>Height: </p>
                                    <p>{userDiabetesProfile[0].height}</p>
                                </div>
                                <div className="col s4">
                                    <p>Weight:</p>
                                    <p>{userDiabetesProfile[0].weight}</p>

                                </div>
                                <div className="col s4">
                                    <p>:</p>
                                    {/* <p>{userDiabetesProfile[0].weight}</p> */}

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