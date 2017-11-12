import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import reducers from './reducers';

import ComingSoon from './components/coming-soon';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from "redux-devtools-extension";


const history = createHistory({basename: '/study' });
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers(reducers), composeWithDevTools(applyMiddleware(middleware))
);


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div id="main-container">
        <NavbarLeft/>
        <div id="container">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/dashboard"/>}/>
            <Route exact path="/dashboard" component={ComingSoon}/>
          </Switch>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

