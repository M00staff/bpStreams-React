import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from '../react-audio-player';
import { StateContext } from '../Provider';
import { SetList } from '../Interfaces';

const SongComponent = () => {
  const { state } = useContext(StateContext);
  const [track, setTrack] = useState<string | undefined>(undefined);
  const [index, setIndex] = useState<number | undefined>(undefined);
  const [title, setTitle] = useState<string | undefined>(undefined);

  const songPick = (song: SetList, index: number) => {
    setTrack(song.songSource);
    setIndex(index);
    setTitle(song.songTitle)
  }

  const nextJam = (setList: Array<SetList>, index: number) => {
    const songCount = index + 1;
    // possible alt method for resetting last song
    // const songCount = (index + 1) % setList.length;
    const len = setList.length;

    if (songCount >= len) {
      setTrack(setList[0].songSource)
      setTitle(setList[0].songTitle)
      setIndex(0)
    } else {
      setTrack(setList[songCount].songSource)
      setTitle(setList[songCount].songTitle)
      setIndex(index + 1)
    }
  }

  const renderSongs = (songs: Array<SetList>) => {
    return (
      songs && songs.map((data, index) =>
        <div className="allSongs" key={data.songSource} onClick={() => songPick(data, index)} role="presentation">{data.songTitle}</div>,
      )
    );
  }

    return (
      state.setList ?
        <div className="allSongsContainer">
          <div className="showHeading"> {state.showTitle} </div>
          {renderSongs(state.setList)}

          <ReactAudioPlayer
            src={track}
            style={{ marginTop: '1em' }}
            setList={state.setList}
            songIndex={index}
            nextJam={nextJam}
            autoPlay
          />

          <div style={{ color: 'blue', fontFamily: '"Comic Sans MS", cursive, sans-serif' }}>
            { title }
          </div>

        </div>
        :
        <div />
    );
}

SongComponent.propTypes = {
  songs: PropTypes.object,
};

SongComponent.defaultProps = {
  songTitle: null,
  songs: null,
};

export default SongComponent