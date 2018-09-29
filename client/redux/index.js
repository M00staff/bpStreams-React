// rootReducer, combines reducers - we name it index so we can just point to the directory instead of the file

import { combineReducers } from 'redux';
import shows from './yearReducer';
import songs from './showReducer';

const rootReducer = combineReducers({
  shows,
  songs,
});

export default rootReducer;
