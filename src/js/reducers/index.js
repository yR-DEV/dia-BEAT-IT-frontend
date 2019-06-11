import { ADD_BLOOD_SUGAR_RECORD } from '../constants/action-types';

const initialState = {
    bloodSugarRecords: []
}

const rootReducer = (state = initialState, action) => {
    if (action.type === ADD_BLOOD_SUGAR_RECORD) {
        return Object.assign({}, state, {
            bloodSugarRecords: state.bloodSugarRecords.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;