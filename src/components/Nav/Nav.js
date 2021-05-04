import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import './nav.css';

const Nav = (props) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className={`nav ${props.className}`}>
      <Link to="/" className={`link ${pathname === '/' && 'active'}`}>
        Home
      </Link>
      <Link to="/fish" className={`link ${pathname === '/fish' && 'active'}`}>
        Fish
      </Link>
      <Link to="/sea-creatures" className={`link ${pathname === '/sea-creatures' && 'active'}`}>
        Sea Creatures
      </Link>
      <Link to="/bugs" className={`link ${pathname === '/bugs' && 'active'}`}>
        Bugs
      </Link>
    </nav>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
};
export default Nav;
