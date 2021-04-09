import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './nav.css';

const Nav = (props) => {
  return (
    <nav className={`nav ${props.className}`}>
      <Link to="/FishPage" className="link">
        Fish
      </Link>
      <Link to="/SeaCreatures" className="link">
        Sea Creatures
      </Link>
      <Link to="/Bugs" className="link">
        Bugs
      </Link>
      <Link to="/DailyGames" className="link">
        Daily Games
      </Link>
    </nav>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
};
export default Nav;
