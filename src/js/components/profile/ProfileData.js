import React from 'react';
import { connect } from 'react-redux';
import { getDiabetesProfile } from '../../actions/index';

export class ProfileData extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getDiabetesProfile();
    }

    render() {
        return null;
    }
}

export default connect (
    null,
    { getDiabetesProfile }
) (ProfileData);