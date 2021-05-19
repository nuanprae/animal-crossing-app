import PropTypes from 'prop-types';

import MusicPlayer from '../MusicPlayer/MusicPlayer';

import './day-info.css';

const DayInfo = (props) => {
  return (
    <section className={`day-info ${props.className}`}>
      <h4>{props.location}</h4>
      <img className="weather-icon" src={props.weatherIcon} alt={props.alt} />
      <h4>{props.date}</h4>
      <h4>{props.time}</h4>
      <MusicPlayer />
    </section>
  );
};

DayInfo.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  date: PropTypes.string,
  weatherIcon: PropTypes.string,
  location: PropTypes.string,
  time: PropTypes.string,
};

export default DayInfo;
