/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/config';
import Root from './components/Root';
import lsService from './services/ls-service';
import * as config from './consts/app-config';
import { set_login_status } from './actions/auth-actions';

const ls = lsService();

const token = ls.get(config.TOKEN_NAME);
const data = { token: token, isLoggedIn: false };

if (token) {
  data.isLoggedIn = true;
}

export const store = configureStore();
store.dispatch(set_login_status(data));

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
