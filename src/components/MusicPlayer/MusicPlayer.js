import { useState, useEffect } from 'react';

import PauseButton from '../../components/PauseButton/PauseButton';
import PlayButton from '../../components/PlayButton/PlayButton';

import './music-player.css';

import useFetchAudio from '../../hooks/useFetchAudio';
import useFetchWeatherData from '../../hooks/useFetchWeatherData';
import useGetDateAndTime from '../../hooks/useGetDateAndTime';

const MusicPlayer = () => {
  const { audioList } = useFetchAudio();
  const { currentTime } = useGetDateAndTime();
  const { weatherID } = useFetchWeatherData();

  const [audio, setAudio] = useState(null);
  const [hourlyID, setHourlyID] = useState(currentTime.slice(0, 2));
  const [isPlaying, setIsPlaying] = useState(false);

  // change audio every hour
  const date = new Date();
  const minutes = date.getMinutes();
  useEffect(() => {
    if (minutes === 0) {
      setHourlyID(currentTime.slice(0, 2));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minutes]);

  // change audio every minute
  // const date = new Date();
  // const seconds = date.getSeconds();
  // useEffect(() => {
  //   if (seconds === 0) {
  //     setHourlyID(currentTime.slice(3, 5));
  //   }
  // }, [seconds]);

  useEffect(() => {
    if (weatherID >= 800 && weatherID <= 899) {
      const currentAudio = audioList?.filter(
        (obj) => obj['file-name'] === `BGM_24Hour_${hourlyID}_Sunny`,
      );
      const audioUrl = currentAudio[0]['music_uri'];
      if (audioUrl) {
        setAudio(new Audio(audioUrl));
      }
    } else if (weatherID >= 600 && weatherID <= 699) {
      const currentAudio = audioList?.filter(
        (obj) => obj['file-name'] === `BGM_24Hour_${hourlyID}_Snowy`,
      );
      const audioUrl = currentAudio[0]['music_uri'];
      if (audioUrl) {
        setAudio(new Audio(audioUrl));
      }
    } else if (weatherID >= 200 && weatherID <= 599) {
      const currentAudio = audioList?.filter(
        (obj) => obj['file-name'] === `BGM_24Hour_${hourlyID}_Rainy`,
      );
      const audioUrl = currentAudio[0]['music_uri'];
      if (audioUrl) {
        setAudio(new Audio(audioUrl));
      }
    }
  }, [audioList, hourlyID, weatherID]);

  useEffect(() => {
    if (isPlaying) {
      audio?.play();
      audio.loop = true;
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
      {isPlaying ? <PauseButton onClick={toggle} /> : <PlayButton onClick={toggle} />}
    </section>
  );
};

export default MusicPlayer;
