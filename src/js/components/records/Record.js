import React from 'react';

const BloodSugarRecord = (props) => {
    return (
        <tr>
            <td>{props.record.record_date}</td>
            <td>{props.record.record_time}</td>
            <td>{props.record.blood_sugar} mg/dl</td>
            <td>{props.record.carbs} g</td>
            <td>{props.record.insulin_units} units</td>
        </tr>
    )
}
export default BloodSugarRecord;
