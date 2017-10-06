import React from 'react';
import Songs from './Songs';


class Shows extends React.Component {
  constructor() {
    super();
    this.state = { setList: null };
  }

  pickShow(show, title) {
    fetch(`./shows?show=${show}`)
      .then(response => response.json()).then((json) => {
        // grab outer level directory info
        const setList = [];
        const baseUrl = json.d1;
        const dir = json.dir;

        // iterate through files and keep whats needed
        json.files.map((data) => {
          const fileName = data.name;
          const songName = data.title;
          //  const track = data.track;

          const ext = fileName.substr(fileName.lastIndexOf('.') + 1);
          if ((ext === 'ogg' || ext === 'mp3') && songName !== undefined) {
            setList.push({ songTitle: songName, songFile: fileName, deeOne: baseUrl, directory: dir, songSource: `http://${baseUrl}${dir}/${fileName}` });

            // sort playlist
            setList.sort((a, b) => {
              if (a.songFile > b.songFile) {
                return 1;
              }
              if (a.songFile < b.songFile) {
                return -1;
              }
              return 0;
            });
          }
        });
        this.setState({ setList, title });
        // jump to playlist
        window.scrollTo(0, 250);
        // console.log(this.state.setList);
      });
  }


  displayShows(shows) {
    return (
      shows.map(data =>
        <a className="allShows" key={data.identifier} role="presentation" onClick={() => this.pickShow(data.identifier, data.title)}>{data.title}</a>,
      )
    );
  }


  render() {
    return (
      <div>

        {this.state.setList &&
          <Songs
            setList={this.state.setList}
            title={this.state.title}
          />
        }

        {this.displayShows(this.props.shows)}

      </div>
    );
  }
}

export default Shows;
