import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Header from '../Header/Header';
import HomePage from '../../pages/HomePage/HomePage';
import Nav from '../../components/Nav/Nav';
import FishPage from '../../pages/FishPage/FishPage';
import SeaCreaturesPage from '../../pages/SeaCreaturesPage/SeaCreaturesPage';
import BugsPage from '../../pages/BugsPage/BugsPage';

import './app.css';

import useGetDateAndTime from '../../hooks/useGetDateAndTime';
import useFetchWeatherData from '../../hooks/useFetchWeatherData';

const queryClient = new QueryClient();

const App = () => {
  const { dayNumber, monthName, currentTime } = useGetDateAndTime();
  const { city, weatherIcon, weatherDescription } = useFetchWeatherData();

  return (
    <section className="app">
      <Header
        className="header"
        location={city}
        image={weatherIcon}
        alt={weatherDescription}
        date={`${dayNumber} ${monthName}`}
        time={currentTime}
      />
      <section className="tabs">
        <QueryClientProvider client={queryClient}>
          <Router>
            <Nav className="nav" />
            <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route path="/fish" component={FishPage}></Route>
              <Route path="/sea-creatures" component={SeaCreaturesPage}></Route>
              <Route path="/bugs" component={BugsPage}></Route>
            </Switch>
          </Router>
        </QueryClientProvider>
      </section>
    </section>
  );
};

export default App;
