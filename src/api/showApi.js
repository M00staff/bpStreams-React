// import { showSuccess } from '../redux/showReducer';
// TODO - add error handling

export default function grabShowData(dispatch, show, title) {
  fetch(`./shows?show=${show}`)
    .then(response => response.json()).then((json) => {
      // grab outer level directory info
      const setList = [];
      const baseUrl = json.d1;
      const dir = json.dir;

      // iterate through files and keep whats needed
      json.files.forEach((data) => {
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
      return {setList: sortedList, title: title}
      // dispatch(showSuccess(sortedList, title));
    });
}