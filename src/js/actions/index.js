import { ADD_BLOOD_SUGAR_RECORD, 
         RECORD_DATA_LOADED, 
         PROFILE_DATA_LOADED } from '../constants/action-types';

const RECORD_API = "http://localhost:3000/api/v1/blood_sugar_records"
const PROFILE_API = "http://localhost:3000/api/v1/diabetes_metrics"

export function addBloodSugarRecord(payload) {
    return { type: ADD_BLOOD_SUGAR_RECORD, payload }
};

export function getBloodSugarRecords() {
    return function(dispatch) {
        return fetch(RECORD_API)
            .then(response => response.json())
            .then(json => { 
                dispatch({ type: RECORD_DATA_LOADED, payload: json }); 
            });
    };
};

export function getDiabetesProfile() {
    return function(dispatch) {
        return fetch(PROFILE_API)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: PROFILE_DATA_LOADED, payload: json })
            });
    };
};

// export default addBloodSugarRecord;