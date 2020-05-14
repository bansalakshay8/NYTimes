/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import React from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddeleware from 'redux-saga';

import AllReducers from './src/reducers';
import rootSaga from './src/sagas';

const sagaMiddleware= createSagaMiddeleware();
let store=createStore(AllReducers,applyMiddleware(sagaMiddleware));

const MyApp=()=>{
    return(
    <Provider store={store} >
        <App />
    </Provider>
    )
}
sagaMiddleware.run(rootSaga);


AppRegistry.registerComponent(appName, () => MyApp);
