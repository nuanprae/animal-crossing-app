import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './nav.css';

const Nav = (props) => {
  return (
    <nav className={`nav ${props.className}`}>
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/fish" className="link">
        Fish
      </Link>
      <Link to="/sea-creatures" className="link">
        Sea Creatures
      </Link>
      <Link to="/bugs" className="link">
        Bugs
      </Link>
    </nav>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
};
export default Nav;
