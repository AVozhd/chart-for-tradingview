import 'bootstrap';
import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './js/store/configureStore';
import {Provider} from 'react-redux';
import App from './js/App';
import SimpleApp from './js/SimpleApp';

// const store = configureStore();

ReactDOM.render(<SimpleApp />, document.getElementById('root'));

/*ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);*/
