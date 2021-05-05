import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import HomePage from '../../pages/HomePage/HomePage';
import Nav from '../../components/Nav/Nav';
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
        className="header"
        location={city}
        image={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt={weatherDescription}
        date={`${dayNumber} ${monthName}`}
        time={currentTime}
      />
      <section className="tabs">
        <Router>
          <Nav className="nav" />
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/fish" component={FishPage}></Route>
            <Route path="/sea-creatures" component={SeaCreaturesPage}></Route>
            <Route path="/bugs" component={BugsPage}></Route>
          </Switch>
        </Router>
      </section>
    </section>
  );
};

export default App;
