import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Fish from '../Fish/Fish';
import SeaCreatures from '../SeaCreatures/SeaCreatures';
import Bugs from '../Bugs/Bugs';
import * as utils from '../../utils';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './app.css';

const city = utils.getCity();
const weatherIcon = utils.getWeatherIcon();
const weatherDescription = utils.getWeatherDescription();

const dayNumber = utils.getDayNumber();
const monthName = utils.getMonthName();
const time = utils.getTime();

const App = () => {
  return (
    <Router>
      <section className="app">
        <Header
          className={'header'}
          location={city}
          image={weatherIcon}
          alt={weatherDescription}
          date={`${dayNumber} ${monthName}`}
          time={time}
        />
        <Nav className={'nav'} />
        <section className="page">
          <Switch>
            <Route path="/Fish" component={Fish} />
            <Route path="/SeaCreatures" component={SeaCreatures} />
            <Route path="/Bugs" component={Bugs} />
          </Switch>
        </section>
      </section>
    </Router>
  );
};

export default App;
