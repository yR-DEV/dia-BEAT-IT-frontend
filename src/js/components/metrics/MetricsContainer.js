import React from 'react';
import { connect } from 'react-redux';

import MetricsAverages from './MetricsAverages';
import MetricsDayLineGraph from './MetricsDayLineGraph';
import MetricsAveragePieChart from './MetricsAveragePieChart';
import MetricsInsulinAveragePieChart from './MetricsInsulinAveragePieChart';
import MetricsBSRecord from './MetricsBSRecord';

import { getBloodSugarRecords } from '../../actions/index';

const mapStateToProps = (state) => {
  return { bloodSugarRecords: state.bloodSugarRecords }
}

const MetricsContainer = ({ bloodSugarRecords }) => {
    return (
      <div className="container"> 
        <div className="card">
          <MetricsAverages 
          />    
        </div>
        <div className="card">
          <MetricsAveragePieChart 
          />
        </div>
        <div className="card">
          <MetricsDayLineGraph 
          />
        </div>
        {/* <div className="card">
          <MetricsInsulinAveragePieChart 
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