import * as types from './actionsTypes';

const initialState = {
  chartType: 'buy',
  selectedChart: 'buy',
  svg: {
    width: 300,
    height: 400
  },
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ACTION_CHANGE_CHART_TYPE:
      return { ...state, chartType: action.payload };
  }
  return state;
};
