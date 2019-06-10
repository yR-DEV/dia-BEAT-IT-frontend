import React from 'react';
import { ResponsiveLine } from '@nivo/line';

import MetricsDataDaySort from './MetricsDataDaySort';
import MetricsAverages from './MetricsAverages';
// import Login from '../Login/Login';

// const data = MetricsDataSort.sortByDay(props.bloodSugarRecords)

// [
//   {
//     "id": "java",
//     "label": "java",
//     "value": 534,
//     "color": "hsl(311, 70%, 50%)"
//   },
//   {
//     "id": "lisp",
//     "label": "lisp",
//     "value": 145,
//     "color": "hsl(234, 70%, 50%)"
//   },
// ]

export default class MetricsContainer extends React.PureComponent {
  state = {
    dayLineGraphData: []
  }
  componentDidMount() {
    if (this.props.bloodSugarRecords.length > 1) {
    const dayLineGraphData = MetricsDataDaySort.startDaySort(this.props.bloodSugarRecords);
    this.setState({ dayLineGraphData })
    }
    
  }
  
render() {

  return (
    <div className="container"> 
    <div className="card">
        <MetricsAverages 
          bloodSugarRecords={this.props.bloodSugarRecords}
        />    
      </div>
      <div className="card"> 
        <h2>Blood Sugars by Day</h2>
        {this.state.dayLineGraphData.length > 0 && this.props.bloodSugarRecords.length > 0 &&
          <div className="metrics-container">
            <ResponsiveLine
                data={this.state.dayLineGraphData}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', stacked: false, min: 'auto', max: 'auto' }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Time of Day',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Blood Sugar mg/dl',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                colors={{ scheme: 'dark2' }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="y"
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
      }    
      </div>
    </div>

  )
}
  
}

