import React from 'react';
import { render } from 'react-dom';
import {Router, Route, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import Navigation from './presentational/navigation.component';
import routes from './routes';

render(
  <Provider store={store}>
    <div>
      <Router history={hashHistory} routes={routes}>
        <h1>Inicjalizacja projektu</h1>
        <DevTools/>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
);
