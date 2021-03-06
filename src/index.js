import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Router, Route,Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();
import { Provider } from 'react-redux';
import store from './redux/store/store';

import 'flex.css/dist/data-flex.css';
import './index.css';
import './static/iconfont/style.css';

import App from './App';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Todo from "./pages/todo/Todo";
import Setting from "./pages/setting/Setting";

render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={Todo}></Route>
          <Route path="/todo" component={Todo}></Route>
          <Route path="/setting" component={Setting}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);