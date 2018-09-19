import * as types from './actionsTypes';

export const changeChartType = (newChartType) => {
  return {
    type: types.ACTION_CHANGE_CHART_TYPE,
    payload: newChartType
  };
};
