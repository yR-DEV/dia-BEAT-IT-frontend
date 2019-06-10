import React from 'react';

import MetricsAveragesSort from './js/MetricsAveragesSort';

export default class MetricsAverages extends React.PureComponent {
    state = {
        averageData: {}
    }

    componentDidMount() {
        if (this.props.bloodSugarRecords.length > 1) {
            const averageData = MetricsAveragesSort.startAverageSort(this.props.bloodSugarRecords);
            this.setState({ averageData });
            this.props.setDayAverages(averageData);
        }
    }
    

    render() {
        return (
            <div className="averages-container">
                <h2>Averages by Time of Day</h2>
                {this.state.averageData !== {} && this.props.bloodSugarRecords.length > 0 &&
                    <div className="row">
                        <div className="col s-4">
                            <h3>Total Average:</h3>
                            <h4>{this.state.averageData.total_average} mg/dl</h4>
                        </div>
                        <div className="row col s8">
                            <div className="col s3">
                                <h5>Morning</h5>
                                <p>{this.state.averageData.morning} mg/dl</p>
                            </div>
                            <div className="col s3">
                                <h5>preBreakfast</h5>
                                <p>{this.state.averageData.preBreakfast} mg/dl</p>
                                
                            </div>
                            <div className="col s3">
                                <h5>postBreakfast</h5>
                                <p>{this.state.averageData.postBreakfast} mg/dl</p>
                                
                            </div>
                            <div className="col s3">
                                <h5>preLunch</h5>
                                <p>{this.state.averageData.preLunch} mg/dl</p>
                                
                            </div>
                        </div>
                            <div className="row col s8">

                            <div className="col s3">
                                <h5>postLunch</h5>
                                <p>{this.state.averageData.postLunch} mg/dl</p>
                                
                            </div>
                            <div className="col s3">
                                <h5>preDinner</h5>
                                <p>{this.state.averageData.preDinner} mg/dl</p>
                                
                            </div>
                            <div className="col s3">
                                <h5>postDinner</h5>
                                <p>{this.state.averageData.postDinner} mg/dl</p>
                                
                            </div>
                            <div className="col s3">
                                <h5>Night</h5>
                                <p>{this.state.averageData.night} mg/dl</p>

                            </div>
                        </div>
                    </div>
                }
            </div>
        )    
    }
}

