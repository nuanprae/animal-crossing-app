import PropTypes from 'prop-types';

import playButtonSvg from '../../assets/play-button.svg';

import './play-button.css';

const PlayButton = (props) => {
  return (
    <button className="play-button" onClick={props.onClick}>
      <img src={playButtonSvg} alt="play-button" />
    </button>
  );
};

PlayButton.propTypes = {
  onClick: PropTypes.func,
};

export default PlayButton;
