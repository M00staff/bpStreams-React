import React from 'react';
import PropTypes from 'prop-types';
// import show from '../reducers/showReducer';
import ReactAudioPlayer from '../react-audio-player';


class SongComponent extends React.Component {
  constructor() {
    super();
    this.state = { track: null, songs: [] };
    this.nextJam = this.nextJam.bind(this); // having scope issues with this.setState, need to bind this for it to work
  }

  songPick(song, index) {
    this.setState({
      track: song.songSource,
      title: song.songTitle,
      songIndex: index,
    });
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
      });
    } else {
      this.setState({
        track: setList[songCount].songSource,
        title: setList[songCount].songTitle,
        songIndex: index + 1,
      });
    }
  }

  renderSongs(songs) {
    return (
      songs && songs.map((data, index) =>
        <div className="allSongs" key={data.songSource} onClick={() => this.songPick(data, index)} role="presentation">{data.songTitle}</div>,
      )
    );
  }

  render() {
    return (
      this.state.songs.setList ?
        <div className="allSongsContainer">
          <div className="showHeading"> {this.state.songs.showTitle} </div>
          {this.renderSongs(this.state.songs.setList)}

          <ReactAudioPlayer
            src={this.state.track}
            style={{ marginTop: '1em' }}
            setList={this.state.songs.setList}
            songIndex={this.state.songIndex}
            nextJam={this.nextJam}
            autoPlay
          />

          <div style={{ color: 'blue', fontFamily: '"Comic Sans MS", cursive, sans-serif' }}>
            { this.state.title }
          </div>

        </div>
        :
        <div />
    );
  }
}

SongComponent.propTypes = {
  songs: PropTypes.object,
};

SongComponent.defaultProps = {
  songTitle: null,
  songs: null,
};

// const mapStateToProps = songs => songs;

// const SongContainer = connect(mapStateToProps)(SongComponent);
export default SongComponent