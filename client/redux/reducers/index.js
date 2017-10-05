// rootReducer, combines reducers - we name it index so we can just point to the directory instead of the file

import { combineReducers } from 'redux';
import yearPicked from './year';
import showPicked from './show';
import songPicked from './song';

const rootReducer = combineReducers({
  yearPicked,
  showPicked,
  songPicked,
});

export default rootReducer;
