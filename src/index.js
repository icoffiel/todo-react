import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './views/App';
import * as reducers from './state/ducks'; // import all reducers
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers(reducers);
const store = createStore(
    rootReducer,
    composeWithDevTools()
);

ReactDOM.render(
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>,
    document.getElementById('root')
);
registerServiceWorker();
