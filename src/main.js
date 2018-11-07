import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import App from './app';
import store from './store';
import history from './history';
import AuthorizationService from "./module/authorization/service";
import { authorize } from "./module/authorization/action";
import './main.scss';

if (AuthorizationService.isAuthenticated()) {
    const token = localStorage.getItem('token');

    if (token) {
        store.dispatch(authorize(token));
    }
}

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);