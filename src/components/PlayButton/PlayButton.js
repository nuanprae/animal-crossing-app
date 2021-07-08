import PropTypes from 'prop-types';

import playButtonSvg from '../../assets/play-button.svg';

import './play-button.css';

const PlayButton = ({ onClick }) => {
  return (
    <button className="play-button" onClick={onClick}>
      <img src={playButtonSvg} alt="play-button" />
    </button>
  );
};

PlayButton.propTypes = {
  onClick: PropTypes.func,
};

export default PlayButton;
