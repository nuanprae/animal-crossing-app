import { useState, useEffect } from 'react';
import playButtonSvg from '../../assets/play-button.svg';
import pauseButtonSvg from '../../assets/pause-button.svg';

import './music-player.css';
import useGetDateAndTime from '../../hooks/useGetDateAndTime';

const MusicPlayer = () => {
  const { currentTime } = useGetDateAndTime();
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // setAudio(new Audio('https://acnhapi.com/v1/hourly/15'));
    const findCurrentAudio = () => {
      console.log(currentTime.slice(0, 2));
      if (currentTime.slice(0, 2) === '14') {
        setAudio(new Audio('https://acnhapi.com/v1/hourly/14'));
      } else if (currentTime.slice(0, 2) === '15') {
        console.log('not working');
      }
    };
    findCurrentAudio();
  }, [currentTime]);

  const toggle = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else if (!isPlaying) {
      setIsPlaying(true);
    }
  };
  useEffect(() => {
    if (isPlaying) {
      audio?.play();
    } else if (!isPlaying) {
      audio?.pause();
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
