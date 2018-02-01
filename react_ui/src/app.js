import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import Dashboard from './pages/Dashboard';
import HeroDetail from './pages/HeroDetail';
import reducer from './reducers/reducers';
import NavBarTop from './components/navigation/navbar-top';


const history = createHistory({ basename: '/r' });
const middleware = routerMiddleware(history);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(middleware, thunk)));


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div id="main-container">
            <NavBarTop />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/heroes/:id" component={HeroDetail} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
