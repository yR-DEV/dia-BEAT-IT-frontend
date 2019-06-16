import React from 'react';
import { connect } from 'react-redux';

import MetricsAveragesSort from './js/MetricsAveragesSort';
import { getBloodSugarRecords } from '../../actions/index';

var _ = require('lodash');

const mapStateToProps = (state) => {
    return { bloodSugarRecords: state.bloodSugarRecords }
};

const MetricsAverages = ({ bloodSugarRecords }) => {  
    const averageData = MetricsAveragesSort.startAverageSort(bloodSugarRecords);
        return (
            <div className="averages-container">
                <h1>Averages by Time of Day</h1>
                {averageData !== undefined && 
                    <div className="row">
                        <div className="col s-4">
                            <h3>Total Average:</h3>
                            <div style={{ color: averageData.total_average > 130 ? '#E54A4F' : '#00C55E' }}>
                                <h4>{averageData.total_average} mg/dl</h4>
                            </div>
                        </div>
                        <div className="row col s8">
                            <div className="col s3">
                                <h5>Morning</h5>
                                <div style={{ color: averageData.morning > 130 ? '#E54A4F' : '#00C55E' }}>
                                    <p>{averageData.morning} mg/dl</p>
                                </div>
                            </div>
                            <div className="col s3">
                                <h5>preBreakfast</h5>
                                <div style={{ color: averageData.preBreakfast > 130 ? '#E54A4F' : '#00C55E' }}>
                                    <p>{averageData.preBreakfast} mg/dl</p>
                                </div>
                            </div>
                            <div className="col s3">
                                <h5>postBreakfast</h5>
                                <div style={{ color: averageData.postBreakfast > 130 ? '#E54A4F' : '#00C55E' }}>
                                    <p>{averageData.postBreakfast} mg/dl</p>
                                </div>    
                            </div>
                            <div className="col s3">
                                <h5>preLunch</h5>
                                <div style={{ color: averageData.preLunch > 130 ? '#E54A4F' : '#00C55E' }}>
                                    <p>{averageData.preLunch} mg/dl</p>
                                </div>
                            </div>
                        </div>
                            <div className="row col s8">
                            <div className="col s3">
                                <h5>postLunch</h5>
                                <div style={{ color: averageData.postLunch > 130 ? '#E54A4F' : '#00C55E' }}>
                                    <p>{averageData.postLunch} mg/dl</p>
                                </div>    
                            </div>
                            <div className="col s3">
                                <h5>preDinner</h5>
                                <div style={{ color: averageData.preDinner > 130 ? '#E54A4F' : '#00C55E' }}>
                                    <p>{averageData.preDinner} mg/dl</p>
                                </div>
                            </div>
                            <div className="col s3">
                                <h5>postDinner</h5>
                                <div style={{ color: averageData.postDinner > 130 ? '#E54A4F' : '#00C55E' }}>
                                    <p>{averageData.postDinner} mg/dl</p>
                                </div>    
                            </div>
                            <div className="col s3">
                                <h5>Night</h5>
                                <div style={{ color: averageData.night > 130 ? '#E54A4F' : '#00C55E' }}>
                                    <p>{averageData.night} mg/dl</p>
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
