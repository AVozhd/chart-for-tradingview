import * as types from './actionsTypes';

export const changeChartType = (newChartType) => {
  return {
    type: types.ACTION_CHANGE_CHART_TYPE,
    payload: newChartType
  };
};

export const addBlockToChart = (newChartState) => {
  return {
    type: types.ACTION_ADD_BLOCK_TO_CHART,
    payload: newChartState
  };
};

export const recalcSvgParams = (newSvgParams) => {
  return {
    type: types.ACTION_RECALC_SVG_PARAMS,
    payload: newSvgParams
  };
};

export const removeBlockFromChart = (newChartState) => {
  return {
    type: types.ACTION_REMOVE_BLOCK_FROM_CHART,
    payload: newChartState
  };
};
