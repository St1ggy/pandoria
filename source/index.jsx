import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import './styles/general.less';

import history from './history';
import store from './store';

import AppView from './views/AppView';
import MainView from './views/MainView';
import Wiki from './views/Wiki';
import CharGen from './views/CharGen';

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={AppView}>
                <IndexRoute component={MainView} />
                <Route path='/wiki' component={Wiki} />
                <Route path='/chargen' component={CharGen} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
