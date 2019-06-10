import React from 'react';
import { ResponsivePie } from '@nivo/pie'

import MetricsPieChartSort from './js/MetricsPieChartSort';

export default class MetricsAveragePieChart extends React.PureComponent {


    data = [
        {
          "id": "java",
          "label": "java",
          "value": 534,
          "color": "hsl(311, 70%, 50%)"
        },
        {
          "id": "lisp",
          "label": "lisp",
          "value": 145,
          "color": "hsl(234, 70%, 50%)"
        },
        {
          "id": "stylus",
          "label": "stylus",
          "value": 184,
          "color": "hsl(168, 70%, 50%)"
        },
        {
          "id": "c",
          "label": "c",
          "value": 332,
          "color": "hsl(104, 70%, 50%)"
        },
        {
          "id": "hack",
          "label": "hack",
          "value": 560,
          "color": "hsl(133, 70%, 50%)"
        }
      ]

    componentDidMount() {

        if (this.props.averagesObject) {
            console.log(this.props);
            
            const pieChartData = MetricsPieChartSort.startSort(this.props.averagesObject)
            console.log(pieChartData);
            
        }
    }  

    render() {
        return (
            <div className="pie-chart-container">
                <ResponsivePie
                    data={this.data}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{ scheme: 'nivo' }}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                    radialLabelsSkipAngle={10}
                    radialLabelsTextXOffset={6}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkOffset={0}
                    radialLabelsLinkDiagonalLength={16}
                    radialLabelsLinkHorizontalLength={24}
                    radialLabelsLinkStrokeWidth={1}
                    radialLabelsLinkColor={{ from: 'color' }}
                    slicesLabelsSkipAngle={10}
                    slicesLabelsTextColor="#333333"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'ruby'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'c'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'go'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'python'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'scala'
                            },
                            id: 'lines'
                        },
                        {
                            match: {
                                id: 'lisp'
                            },
                            id: 'lines'
                        },
                        {
                            match: {
                                id: 'elixir'
                            },
                            id: 'lines'
                        },
                        {
                            match: {
                                id: 'javascript'
                            },
                            id: 'lines'
                        }
                    ]}
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            translateY: 56,
                            itemWidth: 100,
                            itemHeight: 18,
                            itemTextColor: '#999',
                            symbolSize: 18,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000'
                                    }
                                }
                            ]
                        }
                    ]}
                />
{/* ) */}
            </div>
        )
    }
}