import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class Songs extends React.Component {

  constructor() {
    super();
    this.state = { track: null }
  }

  componentWillMount() {
    // console.log(this.props.setList);
    // this.setState({
    //   track: this.props.setList[0].songSource,
    //   title: this.props.setList[0].songTitle
    // })
  }


  songPick(song, index) {

    let nextSongs = [];

    // iterate through the setlist
    for (let i = 0; i < this.props.setList.length; i++) {
      // grab song index that was picked
      if (song === this.props.setList[i]) {
        let songCount = i;
        // iterate through remaining songs
        for (let x = songCount; x < this.props.setList.length; x++) {
          nextSongs.push(this.props.setList[x])
        }
      }
    }

    this.setState({
      track: song.songSource,
      title: song.songTitle,
      next: nextSongs
    });

  }


  renderSongs(songs) {
    return (
      songs.map((data, index) =>
        <div className='allSongs' key={index} onClick={ this.songPick.bind(this, data, index) } >{data.songTitle}</div>
      )
    )
  }


  render() {
    return (
      <div className='allSongsContainer'>{ this.renderSongs(this.props.setList) }

          <ReactAudioPlayer
            src={ this.state.track }
            style={{ marginTop: '1em' }}
            autoPlay
          />

          <p>{ this.state.title }</p>

      </div>
    )
  }
}

export default Songs
