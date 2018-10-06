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
    case types.ACTION_CHANGE_DROPDOWN_LEFT_FIRST_TITLE:
      return {
        ...state,
        formDropdown: {
          ...state.formDropdown,
          left: {
            ...state.formDropdown.left,
            first: {
              ...state.formDropdown.left.first,
              title: action.payload,
            }
          }
        }
      };
    case types.ACTION_CHANGE_DROPDOWN_LEFT_SECOND_TITLE:
      return {
        ...state,
        formDropdown: {
          ...state.formDropdown,
          left: {
            ...state.formDropdown.left,
            second: {
              ...state.formDropdown.left.second,
              title: action.payload,
            }
          }
        }
      };
    case types.ACTION_CHANGE_DROPDOWN_LEFT_THIRD_TITLE:
      return {
        ...state,
        formDropdown: {
          ...state.formDropdown,
          left: {
            ...state.formDropdown.left,
            third: {
              ...state.formDropdown.left.third,
              title: action.payload,
            }
          }
        }
      };
    case types.ACTION_CHANGE_DROPDOWN_RIGHT_FIRST_TITLE:
      return {
        ...state,
        formDropdown: {
          ...state.formDropdown,
          right: {
            ...state.formDropdown.right,
            first: {
              ...state.formDropdown.left.first,
              title: action.payload,
            }
          }
        }
      };
    case types.ACTION_CHANGE_DROPDOWN_RIGHT_SECOND_TITLE:
      return {
        ...state,
        formDropdown: {
          ...state.formDropdown,
          right: {
            ...state.formDropdown.right,
            second: {
              ...state.formDropdown.left.second,
              title: action.payload,
            }
          }
        }
      };
    case types.ACTION_CHANGE_DROPDOWN_RIGHT_THIRD_TITLE:
      return {
        ...state,
        formDropdown: {
          ...state.formDropdown,
          right: {
            ...state.formDropdown.right,
            third: {
              ...state.formDropdown.left.third,
              title: action.payload,
            }
          }
        }
      };
    case types.ACTION_SAVE_PARAMS_TO_BUY_CHART_BLOCK:
      return {
        ...state,
        buyChart: {
          ...state.buyChart,
          blocks: action.payload
        },
        form: initialAppState.form,
      };
    case types.ACTION_SAVE_PARAMS_TO_SELL_CHART_BLOCK:
      return {
        ...state,
        sellChart: {
          ...state.sellChart,
          blocks: action.payload
        },
        form: initialAppState.form,
      };
    case types.ACTION_GET_SCRIPS:
      return { ...state, pre: action.payload };
    case types.ACTION_HIDE_RESULT_SCRIPT:
      return { ...state, pre: action.payload };
    case types.ACTION_CHANGE_ADDS_STATE:
      return {
        ...state,
        adds: {
          ...state.adds,
          active: action.payload
        }
      };
  }
  return state;
};
