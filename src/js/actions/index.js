import { ADD_BLOOD_SUGAR_RECORD } from '../constants/action-types';
import { DATA_LOADED } from '../constants/action-types';

const RECORD_API = "http://localhost:3000/api/v1/blood_sugar_records"
const METRICS_API = "http://localhost:3000/api/v1/diabetes_metrics"

export function addBloodSugarRecord(payload) {
    return { type: ADD_BLOOD_SUGAR_RECORD, payload }
};

export function getBloodSugarRecords() {
    return function(dispatch) {
        return fetch(RECORD_API)
        .then(response => response.json())
        .then(json => { 
            dispatch({ type: DATA_LOADED, payload: json }); 
        });
    };
}

// export default addBloodSugarRecord;