import { useEffect, useState } from 'react';
import Header from '../Header/Header';
// import HomePage from '../../pages/HomePage/HomePage';
import FishPage from '../../pages/FishPage/FishPage';
import SeaCreaturesPage from '../../pages/SeaCreaturesPage/SeaCreaturesPage';
import BugsPage from '../../pages/BugsPage/BugsPage';
import * as utils from '../../utils';

import './app.css';

import useFetchWeatherData from '../../hooks/useFetchWeatherData';

const dayNumber = utils.getDayNumber();
const monthName = utils.getMonthName();
const timeAtLoad = utils.getTime();

const App = () => {
  const [currentTime, setCurrentTime] = useState(timeAtLoad);

  const { city, weatherIcon, weatherDescription } = useFetchWeatherData();

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
