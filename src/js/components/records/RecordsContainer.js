import React from 'react';
import { connect } from 'react-redux';

import RecordsForm from './RecordsForm';
import Record from './Record';

import { getBloodSugarRecords, getDiabetesProfile } from '../../actions/index';

const mapStateToProps = (state) => {
    return { bloodSugarRecords: state.bloodSugarRecords, userId: state.userId, redirect: state.redirect }
};

class RecordsContainer extends React.Component {
    
    componentDidMount() {
        const { userId } = this.props;
        this.props.getBloodSugarRecords(userId);
        this.props.getDiabetesProfile(userId);
    }

    render() {
        let records = this.props.bloodSugarRecords.map(record => {
            return <Record key={record.id} record={record} />
        });
        return (
            <div className="container">
                <div className="card records-container ui-interface-backgrounds"> 
                    <RecordsForm />
                    <table>
                        <thead>
                            <tr>
                                <th className="white-text">Date Submitted:</th>
                                <th className="white-text">Time Submitted:</th>
                                <th className="white-text">Blood Sugar:</th>
                                <th className="white-text">Carbs Eaten:</th>
                                <th className="white-text">Insulin Taken:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.reverse()}
                        </tbody>
                    </table>
                </div>    
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    { getBloodSugarRecords, getDiabetesProfile }
) (RecordsContainer)