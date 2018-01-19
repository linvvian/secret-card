import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

import '@xo-union/tk-css-essentials';
import { init } from '@xo-union/tk-component-icons/lib//assets/setup';

import Routes from './routes'
import loader from './components/Loader'
import configureStore from './store'
let { store, persistor } = configureStore()

init();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={loader} persistor={persistor}>
      <AppContainer>
          <Routes />
      </AppContainer>
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    ReactDOM.render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer>
            <NextApp/>
          </AppContainer>
        </PersistGate>
      </Provider>,
      document.getElementById('app')
    );
  });
}
