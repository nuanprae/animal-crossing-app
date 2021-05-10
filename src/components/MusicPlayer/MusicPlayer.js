import { useState, useEffect } from 'react';
import playButtonSvg from '../../assets/play-button.svg';
import pauseButtonSvg from '../../assets/pause-button.svg';

import './music-player.css';
import useGetDateAndTime from '../../hooks/useGetDateAndTime';
import useFetchWeatherData from '../../hooks/useFetchWeatherData';
import useFetchAudio from '../../hooks/useFetchAudio';

const MusicPlayer = () => {
  const { audioList } = useFetchAudio();
  const { currentTime } = useGetDateAndTime();
  const { weatherID } = useFetchWeatherData();
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const time = currentTime.slice(0, 2); // TODO: check for change in time every hour

  useEffect(() => {
    if (weatherID >= 800 && weatherID <= 899) {
      const currentAudio = audioList?.filter(
        (obj) => obj['file-name'] === `BGM_24Hour_${time}_Sunny`,
      );
      const audioUrl = currentAudio[0]['music_uri'];
      setAudio(new Audio(audioUrl));
    } else if (weatherID >= 600 && weatherID <= 699) {
      const currentAudio = audioList?.filter(
        (obj) => obj['file-name'] === `BGM_24Hour_${time}_Snowy`,
      );
      const audioUrl = currentAudio[0]['music_uri'];
      setAudio(new Audio(audioUrl));
    } else if (weatherID >= 200 && weatherID <= 599) {
      const currentAudio = audioList?.filter(
        (obj) => obj['file-name'] === `BGM_24Hour_${time}_Rainy`,
      );
      const audioUrl = currentAudio[0]['music_uri'];
      setAudio(new Audio(audioUrl));
    }
  }, [audioList, time, weatherID]);

  useEffect(() => {
    if (isPlaying) {
      audio.loop = true;
      audio?.play();
    } else if (!isPlaying) {
      audio?.pause();
    }
    return () => {
      audio?.pause();
    };
  }, [isPlaying, audio]);

  const toggle = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else if (!isPlaying) {
      setIsPlaying(true);
    }
  };

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
