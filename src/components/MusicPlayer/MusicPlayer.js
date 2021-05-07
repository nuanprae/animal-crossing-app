import { useState, useEffect } from 'react';
import playButtonSvg from '../../assets/play-button.svg';
import pauseButtonSvg from '../../assets/pause-button.svg';

import './music-player.css';

const MusicPlayer = () => {
  const [audio] = useState(new Audio('https://acnhapi.com/v1/hourly/1'));

  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else if (!isPlaying) {
      setIsPlaying(true);
    }
  };
  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else if (!isPlaying) {
      audio.pause();
    }
  }, [isPlaying, audio]);

  return (
    <section className="music-player">
      {isPlaying ? (
        <button className="button" onClick={toggle}>
          <img src={pauseButtonSvg} alt="pause-button" />
        </button>
      ) : (
        <button className="button" onClick={toggle}>
          <img src={playButtonSvg} alt="play-button" />
        </button>
      )}
    </section>
  );
};

export default MusicPlayer;
