import React from 'react';
import { connect } from 'react-redux';
import { ResponsivePie } from '@nivo/pie'

import './Metrics.css'

import { getBloodSugarRecords } from '../../actions/index';

const mapStateToProps = (state) => {
    return { pieChartData: state.pieChartData}
};

const MetricsAveragePieChart = ({ pieChartData }) => {
    return (
        <div className="pie-chart-container">
        <h2>Average Blood Sugar Broken Down </h2>
        { pieChartData.length > 0 && pieChartData[0].value !== 'u' && pieChartData !== undefined &&
        <div className="pie-chart-render averages-container">
            <ResponsivePie
                data={pieChartData}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                theme={{  
                    textColor: '#ffffff',
                    tooltip: {
                        container: {
                            background: '#222'
                        }
                    }
                }}
                padAngle={0.7}
                cornerRadius={3}
                colors={{ scheme: 'greens' }}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#ffffff"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor={{ from: 'color' }}
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#000000"
                slicesLabelsTextSize={14}
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
                            id: 'preDinner'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'morning'
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
                            id: 'postBreakfast'
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
                        itemTextColor: '#ffffff',
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
        </div>
        }
    </div>
    )
}
export default connect(
    mapStateToProps,
    { getBloodSugarRecords }
) (MetricsAveragePieChart)