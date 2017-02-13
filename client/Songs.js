import React from 'react';

class Songs extends React.Component {


  componentWillMount() {
    console.log(this.props.setList);
  }


  renderSongs(songs) {
    return (
      songs.map((data, index) =>
        <div className='allSongs'>{data.songTitle}</div>
      )
    )
  }


  render() {
    return (
      <div className='allSongsContainer'>{ this.renderSongs(this.props.setList) }</div>
    )
  }
}

export default Songs
