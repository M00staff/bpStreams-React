// Pure function; returns Object; takes in previous state, action dispatched and returns next state

export default function getShows(state, action) {
  const shows = action.shows;
  // console.log(shows);
  switch (action.type) {
    case 'SELECT_YEAR':
      return shows;

    default:
      return 'empty';
  }
}
