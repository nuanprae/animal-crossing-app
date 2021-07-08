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

  const hours = currentTime.slice(0, 2);
  const minutes = currentTime.slice(3, 5);
  const onTheHour = parseInt(minutes) === 0;

  const [audio, setAudio] = useState(null);
  const [hourlyID, setHourlyID] = useState(currentTime.slice(0, 2));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setHourlyID(hours);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onTheHour]);

  useEffect(() => {
    if (weatherID >= 800 && weatherID <= 899) {
      const currentAudio = audioList?.filter(
        (obj) => obj['file-name'] === `BGM_24Hour_${hourlyID}_Sunny`,
      );
      if (currentAudio) {
        const audioUrl = currentAudio[0]['music_uri'];
        setAudio(new Audio(audioUrl));
      }
    } else if (weatherID >= 600 && weatherID <= 699) {
      const currentAudio = audioList?.filter(
        (obj) => obj['file-name'] === `BGM_24Hour_${hourlyID}_Snowy`,
      );
      if (currentAudio) {
        const audioUrl = currentAudio[0]['music_uri'];
        setAudio(new Audio(audioUrl));
      }
    } else {
      const currentAudio = audioList?.filter(
        (obj) => obj['file-name'] === `BGM_24Hour_${hourlyID}_Rainy`,
      );
      if (currentAudio) {
        const audioUrl = currentAudio[0]['music_uri'];
        setAudio(new Audio(audioUrl));
      }
    }
  }, [audioList, hourlyID, weatherID]);

  useEffect(() => {
    if (isPlaying && audio) {
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
