import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import homeIcon from '../../assets/cabin.png';

import './nav.css';

const Nav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="nav">
      <Link to="/" className={`link ${pathname === '/' && 'active'}`}>
        <img className="image-link" src={homeIcon} alt="home-nav-link" />
      </Link>
      <Link to="/fish" className={`link ${pathname === '/fish' && 'active'}`}>
        <img
          className="image-link"
          src="https://acnhapi.com/v1/icons/fish/20"
          alt="fish-nav-link"
        />
      </Link>
      <Link to="/sea-creatures" className={`link ${pathname === '/sea-creatures' && 'active'}`}>
        <img
          className="image-link"
          src="https://acnhapi.com/v1/icons/sea/20"
          alt="sea-creature-nav-link"
        />
      </Link>
      <Link to="/bugs" className={`link ${pathname === '/bugs' && 'active'}`}>
        <img className="image-link" src="https://acnhapi.com/v1/icons/bugs/2" alt="bug-nav-link" />
      </Link>
    </nav>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
};

export default Nav;
