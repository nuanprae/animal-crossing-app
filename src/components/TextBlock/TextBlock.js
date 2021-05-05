import PropTypes from 'prop-types';

import './text-block.css';

const TextBlock = (props) => {
  return <h4 className={`text-block ${props.className}`}>{props.text}</h4>;
};

TextBlock.propTypes = {
  className: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TextBlock;
