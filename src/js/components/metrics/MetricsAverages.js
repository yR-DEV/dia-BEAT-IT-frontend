import React from 'react';
import { connect } from 'react-redux';

import MetricsAveragesSort from './js/MetricsAveragesSort';
import { getBloodSugarRecords } from '../../actions/index';

var _ = require('lodash');

const mapStateToProps = (state) => {
    return { bloodSugarRecords: state.bloodSugarRecords }
};

// if (!_.isEmpty(bloodSugarRecords)) {
//     const averageData = MetricsAveragesSort.startAverageSort(state.bloodSugarRecords);
// }  

const MetricsAverages = ({ bloodSugarRecords }) => {  
    const averageData = MetricsAveragesSort.startAverageSort(bloodSugarRecords);
        return (
            <div className="averages-container">
                <h2>Averages by Time of Day</h2>
                {averageData !== undefined && 
                    <div className="row">
                        <div className="col s-4">
                            <h3>Total Average:</h3>
                            <h4>{averageData.total_average} mg/dl</h4>
                        </div>
                        <div className="row col s8">
                            <div className="col s3">
                                <h5>Morning</h5>
                                <p>{averageData.morning} mg/dl</p>
                            </div>
                            <div className="col s3">
                                <h5>preBreakfast</h5>
                                <p>{averageData.preBreakfast} mg/dl</p>
                            </div>
                            <div className="col s3">
                                <h5>postBreakfast</h5>
                                <p>{averageData.postBreakfast} mg/dl</p>
                            </div>
                            <div className="col s3">
                                <h5>preLunch</h5>
                                <p>{averageData.preLunch} mg/dl</p>
                            </div>
                        </div>
                            <div className="row col s8">
                            <div className="col s3">
                                <h5>postLunch</h5>
                                <p>{averageData.postLunch} mg/dl</p>
                            </div>
                            <div className="col s3">
                                <h5>preDinner</h5>
                                <p>{averageData.preDinner} mg/dl</p>
                            </div>
                            <div className="col s3">
                                <h5>postDinner</h5>
                                <p>{averageData.postDinner} mg/dl</p>
                            </div>
                            <div className="col s3">
                                <h5>Night</h5>
                                <p>{averageData.night} mg/dl</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )    
    // }
}
export default connect(
    mapStateToProps,
    { getBloodSugarRecords }
) (MetricsAverages)
