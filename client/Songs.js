import React from 'react';

class Songs extends React.Component {


  componentWillMount() {
    console.log(this.props.setList);
  }


  songPick(song) {
    console.log(song);
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

          <span className="player-song-title"></span>
          <audio controls autoPlay="true" className="player" preload="auto"></audio>

      </div>
    )
  }
}

export default Songs
