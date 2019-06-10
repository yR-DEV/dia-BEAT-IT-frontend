import React from 'react';
import { ResponsiveLine } from '@nivo/line';

import MetricsDataSort from './MetricsDataSort';
import Login from '../Login/Login';

const data1 = [
    {
      "id": "06/06/2019",
      "color": "hsl(349, 70%, 50%)",
      "data": [
        {
          "x": "Morning",
          "y": 256
        },
        {
          "x": "PreBreakfast",
          "y": 247
        },
        {
          "x": "PostBreakfast",
          "y": 239
        },
        {
          "x": "PreLunch",
          "y": 166
        },
        {
          "x": "PostLunch",
          "y": 86
        },
        {
          "x": "PreDinner",
          "y": 234
        },
        {
          "x": "PostDinner",
          "y": 159
        },
        {
          "x": "Night",
          "y": 127
        },

      ]
    },
    {
      "id": "day",
      "color": "hsl(349, 70%, 40%)",
      "data": [
        {
          "x": "Morning",
          "y": 104
        },
        {
          "x": "PreBreakfast",
          "y": 127
        },
        {
          "x": "PostBreakfast",
          "y": 439
        },
        {
          "x": "PreLunch",
          "y": 196
        },
        {
          "x": "PostLunch",
          "y": 186
        },
        {
          "x": "PreDinner",
          "y": 134
        },
        {
          "x": "PostDinner",
          "y": 259
        },
        {
          "x": "Night",
          "y": 97
        },

      ]
    },
]

// const data = MetricsDataSort.sortByDay(props.bloodSugarRecords)


const MetricsContainer = (props) => {
  
  // This is the proper array of data structure and requirement 
  // but because my application refreshes 3 times, I get errors from nivo
  // when the data is undefined nivo graph dependency crashes
  const dayData = MetricsDataSort.startDaySort(props.bloodSugarRecords)
  console.log(dayData);
  console.log(data1);
  
  
  
  

  return (
    <div className="container">  
      <div className="metrics-container">
        <ResponsiveLine
            data={data1}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
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
    <div className="container">

    </div>
  </div>     
  )
}

export default MetricsContainer