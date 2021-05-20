import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import homeIcon from '../../assets/cabin.png';
import fishIcon from '../../assets/cherry-salmon.png';
import seaStarIcon from '../../assets/sea-star.png';
import bugIcon from '../../assets/butterfly.png';

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
        <img className="image-link" src={fishIcon} alt="fish-nav-link" />
      </Link>
      <Link to="/sea-creatures" className={`link ${pathname === '/sea-creatures' && 'active'}`}>
        <img className="image-link" src={seaStarIcon} alt="sea-creature-nav-link" />
      </Link>
      <Link to="/bugs" className={`link ${pathname === '/bugs' && 'active'}`}>
        <img className="image-link" src={bugIcon} alt="bug-nav-link" />
      </Link>
    </nav>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
};

export default Nav;
