import { ADD_BLOOD_SUGAR_RECORD,
         RECORD_DATA_LOADED,
         PROFILE_DATA_LOADED,
         USER_LOGIN,
         EDIT_DIABETES_PROFILE,
         USER_LOGOUT} from '../constants/action-types';
import MetricAveragesSort from '../components/metrics/js/MetricsAveragesSort'; 
import MetricsPieChartSort from '../components/metrics/js/MetricsPieChartSort';
import { getBloodSugarRecords, getDiabetesProfile } from '../actions/index';  
         
var jwtDecode = require('jwt-decode');       

const initialState = {
    bloodSugarRecords: [],
    userDiabetesProfile: [],
    bloodSugarAverages: {},
    pieChartData: [],
    loggedIn: false,
    userId: 0,
    redirect: false,
}

const rootReducer = (state = initialState, action) => {
    if (action.type === ADD_BLOOD_SUGAR_RECORD) {
        return Object.assign({ }, state, { });
    }
    if (action.type === RECORD_DATA_LOADED) {
        const recordAverages = MetricAveragesSort.startAverageSort(action.payload)
        const averagesPieChartData = MetricsPieChartSort.startSort(recordAverages);
        return Object.assign({}, state, {
            bloodSugarRecords: action.payload,
            bloodSugarAverages: recordAverages,
            pieChartData: averagesPieChartData,
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
            getDiabetesProfile(tokenDecoded.user_id)
            return Object.assign({}, state, {
                loggedIn: true,
                userId: tokenDecoded.user_id,
                redirect: true
            });
        }
    }
    if (action.type === USER_LOGOUT) {
        return Object.assign({}, state, {
            loggedIn: false,
            userId: 0,
            redirect: false
        });
    }
    return state;
}


export default rootReducer;