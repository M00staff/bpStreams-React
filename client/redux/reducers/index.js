// rootReducer, combines reducers - we name it index so we can just point to the directory instead of the file

import { combineReducers } from 'redux';
import getShows from './getShows';
import showPicked from './show';
import songPicked from './song';

const rootReducer = combineReducers({
  getShows,
  showPicked,
  songPicked,
});

export default rootReducer;
