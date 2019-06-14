import { ADD_BLOOD_SUGAR_RECORD, 
         RECORD_DATA_LOADED, 
         PROFILE_DATA_LOADED,
         USER_LOGIN } from '../constants/action-types';

const RECORD_API = "http://localhost:3000/api/v1/blood_sugar_records"
const PROFILE_API = "http://localhost:3000/api/v1/diabetes_metrics"
const USER_API = "http://localhost:3000/authenticate"

export function userLogin(payload) {
    return function(dispatch) {
        return fetch(USER_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
                },
            body: JSON.stringify(payload)
        }).then(response => response.json())
          .then(res => {
            if(res.message) {
                console.error(res.message)
            } else {
                localStorage.setItem("auth_token", res.auth_token)
                dispatch({ type: USER_LOGIN, res })
            }
        }).catch(console.error);
    }
}

export function createLogin(newUserParams) {

}

export function addBloodSugarRecord(payload) {    
    return function(dispatch) {
        const token = localStorage.getItem("auth_token");
        console.log(token);
        
        return fetch(RECORD_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authentication": token,
                },
            body: JSON.stringify({...payload, user_id: 1})
        }).then(response => { 
            dispatch({ type: ADD_BLOOD_SUGAR_RECORD, payload }) 
        }).catch(console.error);
    }
};

export function getBloodSugarRecords() {
    return function(dispatch) {
        const token = localStorage.getItem("auth_token");
        console.log(token);
        
        return fetch(RECORD_API, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": token,
                },
        })
            .then(response => response.json())
            .then(json => { 
                dispatch({ type: RECORD_DATA_LOADED, payload: json }); 
            }).catch(console.error);
    };
};

export function getDiabetesProfile() {
    return function(dispatch) {
        return fetch(PROFILE_API)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: PROFILE_DATA_LOADED, payload: json })
            }).catch(console.error);
    };
};


// export default addBloodSugarRecord;