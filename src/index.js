import 'bootstrap';
import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import SimpleApp from './js/SimpleApp';

const initialState = {
  chartType: 'buy',
  svg: {
    width: 300,
    height: 400
  },
};

const ACTION_CHANGE_CHART_TYPE = 'ACTION_CHANGE_CHART_TYPE';

const changeChartType = (newChartType) => {
  return {
    type: types.ACTION_CHANGE_CHART_TYPE,
    payload: newChartType
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_CHART_TYPE:
      return { ...state, chartType: action.payload };
  }
  return state;
};

const store = createStore(rootReducer);

const putStateToProps = (state) => {
  return {
    chartType: state.chartType,
    svg: {
      width: state.svg.width,
      height: state.svg.height,
    },
  };
};

const putActionsToProps = (dispatch) => {
  return {
    changeChartType: bindActionCreators(changeChartType, dispatch),
  }
};

const WrappedMainComponent = connect(putStateToProps, putActionsToProps)(SimpleApp);

ReactDOM.render(
  <Provider store={store}>
    <WrappedMainComponent />
  </Provider>,
  document.getElementById('root')
);
