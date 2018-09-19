import * as types from './actionTypes';

export const changeChartType = (newChartType) => {
  console.log(newChartType);
  return {
    type: types.ACTION_CHANGE_CHART_TYPE,
    payload: newChartType
  };
};
