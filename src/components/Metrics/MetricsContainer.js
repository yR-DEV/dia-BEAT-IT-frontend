import React from 'react';

import MetricsAverages from './MetricsAverages';
import MetricsDayLineGraph from './MetricsDayLineGraph';
import MetricsAveragePieChart from './MetricsAveragePieChart';

var _ = require('lodash');


export default class MetricsContainer extends React.PureComponent {
  state = {
    dayData: [],
    averagesObject: {}
  }

  setDayAverages = (averagesObject) => {
    if (averagesObject) {
      this.setState({ averagesObject })
      // console.log('averages object', this.state.averagesObject);
      //the state is blank after the setState method is called?!
    }
  }
  
  setDayLineGraphData = (dayData) => {
     if (dayData) {
      this.setState({ dayData });
     }
  }

  returnDayAverages = () => {
    console.log(this.state);
    
    if (_.isEmpty(this.state.averagesObject)) {
      console.log('something');
      console.log(this.state.averagesObject);
      
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
        {/* { _.isEmpty(this.state.averagesObject) &&  */}
          <MetricsAveragePieChart 
            averagesObject={this.state.averagesObject}
            returnDayAverages={this.returnDayAverages}
          />
        {/* }   */}
      </div>
    </div>

  )
}
  
}

