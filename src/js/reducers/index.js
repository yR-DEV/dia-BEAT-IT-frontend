import { ADD_BLOOD_SUGAR_RECORD,
         RECORD_DATA_LOADED,
         PROFILE_DATA_LOADED,
         USER_LOGIN,
         EDIT_DIABETES_PROFILE,
         USER_LOGOUT} from '../constants/action-types'; 
         
var jwtDecode = require('jwt-decode');       

const initialState = {
    bloodSugarRecords: [],
    userDiabetesProfile: [],
    loggedIn: false,
    userId: 0
}

const rootReducer = (state = initialState, action) => {
    if (action.type === ADD_BLOOD_SUGAR_RECORD) {
        return Object.assign({}, state, {
            bloodSugarRecords: state.bloodSugarRecords.concat(action.payload)
        });
    }
    if (action.type === RECORD_DATA_LOADED) {
        return Object.assign({}, state, {
            bloodSugarRecords: state.bloodSugarRecords.concat(action.payload)
        })
    }
    if (action.type === PROFILE_DATA_LOADED) {
        if(action.payload !== null) {
            return Object.assign({}, state, {
                userDiabetesProfile: action.payload
            })
        }
    }
    if (action.type === EDIT_DIABETES_PROFILE) {
        return Object.assign({} , state, {
            userDiabetesProfile: action.payload
        })
    }
    if(action.type === USER_LOGIN) {
        if(action.res.auth_token !== undefined) {
            const tokenDecoded = jwtDecode(action.res.auth_token)
            return Object.assign({}, state, {
                loggedIn: true,
                userId: tokenDecoded.user_id
            });
        }
    }
    if (action.type === USER_LOGOUT) {
        return Object.assign({}, state, {
            loggedIn: false,
            userId: 0
        });
    }
    return state;
}


export default rootReducer;