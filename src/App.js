import { useState } from 'react';
import './App.css';
import { audios } from './audioData';
import AudioFiles from './components/AudioFiles';
import Player from './components/Player';

function App() {
  //console.log(audios)
  const [songs, setSongs] = useState(audios);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const getSongData = (song,index) => {
    setCurrentIndex(index)
    setCurrentSong(song)
  }

  const nextSong= () => {
    setCurrentIndex(currentIndex + 1)
    setCurrentSong(audios[currentIndex + 1])
  }

  const prevSong= () => {
    setCurrentIndex(currentIndex - 1)
    setCurrentSong(audios[currentIndex - 1])
  }
  return (
    <>
      <div className='player-main'>
        <Player 
        currentSong={currentSong}
        currentIndex={currentIndex}
        nextSong={nextSong}
        prevSong={prevSong}
        />
      </div>
      {/* <div className='app-main'>
        {songs.map((song, index) => {
          return (
            <AudioFiles 
            song={song}
            getSongData={getSongData}
            />
          )
        })}   
      </div>   */}
    </>
  );
}

export default App;
