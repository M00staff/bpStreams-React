// Pure function; returns Object; takes in previous state, action dispatched and returns next state

const songPicked = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_SONG':
      return [
        ...state,
        {
          song: action.song,
        },
      ];

    default:
      return state;
  }
};

export default songPicked;
