import { yearFail, yearSuccess } from '../reducers/yearReducer';

export default function grabYearData(dispatch, year, row) {
  console.log(year)
  const showList = [];
  return fetch(`./years?year=${year}&row=${row}`)
  // return get(`https://archive.org/advancedsearch.php?q=BrothersPast,%20year:${year}&fl%5B%5D=year&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows=${row}&page=1&output=json`
  // , {
  //     credentials: 'include',
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json",
  //       "Access-Control-Allow-Origin": "*"
  //     }
  // }
  // )
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