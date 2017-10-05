// Actions = Objects that describe the change; needs a type property (cannot be undefined)
// We are going to import these into thier components, then call them as functions (this.props.actionName)
// We use Dispatch Action to Props to send them back up
// Then it will go to the reducer, fire and call the switch statements and return the new state object

export const yearPicked = (year) => {
  return {
    type: 'SELECT_YEAR',
    year,
  };
};

export const showPicked = (show) => {
  return {
    type: 'SELECT_SHOW',
    show,
  };
};

export const songPicked = (song) => {
  return {
    type: 'SELECT_SONG',
    song,
  };
};
