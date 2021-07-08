import PropTypes from 'prop-types';

import MusicPlayer from '../MusicPlayer/MusicPlayer';

import './day-info.css';

const DayInfo = ({ alt, date, location, time, weatherIcon }) => {
  return (
    <section className="day-info">
      <h4>{location}</h4>
      <img className="weather-icon" src={weatherIcon} alt={alt} />
      <h4>{date}</h4>
      <h4>{time}</h4>
      <MusicPlayer />
    </section>
  );
};

DayInfo.propTypes = {
  alt: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
  time: PropTypes.string,
  weatherIcon: PropTypes.string,
};

export default DayInfo;
