import PropTypes from 'prop-types';

import './text-block.css';

const TextBlock = (props) => {
  return <h4 className="text-block">{props.text}</h4>;
};

TextBlock.propTypes = {
  text: PropTypes.string,
};

export default TextBlock;
