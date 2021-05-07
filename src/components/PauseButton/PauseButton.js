import pauseButtonSvg from '../../assets/pause-button.svg';

import './pause-button.css';

const PauseButton = (prop) => {
  return (
    <button className="pause-button" onClick={prop.onClick}>
      <img src={pauseButtonSvg} alt="pause-button" />
    </button>
  );
};

export default PauseButton;
