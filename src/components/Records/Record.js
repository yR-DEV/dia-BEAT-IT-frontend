import React from 'react';

const Record = (props) => {
    return (
        <tr>
            <td>{props.record.record_date}</td>
            <td>{props.record.record_time}</td>
            <td>{props.record.blood_sugar}</td>
            <td>{props.record.carbs}</td>
            <td>{props.record.insulin_units}</td>
        </tr>
    )
}

export default Record