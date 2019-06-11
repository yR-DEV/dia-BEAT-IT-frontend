import store from './store/index';
import { addBloodSugarRecord } from './actions/index';

window.store = store;
window.addBloodSugarRecord = addBloodSugarRecord;