import React from 'react';
import Songs from './Songs'
// import ReactDOM from 'react-dom';
// import { Years } from './Years';

class Shows extends React.Component {

  constructor() {
    super();
    this.state = { setList: null }
  }

  componentWillMount() {
    // console.log(this.props.shows);
  }


  pickShow(show, title) {
    // console.log(show);
    fetch(`./shows?show=${show}`)
    .then(response => response.json()).then(json => {

      // grab outer level directory info
      let setList = [];
      const baseUrl = json.d1
      const dir = json.dir

      // iterate through files and keep whats needed
      json.files.map(data => {
       const fileName = data.name;
       const songName = data.title;
       //  const track = data.track;

       const ext = fileName.substr(fileName.lastIndexOf('.') + 1);
       if ((ext === 'ogg' || ext === 'mp3') && songName !== undefined) {
         setList.push({songTitle: songName, songFile: fileName, deeOne: baseUrl, directory: dir, songSource: `http://${baseUrl}${dir}/${fileName}`})

        // sort playlist
        setList.sort((a, b) => {
          if (a.songFile > b.songFile) {
            return 1;
        }
          if (a.songFile < b.songFile) {
            return -1;
        }
          return 0;
        })


       }
     })
      this.setState({ setList: setList, title: title })
      // jump to playlist
      window.scrollTo(0, 250);
      console.log(this.state.setList);
    })
  }


  displayShows(shows) {
    return (
      shows.map((data, index) =>
        <a className='allShows' key={index} onClick={ this.pickShow.bind(this, data.identifier, data.title) }>{ data.title }</a>
      )
    )
  }


  render() {
    return (
      <div>

        {this.state.setList
          ?
            <Songs
              setList={this.state.setList}
              title={this.state.title}
            />
          :
            null
        }


    { this.displayShows(this.props.shows) }

      </div>
    )
  }
}

export { Shows }
