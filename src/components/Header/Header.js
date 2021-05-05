import PropTypes from 'prop-types';
import PlayButton from '../PlayButton/PlayButton';
import './header.css';

const Header = (props) => {
  return (
    <header className={`header ${props.className}`}>
      <h2 className="header-text">Animal Crossing Daily Report</h2>
      <section className="sub-header">
        <h4>{props.location}</h4>
        <img className="weather-icon" src={props.image} alt={props.alt} />
        <h4>{props.date}</h4>
        <h4>{props.time}</h4>
        <PlayButton />
      </section>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
};
export default Header;
