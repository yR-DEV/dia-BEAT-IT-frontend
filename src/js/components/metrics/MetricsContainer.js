import React from 'react';
import { connect } from 'react-redux';

import MetricsAverages from './MetricsAverages';
import MetricsDayLineGraph from './MetricsDayLineGraph';
import MetricsAveragePieChart from './MetricsAveragePieChart';
import MetricsInsulinAveragePieChart from './MetricsInsulinAveragePieChart';
import MetricsBSRecord from './MetricsBSRecord';

import { getBloodSugarRecords } from '../../actions/index';


var _ = require('lodash');

const mapStateToProps = (state) => {
  return { bloodSugarRecords: state.bloodSugarRecords }
}

const MetricsContainer = ({ bloodSugarRecords }) => {
  // state = {
  //   dayData: [],
  //   averagesObject: {}
  // }

  // setDayAverages = (averagesObject) => {
  //   if (averagesObject) {
  //     this.setState({ averagesObject })
  //   }
  // }
  
  // setDayLineGraphData = (dayData) => {
  //    if (dayData) {
  //     this.setState({ dayData });
  //    }
  // }



    return (
      <div className="container"> 
        <div className="card">
          <MetricsAverages 
          />    
        </div>
        {/* <div className="card">
          <MetricsInsulinAveragePieChart 
          />
        </div> */}
        {/* <div className="card">
          <MetricsDayLineGraph 
            bloodSugarRecords={this.props.bloodSugarRecords}
            setDayLineGraphData={this.setDayLineGraphData}
          />
        </div>
        <div className="card">
          <MetricsAveragePieChart 
            averagesObject={this.state.averagesObject}
          />
        </div> */}
        <MetricsBSRecord />
      </div>

    )
}

export default connect(
  mapStateToProps,
  { getBloodSugarRecords }
) (MetricsContainer)