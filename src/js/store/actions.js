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

export const changeDropdownLeftFirstTitle = (newDropdownTitle) => {
  return {
    type: types.ACTION_CHANGE_DROPDOWN_LEFT_FIRST_TITLE,
    payload: newDropdownTitle
  };
};

export const changeDropdownLeftSecondTitle = (newDropdownTitle) => {
  return {
    type: types.ACTION_CHANGE_DROPDOWN_LEFT_SECOND_TITLE,
    payload: newDropdownTitle
  };
};

export const changeDropdownRightFirstTitle = (newDropdownTitle) => {
  return {
    type: types.ACTION_CHANGE_DROPDOWN_RIGHT_FIRST_TITLE,
    payload: newDropdownTitle
  };
};

export const changeDropdownRightSecondTitle = (newDropdownTitle) => {
  return {
    type: types.ACTION_CHANGE_DROPDOWN_RIGHT_SECOND_TITLE,
    payload: newDropdownTitle
  };
};

export const saveParamsToBuyChartBlock = (newBlockParams) => {
  return {
    type: types.ACTION_SAVE_PARAMS_TO_BUY_CHART_BLOCK,
    payload: newBlockParams
  };
};

export const saveParamsToSellChartBlock = (newBlockParams) => {
  return {
    type: types.ACTION_SAVE_PARAMS_TO_SELL_CHART_BLOCK,
    payload: newBlockParams
  };
};

export const getScript = (something) => {
  return {
    type: types.ACTION_GET_SCRIPS,
    payload: something
  };
};

export const hideResultScript = (newPreState) => {
  return {
    type: types.ACTION_HIDE_RESULT_SCRIPT,
    payload: newPreState
  };
};

export const changeDropdownLeftThirdTitle = (newDropdownTitle) => {
  return {
    type: types.ACTION_CHANGE_DROPDOWN_LEFT_THIRD_TITLE,
    payload: newDropdownTitle
  };
};

export const changeDropdownRightThirdTitle = (newDropdownTitle) => {
  return {
    type: types.ACTION_CHANGE_DROPDOWN_RIGHT_THIRD_TITLE,
    payload: newDropdownTitle
  };
};

export const changeAddsState = (newState) => {
  return {
    type: types.ACTION_CHANGE_ADDS_STATE,
    payload: newState
  };
};
