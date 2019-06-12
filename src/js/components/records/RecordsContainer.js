import React from 'react';
import { connect } from 'react-redux';

import RecordsForm from './RecordsForm';
import Record from './Record';
import BSRecord from './BSRecord';

import { getBloodSugarRecords } from '../../actions/index';

const mapStateToProps = (state) => {
    return { bloodSugarRecords: state.bloodSugarRecords }
};

const RecordsContainer = ({ bloodSugarRecords }) => {
    const records = bloodSugarRecords.map(record => {
        return <Record key={record.id} record={record} />
    });

    return (
        <div className="container">
            <div className="card records-container"> 
                <RecordsForm 

                />
                <table>
                    <thead>
                        <tr>
                            <th>Date Submitted:</th>
                            <th>Time Submitted:</th>
                            <th>Blood Sugar:</th>
                            <th>Carbs Eaten:</th>
                            <th>Insulin Taken:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records}
                    </tbody>
                </table>
                <BSRecord />
            </div>    
        </div>
    )
}

export default connect(
    mapStateToProps,
    { getBloodSugarRecords }
) (RecordsContainer)

// const RecordsContainerConnected = connect(mapStateToProps)(RecordsContainer);
// export default RecordsContainerConnected;