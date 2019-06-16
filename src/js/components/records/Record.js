import React from 'react';

const BloodSugarRecord = (props) => {
    return (
        <tr>
            <td className="white-text">{props.record.record_date}</td>
            <td className="white-text">{props.record.record_time}</td>
            <td className="white-text">{props.record.blood_sugar} mg/dl</td>
            <td className="white-text">{props.record.carbs} g</td>
            <td className="white-text">{props.record.insulin_units} units</td>
        </tr>
    )
}
export default BloodSugarRecord;
