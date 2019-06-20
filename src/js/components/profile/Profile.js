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
                    <table className="responsive-table highlight left-align">
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="email"><h5>Email: </h5></label>
                                    <h4 name="email">{userDiabetesProfile.user.email}</h4>
                                </td>
                                <td>
                                    <label htmlFor="goal"><h5>Personal Goal: </h5></label>
                                    <h5 name="goal">{userDiabetesProfile.personal_goal}</h5>
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="weight">Weight: </label>
                                    <h5 name="weight">{userDiabetesProfile.weight} lbs.</h5>
                                </td>
                                <td>
                                    <label htmlFor="target_low">Target Range (low): </label>
                                    <h5 name="target_low">{userDiabetesProfile.blood_sugar_target_low} mg/dl</h5>
                                </td>
                                <td>
                                    <label htmlFor="target_high">Target Range (high):</label>
                                    <h5 name="target_high">{userDiabetesProfile.blood_sugar_target_high} mg/dl</h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="morning_ratio">Morning Insulin/Carb Ratio: </label>
                                    <h5 name="morning_ratio">{userDiabetesProfile.morning_insulin_to_carb_ratio} carbs/unit</h5>
                                </td>
                                <td>
                                    <label htmlFor="afternoon_ratio">Afternoon Insulin/Carb Ratio: </label>
                                    <h5 name="afternoon_ratio">{userDiabetesProfile.night_insulin_to_carb_ratio} carbs/unit</h5>
                                </td>
                                <td>
                                    <label htmlFor="a1c">A1C Goal: </label>
                                    <h5 name="a1c">{userDiabetesProfile.a1c_goal} mmol/mol</h5>
                                </td>
                            </tr>
                        </tbody>
                </table>
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