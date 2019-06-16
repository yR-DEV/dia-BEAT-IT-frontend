import React from 'react';
import { connect } from 'react-redux';

import RecordsForm from './RecordsForm';
import Record from './Record';

import { getBloodSugarRecords } from '../../actions/index';

const mapStateToProps = (state) => {
    return { bloodSugarRecords: state.bloodSugarRecords }
};

const RecordsContainer = ({ bloodSugarRecords }) => {
    let records = bloodSugarRecords.map(record => {
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

export default connect(
    mapStateToProps,
    { getBloodSugarRecords }
) (RecordsContainer)