import * as types from './actionTypes';

export function createBlock(block) {
  return { type: types.CREATE_BLOCK, block};
}

