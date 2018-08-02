import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './sass/main.scss';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './AppRoutes';
import {reducer as formReducer} from 'redux-form';
import coloursReducer from './reducers/coloursReducer';
import varietyReducer from './reducers/varietyReducer';
import accomplishedReducer from './reducers/accomplished';
import userReducer from './reducers/userReducer';
require('typeface-architects-daughter');


const rootReducer=combineReducers(
    {colours:coloursReducer,
    variety:varietyReducer,
    accomplished:accomplishedReducer,
      user:userReducer,
      form: formReducer,
    });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}>
    <AppRoutes/>
</Provider>,
    document.getElementById('root'));
registerServiceWorker();
