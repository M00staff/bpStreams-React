// Actions = Objects that describe the change; needs a type property (cannot be undefined)
// We are going to import these into thier components, then call them as functions (this.props.actionName)
// We use Dispatch Action to Props to send them back up
// Then it will go to the reducer, fire and call the switch statements and return the new state object

// THUNK TO RETURN THIS ASYNC STUFF NEXT
function fetchShows(year, row) {
  const showList = [];
  return fetch(`./years?year=${year}&row=${row}`)
    .then(response => response.json())
    .then((json) => {
      // sort response by date
      json.response.docs.sort((a, b) => {
        if (a.date > b.date) {
          return 1;
        }
        if (a.date < b.date) {
          return -1;
        }
        return 0;
      });
      showList.push(json.response.docs);
    });
}

export function yearPicked(year, row) {
  const showList = [];
  fetch(`./years?year=${year}&row=${row}`)
    .then(response => response.json())
    .then((json) => {
      // sort response by date
      json.response.docs.sort((a, b) => {
        if (a.date > b.date) {
          return 1;
        }
        if (a.date < b.date) {
          return -1;
        }
        return 0;
      });
      showList.push(json.response.docs);
    });

  return ({
    type: 'SELECT_YEAR',
    shows: showList,
  });
}


export const showPicked = (show) => {
  return (dispatch, getState) => {
    getState();
    dispatch({
      type: 'SELECT_SHOW',
      show,
    });
  };
};

export const songPicked = (song) => {
  return {
    type: 'SELECT_SONG',
    song,
  };
};
