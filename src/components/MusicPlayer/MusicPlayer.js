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
  const [hourlyID, setHourlyID] = useState(currentTime.slice(0, 2));
  // const [seconds, setSeconds] = useState(new Date().getSeconds());
  // const [minutes, setMinutes] = useState(new Date().getMinutes());

  // change audio every hour
  const date = new Date();
  const minutes = date.getMinutes();
  useEffect(() => {
    if (minutes === 0) {
      setHourlyID(currentTime.slice(0, 2));
    }
  }, [minutes]);

  // change audio every minute
  // const date = new Date();
  // const seconds = date.getSeconds();
  // useEffect(() => {
  //   if (seconds === 0) {
  //     setHourlyID(currentTime.slice(3, 5));
  //   }
  // }, [seconds]);

  // change audio every hour
  // useEffect(() => {
  //   console.log(minutes);
  //   const intervalID = setInterval(() => {
  //     setHourlyID('15');
  //     setMinutes(0);
  //     console.log(minutes);
  //     if (minutes === 0) {
  //       setHourlyID('16');
  //       console.log(minutes);
  //     }
  //   }, (60 - minutes) * 60000);
  //   return () => {
  //     clearInterval(intervalID);
  //   };
  // }, [minutes]);

  useEffect(() => {
    if (weatherID >= 800 && weatherID <= 899) {
      const currentAudio = audioList?.filter(
        (obj) => obj['file-name'] === `BGM_24Hour_${hourlyID}_Sunny`,
      );
      const audioUrl = currentAudio[0]['music_uri'];
      setAudio(new Audio(audioUrl));
    } else if (weatherID >= 600 && weatherID <= 699) {
      const currentAudio = audioList?.filter(
        (obj) => obj['file-name'] === `BGM_24Hour_${hourlyID}_Snowy`,
      );
      const audioUrl = currentAudio[0]['music_uri'];
      setAudio(new Audio(audioUrl));
    } else if (weatherID >= 200 && weatherID <= 599) {
      const currentAudio = audioList?.filter(
        (obj) => obj['file-name'] === `BGM_24Hour_${hourlyID}_Rainy`,
      );
      const audioUrl = currentAudio[0]['music_uri'];
      setAudio(new Audio(audioUrl));
    }
  }, [audioList, hourlyID, weatherID]);

  useEffect(() => {
    if (isPlaying) {
      audio?.play();
      audio.loop = true;
      console.log(audio);
      // audio.loop = true;
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
