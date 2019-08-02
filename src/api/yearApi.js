import gql from 'graphql-tag';
import { yearFail, yearSuccess } from '../Reducer';
import { client } from '../ApolloClient';

export default function grabYearData(dispatch, year, row) {

  // const query = gql`
  //   query getShows {
  //     shows@rest(type: "Shows", path: "/years?year=${year}&row=${row}") {
  //       response 
  //     }
  //   }
  // `;

  const query = gql`
    query getShows {
      shows @rest(type: "Shows", path: "/years?year=${year}&row=${row}") {
        __typename: Shows
        response {
          __typename: Shows
          docs @type(name: "Show") {
            date
            identifier
            title
            year
          }
        }
      }
    }
  `;

  client.query({ query }).then(response => {
    console.log(response)
    if (!response) {
      console.log('failed')
      dispatch(yearFail());
    }
      // sort response by date
      response.data.shows.response.docs.sort((a, b) => {
        if (a.date > b.date) {
          return 1;
        }
        if (a.date < b.date) {
          return -1;
        }
        return 0;
      });
    dispatch(yearSuccess(response.data.shows.response.docs));
  })

}