import React from 'react';
import { connect } from 'react-redux';

import MetricsAverages from './MetricsAverages';
import MetricsDayLineGraph from './MetricsDayLineGraph';
import MetricsAveragePieChart from './MetricsAveragePieChart';

import './Metrics.css'

import { getBloodSugarRecords } from '../../actions/index';

const mapStateToProps = (state) => {
  return { bloodSugarRecords: state.bloodSugarRecords }
}

const MetricsContainer = ({ bloodSugarRecords }) => {
    return (
      <div className="container"> 
        <div className="card ui-interface-backgrounds white-text averages-container">
          <MetricsAverages 
          />    
        </div>
        <div className="card">
          <div className="card ui-interface-backgrounds white-text">
            <MetricsAveragePieChart 
            />
          </div>
        </div>
        <div className="card ui-interface-backgrounds white-text pie-chart-container">
          <MetricsDayLineGraph 
          />
        </div>
      </div>
    )
}

export default connect(
  mapStateToProps,
  { getBloodSugarRecords }
) (MetricsContainer)