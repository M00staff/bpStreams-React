import { combineReducers } from 'redux';
import getShows from './getShows';
// import { routerReducer } from 'react-router-redux'
// import filtersReducer from './filtersReducer'

const rootReducer = combineReducers({
  shows: getShows,
  // filters: filtersReducer,
  // routing: routerReducer,
});

export default rootReducer;
