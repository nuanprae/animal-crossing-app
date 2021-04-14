import Header from '../Header/Header';
import HomePage from '../../pages/HomePage/HomePage';
import FishPage from '../../pages/FishPage/FishPage';
import SeaCreaturesPage from '../../pages/SeaCreaturesPage/SeaCreaturesPage';
import BugsPage from '../../pages/BugsPage/BugsPage';
import * as utils from '../../utils';

import './app.css';

const city = utils.getCity();
const weatherIcon = utils.getWeatherIcon();
const weatherDescription = utils.getWeatherDescription();

const dayNumber = utils.getDayNumber();
const monthName = utils.getMonthName();
const time = utils.getTime();

const App = () => {
  return (
    <section className="app">
      <Header
        className={'header'}
        location={city}
        image={weatherIcon}
        alt={weatherDescription}
        date={`${dayNumber} ${monthName}`}
        time={time}
      />
      <section className="page">
        <SeaCreaturesPage />
      </section>
    </section>
  );
};

export default App;
