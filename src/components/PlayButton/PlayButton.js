import playButtonSvg from '../../assets/play-button.svg';

import './play-button.css';

const PlayButton = () => {
  let audio = new Audio('https://acnhapi.com/v1/hourly/1');

  return (
    <button className="play-button" onClick={() => audio.play()}>
      <img src={playButtonSvg} alt="play-button" />
    </button>
  );
};

export default PlayButton;
