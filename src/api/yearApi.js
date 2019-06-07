import { yearFail, yearSuccess } from '../reducers/yearReducer';

export default function grabYearData(dispatch, year, row) {
  const showList = [];
  return fetch(`http://localhost:8080/years?year=${year}&row=${row}`)
    .then(response => response.json())
    .then((json) => {
      console.log(json)
      if (!json) {
        console.log('failed')
        dispatch(yearFail());
      }
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
      dispatch(yearSuccess(showList));
    });
}