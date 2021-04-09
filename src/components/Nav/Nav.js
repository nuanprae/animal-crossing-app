import PropTypes from 'prop-types';

import './nav.css';

const Nav = (props) => {
  return (
    <nav className={`nav ${props.className}`}>
      <li>Fish</li>
      <li>Sea Creatures</li>
      <li>Bugs</li>
      <li>Daily Games</li>
    </nav>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
};
export default Nav;
