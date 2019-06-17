import React from 'react';
import { connect } from 'react-redux';
import { getBloodSugarRecords } from '../../actions/index';
var _ = require('lodash');

const mapStateToProps = (state) => {
    return { bloodSugarAverages: state.bloodSugarAverages }
};

const MetricsAverages = ({ bloodSugarAverages }) => {  
        return (
            <div className="averages-container">
                <h1>Averages by Time of Day</h1>
                {bloodSugarAverages !== undefined && bloodSugarAverages && !(_.isEmpty(bloodSugarAverages)) &&
                    <div className="row">
                        <div className="col s-4">
                            <h3>Total Average:</h3>
                            <div style={{ color: bloodSugarAverages.total_average > 130 ? '#E54A4F' : '#00C55E' }}>
                                <h4>{bloodSugarAverages.total_average} mg/dl</h4>
                            </div>
                        </div>
                        <div className="row col s8">
                            <div className="col s3">
                                <h5>Morning</h5>
                                <div style={{ color: bloodSugarAverages.morning > 130 ? '#E54A4F' : '#00C55E' }}>
                                    <p>{bloodSugarAverages.morning} mg/dl</p>
                                </div>
                            </div>
                            <div className="col s3">
                                <h5>preBreakfast</h5>
                                <div style={{ color: bloodSugarAverages.preBreakfast > 130 ? '#E54A4F' : '#00C55E' }}>
                                    <p>{bloodSugarAverages.preBreakfast} mg/dl</p>
                                </div>
                            </div>
                            <div className="col s3">
                                <h5>postBreakfast</h5>
                                <div style={{ color: bloodSugarAverages.postBreakfast > 130 ? '#E54A4F' : '#00C55E' }}>
                                    <p>{bloodSugarAverages.postBreakfast} mg/dl</p>
                                </div>    
                            </div>
                            <div className="col s3">
                                <h5>preLunch</h5>
                                <div style={{ color: bloodSugarAverages.preLunch > 130 ? '#E54A4F' : '#00C55E' }}>
                                    <p>{bloodSugarAverages.preLunch} mg/dl</p>
                                </div>
                            </div>
                        </div>
                            <div className="row col s8">
                            <div className="col s3">
                                <h5>postLunch</h5>
                                <div style={{ color: bloodSugarAverages.postLunch > 130 ? '#E54A4F' : '#00C55E' }}>
                                    <p>{bloodSugarAverages.postLunch} mg/dl</p>
                                </div>    
                            </div>
                            <div className="col s3">
                                <h5>preDinner</h5>
                                <div style={{ color: bloodSugarAverages.preDinner > 130 ? '#E54A4F' : '#00C55E' }}>
                                    <p>{bloodSugarAverages.preDinner} mg/dl</p>
                                </div>
                            </div>
                            <div className="col s3">
                                <h5>postDinner</h5>
                                <div style={{ color: bloodSugarAverages.postDinner > 130 ? '#E54A4F' : '#00C55E' }}>
                                    <p>{bloodSugarAverages.postDinner} mg/dl</p>
                                </div>    
                            </div>
                            <div className="col s3">
                                <h5>Night</h5>
                                <div style={{ color: bloodSugarAverages.night > 130 ? '#E54A4F' : '#00C55E' }}>
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
