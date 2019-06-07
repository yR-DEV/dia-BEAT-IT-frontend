import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const data = [
    {
      "id": "japan",
      "color": "hsl(349, 70%, 50%)",
      "data": [
        {
          "x": "00:00",
          "y": 256
        },
        {
          "x": "02:00",
          "y": 247
        },
        {
          "x": "04:00",
          "y": 239
        },
        {
          "x": "06:00",
          "y": 166
        },
        {
          "x": "08:00",
          "y": 86
        },
        {
          "x": "10:00",
          "y": 234
        },
        {
          "x": "12:00",
          "y": 159
        },
        {
          "x": "14:00",
          "y": 127
        },
        {
          "x": "16:00",
          "y": 278
        },
        {
          "x": "18:00",
          "y": 228
        },
        {
          "x": "20:00",
          "y": 200
        },
        {
          "x": "22:00",
          "y": 155
        },
        {
            "x": "24:00",
            "y": 202
        }
      ]
    },
]
const MetricsContainer = (props) => (
    <div className="metrics-container">
        <ResponsiveLine
            data={data}
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
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            colors={{ scheme: 'nivo' }}
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
)

export default MetricsContainer