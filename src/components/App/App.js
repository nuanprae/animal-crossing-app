import Header from '../Header/Header';
import HomePage from '../../pages/HomePage/HomePage';
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
        <HomePage />
      </section>
    </section>
  );
};

export default App;
