// Pure function; returns Object; takes in previous state, action dispatched and returns next state

// migth be able to drop this
async function grabShows(action) {
  const shows = [];
  await fetch(`./years?year=${action.year}&row=${action.row}`)
    .then(response => response.json()).then((json) => {
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

      // trigger rendering
      // this.setState({ shows: json.response.docs });
      shows.push(json.response.docs);
      // jump to show list
      window.scrollTo(0, 475);
    });
  console.log(shows);
  return shows;
}


// ***** stuck here - looks like the return hits before the data is fetched
// ***** tried promises and aysnc/await
const getShows = (state = [], action, shows = []) => {
  switch (action.type) {
    case 'SELECT_YEAR':
      fetch(`./years?year=${action.year}&row=${action.row}`)
        .then(response => response.json()).then((json) => {
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

          // trigger rendering
          // this.setState({ shows: json.response.docs });
          shows.push(json.response.docs);
          // jump to show list
          window.scrollTo(0, 475);
        });
      // console.log(shows);

      return [
        ...state,
        {
          shows,
        },
      ];

    default:
      return {
        shows: getShows,
      };
  }
};

export default getShows;
