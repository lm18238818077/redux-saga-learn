import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReduces from './reduces'
import mySaga from './sagas'
import './index.css';
import App from './App';

function logger(store) {
  return function(next) {
    return function(action) {
      console.log('logger start');
      let result = next(action);
      console.log('logger end');
      return result
    }
  }
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReduces,
  composeWithDevTools(applyMiddleware(sagaMiddleware,logger))
)

sagaMiddleware.run(mySaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);