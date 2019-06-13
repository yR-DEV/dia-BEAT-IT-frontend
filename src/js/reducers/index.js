import { ADD_BLOOD_SUGAR_RECORD,
         RECORD_DATA_LOADED,
         PROFILE_DATA_LOADED} from '../constants/action-types';


const initialState = {
    bloodSugarRecords: [],
    userDiabetesProfile: []
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
    return state;
}


export default rootReducer;