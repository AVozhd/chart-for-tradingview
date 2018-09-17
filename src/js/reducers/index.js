import {combineReducers} from 'redux';
import blocks from './svgReducer';

const rootReducer = combineReducers({
  blocks
});

export default rootReducer;
