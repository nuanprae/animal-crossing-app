import PropTypes from 'prop-types';

import MusicPlayer from '../MusicPlayer/MusicPlayer';

import './header.css';

const Header = (props) => {
  return (
    <header className={`header ${props.className}`}>
      <section className="sub-header">
        <h4>{props.location}</h4>
        <img className="weather-icon" src={props.image} alt={props.alt} /> <h4>{props.date}</h4>
        <h4>{props.time}</h4>
        <MusicPlayer />
      </section>
    </header>
  );
};

Header.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.string,
  time: PropTypes.string,
};

export default Header;
