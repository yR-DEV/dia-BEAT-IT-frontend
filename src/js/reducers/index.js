import { ADD_BLOOD_SUGAR_RECORD,
         RECORD_DATA_LOADED,
         PROFILE_DATA_LOADED,
         USER_LOGIN} from '../constants/action-types'; 
import App from '../App';         
         
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
        return Object.assign({}, state, {
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
    console.log(state);
    
    return state;
}


export default rootReducer;