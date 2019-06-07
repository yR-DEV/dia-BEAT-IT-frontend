import React from 'react';

import RecordsForm from './RecordsForm'
import './Records.css'

import Record from './Record';

const RecordsContainer = (props) => {
    // the reverse here is not working nor does it work if I create a const and reverse it beforehand
    //need to figure out how to sort these by a certain column, probably another array prototype method
    const records = props.bloodSugarRecords.map(record => {
        return <Record key={record.id} record={record} />
    })

    return (
        <div className="container">
            <div className="card records-container"> 
                <RecordsForm 
                    handleNewBloodSugarRecord={props.handleNewBloodSugarRecord}
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
            </div>    
        </div>
    )
}

export default RecordsContainer