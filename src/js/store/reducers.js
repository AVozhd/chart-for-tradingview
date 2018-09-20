import * as types from './actionsTypes';

const initialAppState = {
  chartType: 'buy',
  selectedChart: 'buy',
  svg: {
    width: 300,
    height: 400,
  },
  form: {
    active: false,
    top: 0,
  },
  buyChart: {
    arrows: [
      {
        x1: 0,
        y1: 50,
        x2: 0,
        y2: 100,
      },
      {
        x1: 0,
        y1: 200,
        x2: 0,
        y2: 250,
      }
    ],
    blocks: [
      {
        key: 1,
        blockType: 'simple',
        title: 'BUY',
        x: 0,
        y: 0,
        width: 100,
        height: 50,
      },
      {
        key: 2,
        blockType: 'complex',
        x: 0,
        y: 100,
        width: 250,
        height: 100,
        options: {
          left: {
            title: 'RS1',
            param1: 'left params',
          },
          right: {
            title: 'BB',
            param1: 'right params',
          },
        },
      },
      {
        key: 3,
        blockType: 'simple',
        title: 'finish',
        x: 0,
        y: 250,
        width: 100,
        height: 50,
      }
    ],
  },
};

export const rootReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case types.ACTION_CHANGE_CHART_TYPE:
      return { ...state, chartType: action.payload, selectedChart: action.payload };
    case types.ACTION_ADD_BLOCK_TO_CHART:
      return { ...state, buyChart: action.payload };
    case types.ACTION_RECALC_SVG_PARAMS:
      return { ...state, svg: action.payload };
    case types.ACTION_REMOVE_BLOCK_FROM_CHART:
      return { ...state, buyChart: action.payload };
    case types.ACTION_EDIT_BLOCK_PARAMS:
      return { ...state, buyChart: action.payload };
    case types.ACTION_CHANGE_FORM_STATE:
      return { ...state, form: action.payload };
  }
  return state;
};
