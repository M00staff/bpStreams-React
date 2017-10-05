// Pure function; returns Object; takes in previous state, action dispatched and returns next state

const showPicked = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_SHOW':
      return [
        ...state,
        {
          show: action.show,
        },
      ];

    default:
      return state;
  }
};

export default showPicked;
