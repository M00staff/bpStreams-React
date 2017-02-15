import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class Songs extends React.Component {

  constructor() {
    super();
    this.state = { track: null }
  }

  componentWillMount() {
    // console.log(this.props.setList);
  }


  songPick(song) {
    console.log(song);
    this.setState({ track: song.songSource })
  }


  renderSongs(songs) {
    return (
      songs.map((data, index) =>
        <div className='allSongs' key={index} onClick={this.songPick.bind(this, data)} >{data.songTitle}</div>
      )
    )
  }


  render() {
    return (
      <div className='allSongsContainer'>{ this.renderSongs(this.props.setList) }

          <ReactAudioPlayer
            src={ this.state.track }
            autoPlay
          />

      </div>
    )
  }
}

export default Songs
