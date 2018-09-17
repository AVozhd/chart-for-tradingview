import * as types from '../actions/actionTypes';

export default function svgReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_BLOCK:
      return [...state,
        Object.assign({}, action.block)
      ];
    
    default:
      return state;
  }
}
