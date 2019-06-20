import React from 'react';
import { connect } from 'react-redux';
import { getBloodSugarRecords } from '../../actions/index';

import './Metrics.css'

var _ = require('lodash');

const mapStateToProps = (state) => {
    return { bloodSugarAverages: state.bloodSugarAverages, userDiabetesProfile: state.userDiabetesProfile }
};

const MetricsAverages = ({ bloodSugarAverages, userDiabetesProfile }) => {  
        return (
            <div className="averages-container">
                <h1>Averages by Time of Day</h1>
                { bloodSugarAverages !== undefined && bloodSugarAverages && !(_.isEmpty(bloodSugarAverages)) &&
                <div>
                    <div className="row">
                        <div className="col s4">
                            <h5>TOTAL AVERAGE:</h5>
                            <div style={{ color: 
                            bloodSugarAverages.total_average > userDiabetesProfile.blood_sugar_target_high ? '#E54A4F' : '#00C55E'
                            }}>
                                <h5>{bloodSugarAverages.total_average} mg/dl</h5>
                            </div>
                        </div>
                        <div className="col s4">
                            <h5>Morning</h5>
                            <div style={{ color: bloodSugarAverages.morning > userDiabetesProfile.blood_sugar_target_high ? '#E54A4F' : '#00C55E' 
                            }}>
                                <p>{bloodSugarAverages.morning} mg/dl</p>
                            </div>
                        </div>
                        <div className="col s4">
                            <h5>preBreakfast</h5>
                            <div style={{ color: bloodSugarAverages.preBreakfast > userDiabetesProfile.blood_sugar_target_high ? '#E54A4F' : '#00C55E'
                            }}>
                                <p>{bloodSugarAverages.preBreakfast} mg/dl</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s4">
                            <h5>postBreakfast</h5>
                            <div style={{ color: bloodSugarAverages.postBreakfast > userDiabetesProfile.blood_sugar_target_high ? '#E54A4F' : '#00C55E'
                            }}>
                                <p>{bloodSugarAverages.postBreakfast} mg/dl</p>
                            </div>    
                        </div>
                        <div className="col s4">
                            <h5>preLunch</h5>
                            <div style={{ color: bloodSugarAverages.preLunch > userDiabetesProfile.blood_sugar_target_high ? '#E54A4F' : '#00C55E'
                            }}>
                                <p>{bloodSugarAverages.preLunch} mg/dl</p>
                            </div>
                        </div>
                        <div className="col s4">
                            <h5>postLunch</h5>
                            <div style={{ color: bloodSugarAverages.postLunch > userDiabetesProfile.blood_sugar_target_high ? '#E54A4F' : '#00C55E'
                            }}>
                                <p>{bloodSugarAverages.postLunch} mg/dl</p>
                            </div>    
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s4">
                            <h5>preDinner</h5>
                            <div style={{ color: bloodSugarAverages.preDinner > userDiabetesProfile.blood_sugar_target_high ? '#E54A4F' : '#00C55E'
                            }}>
                                <p>{bloodSugarAverages.preDinner} mg/dl</p>
                            </div>
                        </div>
                        <div className="col s4">
                            <h5>postDinner</h5>
                            <div style={{ color: bloodSugarAverages.postDinner > userDiabetesProfile.blood_sugar_target_high ? '#E54A4F' : '#00C55E'
                            }}>
                                <p>{bloodSugarAverages.postDinner} mg/dl</p>
                            </div>    
                        </div>
                        <div className="col s4">
                            <h5>Night</h5>
                            <div style={{ color: bloodSugarAverages.night > userDiabetesProfile.blood_sugar_target_high ? '#E54A4F' : '#00C55E' 
                            }}>
                                <p>{bloodSugarAverages.night} mg/dl</p>
                            </div>    
                        </div>
                    </div>
                </div>    
                }
            </div>
        )    
}
export default connect(
    mapStateToProps,
    { getBloodSugarRecords }
) (MetricsAverages)
 // bloodSugarAverages.total_average < userDiabetesProfile.blood_sugar_target_low ? '#ff6600' : '#00C55E'
