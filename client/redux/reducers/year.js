// Pure function; returns Object; takes in previous state, action dispatched and returns next state

const yearPicked = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_YEAR':
      return [
        ...state,
        {
          year: action.year,
        },
      ];

    default:
      return state;
  }
};

export default yearPicked;
