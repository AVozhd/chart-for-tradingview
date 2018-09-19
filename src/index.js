import 'bootstrap';
import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { rootReducer } from'./js/store/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MainComponent from './js/components/MainComponent';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <MainComponent />
  </Provider>,
  document.getElementById('root')
);
