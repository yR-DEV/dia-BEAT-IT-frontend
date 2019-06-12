import React from 'react';

import MetricsInsulinAveragePieChartSort from './js/MetricsInsulinPieChartSort'

export default class MetricsInsulinAveragePieChart extends React.PureComponent {

    state = {
        bloodSugarRecords: []
    }

    componentDidMount() {
        if(this.props.bloodSugarRecords) {
            const { bloodSugarRecords } = this.props 
            this.setState({ bloodSugarRecords })
        }
    }

    render() {
        const averageInsulinData = MetricsInsulinAveragePieChartSort.startSort(this.state.bloodSugarRecords)
        // console.log(averageInsulinData);
        

        return (
            <div className="container">
                
            </div>
        )
    }
}