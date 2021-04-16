import PropTypes from 'prop-types';
import './header.css';

const Header = (props) => {
  return (
    <header className={`header ${props.className}`}>
      <h2 className="header-text">Animal Crossing Daily Report</h2>
      <section className="sub-header">
        <h4>{props.location}</h4>
        <img src={props.image} alt={props.alt} />
        <h4>{props.date}</h4>
        <h4>{props.time}</h4>
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
  // time: PropTypes.string,
};
export default Header;
