import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Game from "./pages/Game";
import Layout from "./pages/Layout";
import gameApp from './reducers';

const app = document.getElementById('app');
let store = createStore(gameApp)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Game}></IndexRoute>
      </Route>
    </Router>
  </Provider>,
app);
