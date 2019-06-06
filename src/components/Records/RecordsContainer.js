import React from 'react';

import RecordsForm from './RecordsForm'
import './Records.css'

import Record from './Record';

const RecordsContainer = (props) => {

    const records = props.bloodSugarRecords.map(record => {
        return <Record key={record.id} record={record} />
    })

    return (
        <div className="container">
            <div className="card records-container"> 
                <table>
                    <thead>
                        <tr>
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