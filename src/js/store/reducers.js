import * as types from './actionsTypes';
import initialAppState from './initialAppState';

export const rootReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case types.ACTION_CHANGE_CHART_TYPE:
      return {
        ...state,
        chartType: action.payload,
        selectedChart: action.payload
      };
    case types.ACTION_CHANGE_FORM_STATE:
      return {
        ...state,
        form: action.payload,
        formDropdown: initialAppState.formDropdown
      };
    case types.ACTION_RECALC_SVG_PARAMS:
      return { ...state, svg: action.payload };
    case types.ACTION_REMOVE_BLOCK_FROM_BUY_CHART:
      return { ...state, buyChart: action.payload };
    case types.ACTION_EDIT_BLOCK_PARAMS_BUY_CHART:
      return { ...state, buyChart: action.payload };
    case types.ACTION_ADD_BLOCK_TO_BUY_CHART:
      return { ...state, buyChart: action.payload };
    case types.ACTION_REMOVE_BLOCK_FROM_SELL_CHART:
      return { ...state, sellChart: action.payload };
    case types.ACTION_EDIT_BLOCK_PARAMS_SELL_CHART:
      return { ...state, sellChart: action.payload };
    case types.ACTION_ADD_BLOCK_TO_CHART_SELL_CHART:
      return { ...state, sellChart: action.payload };
    case types.ACTION_CHANGE_DROPDOWN_TITLE:
      return {
        ...state,
        formDropdown: {
          ...state.formDropdown,
          first: {
            ...state.formDropdown.first,
            title: action.payload
          }
        }
      };
  }
  return state;
};
