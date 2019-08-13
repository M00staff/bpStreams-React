import gql from 'graphql-tag';
import { yearFail, yearSuccess } from '../Reducer';
import { client } from '../ApolloClient';

// how to type dispatch?
export default function grabYearData(dispatch: any, year: number, row: number) {
  // does this even do anything?
  interface ShowListItem {
    date: string;
    identifier: string;
    title: string;
    years: string;
  }

  const query = gql`
    query getShows {
      shows @rest(type: "Shows", path: "/years?year=${year}&row=${row}", method: "GET") {
        response @type(name: "Response") {
          docs @type(name: "ShowList") {
            date
            identifier
            title
            year
          }
        }
      }
    }
  `;

// destructure response
  client.query({ query, fetchPolicy: 'no-cache' }).then(response => {
    console.log(response)
    const showList = response.data.shows.response.docs;
    if (!response) {
      console.log('failed')
      dispatch(yearFail());
    }
      // sort response by date
      showList.sort((a: ShowListItem, b: ShowListItem) => {
        if (a.date > b.date) {
          return 1;
        }
        if (a.date < b.date) {
          return -1;
        }
        return 0;
      });
    dispatch(yearSuccess(showList));
  })

}