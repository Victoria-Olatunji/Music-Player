import React, { useState, useRef,useEffect } from 'react';
import Music from '../assets/music.jpeg';
import { 
    BiPlayCircle,
    BiPauseCircle,
    BiSkipPreviousCircle, 
    BiSkipNextCircle 
} from 'react-icons/bi';

function Player({
    currentSong,
    currentIndex,
    nextSong,
    prevSong
}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const togglePlay = () => {
        setIsPlaying(!isPlaying)
    }

    useEffect(() =>{
        if(isPlaying){
            audioRef.current.play();
        }
        else{
            audioRef.current.pause();
        }
    }, [isPlaying, currentIndex])
  return (
    <div>
        <div>
            <audio
            ref={audioRef}
            src={currentSong.music}
            >

            </audio>
        </div>
        <div className='player-card'>
            {currentSong ? (
                <div>
                    <div className='image-container'>
                    <img className='music-image' src={Music} alt='Music' />
                    </div>
                    <h2 className='activeSong-name'>{currentSong.name}</h2>
                    <h4 className='activeArtist-name'>{currentSong.creator}</h4>
                </div>

            ) : (
                ""
            )}
            <div className='control-icon'>
                <BiSkipPreviousCircle
                color='white'
                className='icons'
                size={50}
                onClick={prevSong}
                />
        
                {isPlaying ? (
                    < BiPauseCircle
                    color='#ff5722'
                    size={70}
                    className='icons'
                    onClick={togglePlay}
                    />
                ) : (
                    <BiPlayCircle 
                    color='#ff5722'
                    size={70}
                    className='icons'
                    onClick={togglePlay}
                    />
                )}
                
                < BiSkipNextCircle 
                color='white'
                size={50}
                className='icons'
                onClick={nextSong}
                />
            </div>
        </div>
    </div>
  )
}

export default Player