import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './client/redux/reducers';
import App from './client/App';
import './styles.css';

// Wrap the app in Provider and create the Redux Store in the Entry Point
/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>, document.getElementById('app'));
