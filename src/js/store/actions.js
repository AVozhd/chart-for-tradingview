import * as types from './actionsTypes';

export const changeChartType = (newChartType) => {
  return {
    type: types.ACTION_CHANGE_CHART_TYPE,
    payload: newChartType
  };
};

export const recalcSvgParams = (newSvgParams) => {
  return {
    type: types.ACTION_RECALC_SVG_PARAMS,
    payload: newSvgParams
  };
};

export const changeFormState = (newFormState) => {
  return {
    type: types.ACTION_CHANGE_FORM_STATE,
    payload: newFormState
  };
};

export const removeBlockFromBuyChart = (newChartState) => {
  return {
    type: types.ACTION_REMOVE_BLOCK_FROM_BUY_CHART,
    payload: newChartState
  };
};

export const addBlockToBuyChart = (newChartState) => {
  return {
    type: types.ACTION_ADD_BLOCK_TO_BUY_CHART,
    payload: newChartState
  };
};

export const editBlockParamsBuyChart = (newBlockParams) => {
  return {
    type: types.ACTION_EDIT_BLOCK_PARAMS_BUY_CHART,
    payload: newBlockParams
  };
};

export const removeBlockFromSellChart = (newChartState) => {
  return {
    type: types.ACTION_REMOVE_BLOCK_FROM_SELL_CHART,
    payload: newChartState
  };
};

export const addBlockToSellChart = (newChartState) => {
  return {
    type: types.ACTION_ADD_BLOCK_TO_CHART_SELL_CHART,
    payload: newChartState
  };
};

export const editBlockParamsSellChart = (newBlockParams) => {
  return {
    type: types.ACTION_EDIT_BLOCK_PARAMS_SELL_CHART,
    payload: newBlockParams
  };
};

export const changeDropdownTitle = (newDropdownTitle) => {
  return {
    type: types.ACTION_CHANGE_DROPDOWN_TITLE,
    payload: newDropdownTitle
  };
};
