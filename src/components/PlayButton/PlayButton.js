import playButtonSvg from '../../assets/play-button.svg';

import './play-button.css';

const PlayButton = (prop) => {
  return (
    <button className="play-button" onClick={prop.onClick}>
      <img src={playButtonSvg} alt="play-button" />
    </button>
  );
};

export default PlayButton;
