import React from 'react';

import Record from './Record';

const RecordsContainer = (props) => {

    const records = props.bloodSugarRecords.map(record => {
        return <Record key={record.id} record={record} />
    })

    return (
        <div>
            records container
            {records}
        </div>
    )
}

export default RecordsContainer