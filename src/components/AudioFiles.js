import React from 'react'

function AudioFiles({
    song,
    getSongData,
    index
 }) {
  return (
    <div className='player-container' onClick={() => getSongData(song, index)}>
        <h4 className='song-name'>{song.name}</h4>
    </div>
  )
}

export default AudioFiles 