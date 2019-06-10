import React from 'react';

import MetricsAverages from './MetricsAverages';
import MetricsDayLineGraph from './MetricsDayLineGraph';
import MetricsAveragePieChart from './MetricsAveragePieChart';

export default class MetricsContainer extends React.PureComponent {
  state = {
    dayData: [],
    averagesObject: {}
  }

  setDayAverages = (averagesObject) => {
    if (averagesObject) {
      this.setState({ averagesObject })
    }
  }
  
  setDayLineGraphData = (dayData) => {
     if (dayData) {
      this.setState({ dayData });
     }
  }

render() {

  return (
    <div className="container"> 
      <div className="card">
        <MetricsAverages 
          bloodSugarRecords={this.props.bloodSugarRecords}
          setDayAverages={this.setDayAverages}
        />    
      </div>
      <div className="card">
        <MetricsDayLineGraph 
          bloodSugarRecords={this.props.bloodSugarRecords}
          setDayLineGraphData={this.setDayLineGraphData}
        />
      </div>
      <div className="card">
          <MetricsAveragePieChart 
            averagesObject={this.state.averagesObject}
          />
      </div>
    </div>

  )
}
  
}

