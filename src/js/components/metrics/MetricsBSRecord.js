import React from 'react';
import { connect } from 'react-redux';
import { getBloodSugarRecords } from '../../actions/index';

export class MetricsBSRecord extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        // this.props.getBloodSugarRecords();
    }

    render() {
        return null;
    }
}

export default connect (
    null, 
    { getBloodSugarRecords }
) (MetricsBSRecord);