import React from 'react';
import ReactAudioPlayer from '../react-audio-player';

class Songs extends React.Component {

  constructor() {
    super();
    this.state = { track: null };
    this.nextJam = this.nextJam.bind(this); // having scope issues with this.setState, need to bind this for it to work
  }


  songPick(song, index) {

    this.setState({
      track: song.songSource,
      title: song.songTitle,
      songIndex: index,
    });

    // let nextSongs = []
    //
    // // maybe dont need since i can pass setlist down ---
    // // iterate through the setlist
    // for (let i = 0; i < this.props.setList.length; i++) {
    //   // grab song index that was picked
    //   if (song === this.props.setList[i]) {
    //     let songCount = i;
    //     // iterate through remaining songs
    //     for (let x = songCount; x < this.props.setList.length; x++) {
    //       nextSongs.push(this.props.setList[x])
    //     };
    //     this.setState({ nextSongs: nextSongs })
    //   }
    // }

  }


  renderSongs(songs) {
    return (
      songs.map((data, index) =>
        <div className='allSongs' key={index} onClick={ this.songPick.bind(this, data, index) } >{data.songTitle}</div>
      )
    )
  }


  nextJam(setList, index) {
    const songCount = index + 1;
    // possible alt method for resetting last song
    // const songCount = (index + 1) % setList.length;
    const len = setList.length;

    if (songCount >= len) {
      this.setState({
        track: setList[0].songSource,
        title: setList[0].songTitle,
        songIndex: 0,
      })
    } else {
      this.setState({
        track: setList[songCount].songSource,
        title: setList[songCount].songTitle,
        songIndex: index + 1,
      });
    }
  }


  render() {
    return (
      <div className='allSongsContainer'>
        <div className='showHeading'> {this.props.title} </div>
          { this.renderSongs(this.props.setList) }

          <ReactAudioPlayer
            src={ this.state.track }
            style={{ marginTop: '1em' }}
            setList={this.props.setList}
            songIndex={this.state.songIndex}
            nextJam={this.nextJam}
            autoPlay
          />

        <div style={{ color: 'blue', fontFamily: '"Comic Sans MS", cursive, sans-serif' }}>
          { this.state.title }
        </div>

      </div>
    )
  }
}

export default Songs
