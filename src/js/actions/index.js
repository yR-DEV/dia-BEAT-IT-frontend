import { ADD_BLOOD_SUGAR_RECORD, 
         RECORD_DATA_LOADED, 
         PROFILE_DATA_LOADED,
         USER_LOGIN,
         EDIT_DIABETES_PROFILE,
         USER_LOGOUT } from '../constants/action-types';

const RECORD_API = "http://localhost:3000/api/v1/blood_sugar_records"
const PROFILE_API = "http://localhost:3000/api/v1/diabetes_metrics"
const USER_API = "http://localhost:3000/authenticate"

var jwtDecode = require('jwt-decode');       

// Checks password entered by user against created account in the database
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

// export function createLogin(newUserParams) {

// }

// Logs the user out, deletes auth key stored in local storage
export function userLogout() {
    return function(dispatch) {
        localStorage.removeItem("auth_token");
        dispatch({ type: USER_LOGOUT })
    }
}

// PATCH for editing/updating changes made to user profile
export function editDiabetesProfile(payload) {
    return function(dispatch) {
        const token = localStorage.getItem("auth_token");
        return fetch(`${PROFILE_API}/${payload.user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": token,
            },
            body: JSON.stringify(payload)
        }).then(response => {
            dispatch({ type: EDIT_DIABETES_PROFILE, payload })
        }).catch(console.error);
        
    }
}

export function addBloodSugarRecord(payload) {    
    return function(dispatch) {
        const token = localStorage.getItem("auth_token");
        const tokenDecoded = jwtDecode(token);
        return fetch(RECORD_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": token,
                },
            body: JSON.stringify({...payload, user_id: tokenDecoded.user_id})
        }).then(response => { 
            dispatch({ type: ADD_BLOOD_SUGAR_RECORD, payload }) 
        }).catch(console.error);
    }
};

export function getBloodSugarRecords(userId) {
    return function(dispatch) {
        const token = localStorage.getItem("auth_token");
        return fetch(`${RECORD_API}/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": token,
                },
        })
            .then(res => res.json())
            .then(json => {
                dispatch({ type: RECORD_DATA_LOADED, payload: json })
            }).catch(console.error)
    };
};

export function getDiabetesProfile(userId) {  
    return function(dispatch) {
        const token = localStorage.getItem("auth_token");
        return fetch(`${PROFILE_API}/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": token
            }
        })
            .then(response => response.json())
            .then(json =>  {
                dispatch({ type: PROFILE_DATA_LOADED, payload: json })
            })
    };
};


// export default addBloodSugarRecord;