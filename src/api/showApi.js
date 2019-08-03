import gql from 'graphql-tag'
import { showSuccess } from '../Reducer';
import { client } from '../ApolloClient';
// TODO - add error handling

export default function grabShowData(dispatch, show, title) {

  const query = gql`
    query getShow {
      show@rest(type: "Show", path: "/shows?show=${show}") {
        d1
        d2
        dir
        files
        metadata
        reviews
      }
    }
  `;

  client.query({ query, fetchPolicy: 'no-cache' }).then(response => {
    console.log(response.data.show)
    // grab outer level directory info
    const setList = [];
    const baseUrl = response.data.show.d1;
    const dir = response.data.show.dir;
  
    // iterate through files and keep whats needed
    response.data.show.files.forEach((data) => {
      const fileName = data.name;
      const songName = data.title;
      //  const track = data.track;
  
      const ext = fileName.substr(fileName.lastIndexOf('.') + 1);
      if ((ext === 'ogg' || ext === 'mp3') && songName !== undefined) {
        setList.push({ songTitle: songName, songFile: fileName, deeOne: baseUrl, directory: dir, songSource: `http://${baseUrl}${dir}/${fileName}` });
      }
    });
    // sort playlist
    const sortedList = setList.sort((a, b) => {
      if (a.songFile > b.songFile) return 1;
      if (a.songFile < b.songFile) return -1;
      return 0;
    });
    dispatch(showSuccess(sortedList, title));
  })

}