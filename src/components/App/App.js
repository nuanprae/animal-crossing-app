import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
// import HomePage from '../../pages/HomePage/HomePage';
import FishPage from '../../pages/FishPage/FishPage';
import SeaCreaturesPage from '../../pages/SeaCreaturesPage/SeaCreaturesPage';
import BugsPage from '../../pages/BugsPage/BugsPage';
import * as utils from '../../utils';

import './app.css';

const dayNumber = utils.getDayNumber();
const monthName = utils.getMonthName();
const timeAtLoad = utils.getTime();

const App = () => {
  const [city, setCity] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');
  const [weatherDescription, setWeatherDescription] = useState('');

  useEffect(() => {
    const fetchWeatherData = () => {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const apiCallResponse = await axios.get(
            `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`,
          );
          const weatherData = apiCallResponse.data;
          setCity(weatherData.name);
          setWeatherIcon(weatherData.weather[0].icon);
          setWeatherDescription(weatherData.weather[0].description);
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeatherData();
  }, []);

  const [currentTime, setCurrentTime] = useState(timeAtLoad);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(utils.getTime());
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <section className="app">
      <Header
        className={'header'}
        location={city}
        image={weatherIcon}
        alt={weatherDescription}
        date={`${dayNumber} ${monthName}`}
        time={currentTime}
      />
      <section className="page">
        <SeaCreaturesPage />
        <FishPage />
        <BugsPage />
      </section>
    </section>
  );
};

export default App;
