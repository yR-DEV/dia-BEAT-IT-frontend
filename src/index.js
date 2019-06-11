import React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';

import index from './js/index';
import store from './js/store/index';
import App from './js/App.js';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);