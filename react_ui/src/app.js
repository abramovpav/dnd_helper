import React, {Component} from 'react';
import Dashboard from './components/dashboard';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {Route} from 'react-router';
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux';
import reducers from './reducers';
import NavBarTop from './components/navigation/navbar-top';


const history = createHistory({basename: '/r'});
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div id="main-container">
            <NavBarTop/>
            <Route exact path="/" component={Dashboard}/>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}
