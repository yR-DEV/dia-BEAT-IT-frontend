import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//creating the main store and appling redux-thunk middleware
const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(thunk))
);

export default store;