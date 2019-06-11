import { ADD_BLOOD_SUGAR_RECORD } from '../constants/action-types';

export function addBloodSugarRecord(payload) {
    return { type: ADD_BLOOD_SUGAR_RECORD, payload }
};

// export default addBloodSugarRecord;