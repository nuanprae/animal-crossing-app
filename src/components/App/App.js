import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import DayInfo from '../../components/DayInfo/DayInfo';
import Nav from '../../components/Nav/Nav';

import HomePage from '../../pages/HomePage/HomePage';
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
      <QueryClientProvider client={queryClient}>
        <DayInfo
          alt={weatherDescription}
          date={`${dayNumber} ${monthName}`}
          location={city}
          time={currentTime}
          weatherIcon={weatherIcon}
        />
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/fish" component={FishPage}></Route>
            <Route path="/sea-creatures" component={SeaCreaturesPage}></Route>
            <Route path="/bugs" component={BugsPage}></Route>
          </Switch>
          <Nav />
        </Router>
      </QueryClientProvider>
    </section>
  );
};

export default App;
