import PropTypes from 'prop-types';

import pauseButtonSvg from '../../assets/pause-button.svg';

import './pause-button.css';

const PauseButton = ({ onClick }) => {
  return (
    <button className="pause-button" onClick={onClick}>
      <img src={pauseButtonSvg} alt="pause-button" />
    </button>
  );
};

PauseButton.propTypes = {
  onClick: PropTypes.func,
};

export default PauseButton;
